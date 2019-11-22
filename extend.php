<?php

namespace Irony\Github\Upload;

use Flarum\Extend;
use Flarum\Api\Event\Serializing;
use Illuminate\Contracts\Events\Dispatcher;

return [
    (new Extend\Routes('api'))
        ->post('/irony/github/upload', 'irony.github.upload', Api\Controllers\UploadController::class),

    (new Extend\Frontend('admin'))
        ->js(__DIR__ . '/js/dist/admin.js'),

    (new Extend\Frontend('forum'))
        ->css(__DIR__ . '/resources/less/forum/forum.less')
        ->js(__DIR__ . '/js/dist/forum.js'),

    new Extend\Locales(__DIR__ . '/resources/locale'),

    function (Dispatcher $events) {
        $events->listen(Serializing::class, Listeners\AddUploadsApi::class);
    },
];
