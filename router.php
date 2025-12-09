<?php

/**
 * Kirby Router für PHP Built-in Server
 * Startet mit: php -S localhost:6758 router.php
 */

$path = $_SERVER['REQUEST_URI'];
$file = __DIR__ . parse_url($path, PHP_URL_PATH);

// Statische Dateien direkt ausliefern
if (is_file($file)) {
    return false;
}

// Alle anderen Requests an Kirby weiterleiten
require __DIR__ . '/index.php';
