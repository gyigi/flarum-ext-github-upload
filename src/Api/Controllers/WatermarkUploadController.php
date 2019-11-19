<?php

namespace Irony\Github\Upload\Api\Controllers;

use Flarum\Api\Controller\UploadFaviconController;
use Flarum\Group\Group;
use Illuminate\Support\Str;
use League\Flysystem\Adapter\Local;
use League\Flysystem\Filesystem;
use League\Flysystem\MountManager;
use Psr\Http\Message\ServerRequestInterface;
use Tobscure\JsonApi\Document;

class WatermarkUploadController extends UploadFaviconController
{
    public function data(ServerRequestInterface $request, Document $document)
    {
        $this->assertAdmin($request->getAttribute('actor'));

        $file = array_get($request->getUploadedFiles(), 'flagrow/watermark');

        $tmpFile = tempnam($this->app->storagePath().'/tmp', 'flagrow.watermark');

        $file->moveTo($tmpFile);

        $mount = new MountManager([
            'source' => new Filesystem(new Local(pathinfo($tmpFile, PATHINFO_DIRNAME))),
            'target' => new Filesystem(new Local($this->app->storagePath())),
        ]);

        if (($path = $this->settings->get('irony.github.upload.watermark')) && $mount->has($file = "target://$path")) {
            $mount->delete($file);
        }

        $uploadName = 'watermark-'.Str::lower(Str::random(8));

        $mount->move('source://'.pathinfo($tmpFile, PATHINFO_BASENAME), "target://$uploadName");

        $this->settings->set('irony.github.upload.watermark', $uploadName);

        return [
            'groups' => Group::whereVisibleTo($request->getAttribute('actor'))->get(),
        ];
    }
}