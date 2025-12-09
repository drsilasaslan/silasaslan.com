<?php

require 'kirby/bootstrap.php';
require_once 'kirby/vendor/autoload.php';

$kirby = new Kirby([
    'urls' => [
        'assets' => '/assets',
        'css' => '/assets/css',
    ],
    'roots' => [
        'index' => __DIR__,
        'assets' => __DIR__ . '/assets',
    ],
    'options' => [
        'debug' => true,
        'panel' => [
            'install' => true,
            'css' => 'assets/css/panel.css',
        ],
    ],
]);

echo $kirby->render();
