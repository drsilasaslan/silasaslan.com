<?php

$kirbyRoot = __DIR__ . '/kirby';
$router    = $kirbyRoot . '/kirby/router.php';

if (is_file($router) === false) {
    http_response_code(500);
    echo "Kirby router.php konnte nicht gefunden werden.";
    return;
}

chdir($kirbyRoot);
$_SERVER['DOCUMENT_ROOT'] = $kirbyRoot;
$_SERVER['SCRIPT_FILENAME'] = $kirbyRoot . '/index.php';
$_SERVER['SCRIPT_NAME'] = '/index.php';
$_SERVER['PHP_SELF'] = $_SERVER['SCRIPT_NAME'];

require $router;
