<?php

use Kirby\Cms\App;

App::plugin('otongo/bruder-redirect', [
    'hooks' => [
        'user.login:after' => function (Kirby\Cms\User $user) {
            if ($user->role()->name() === 'bruder') {
                go('/bruder?_token=1cecbf184b');
            }
        }
    ]
]);
