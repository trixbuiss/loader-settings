<?php

use Flarum\Extend;
use Flarum\Settings\SettingsRepositoryInterface;

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__.'/js/dist/forum.js')
        ->css(__DIR__.'/less/forum.less'),
    (new Extend\Settings)
        ->serializeToForum('userLoaderSettings', 'siegnal-loader.settings', function ($value) {
            return json_decode($value, true);
        }),
];