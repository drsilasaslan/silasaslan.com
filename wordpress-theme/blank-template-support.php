<?php
/**
 * Plugin Name: Blank Template Support
 * Plugin URI: https://wp.silasaslan.com
 * Description: Unterstützung für das Blank-Template (iFrame-Einbettung) - Deaktiviert unnötige Styles und ermöglicht saubere Einbettung
 * Version: 1.0.0
 * Author: Dr. Silas Aslan
 * License: GPL v2 or later
 */

// Verhindere direkten Zugriff
if (!defined('ABSPATH')) {
    exit;
}

/**
 * Deaktiviere unnötige WordPress-Styles im Blank-Template
 */
function blank_template_dequeue_styles() {
    if (is_page_template('blank-template.php')) {
        // Entferne WordPress Block Library CSS
        wp_dequeue_style('wp-block-library');
        wp_dequeue_style('wp-block-library-theme');
        wp_dequeue_style('wc-blocks-style');
        wp_dequeue_style('global-styles');
        wp_dequeue_style('classic-theme-styles');
        
        // Entferne Theme-Styles
        wp_dequeue_style('flavor-style');
        wp_dequeue_style('flavor-block-style');
        wp_dequeue_style('flavor-fonts');
        
        // Entferne Emojis
        remove_action('wp_head', 'print_emoji_detection_script', 7);
        remove_action('wp_print_styles', 'print_emoji_styles');
    }
}
add_action('wp_enqueue_scripts', 'blank_template_dequeue_styles', 100);

/**
 * Entferne unnötige Meta-Tags im Blank-Template
 */
function blank_template_cleanup_head() {
    if (is_page_template('blank-template.php')) {
        remove_action('wp_head', 'wp_generator');
        remove_action('wp_head', 'wlwmanifest_link');
        remove_action('wp_head', 'rsd_link');
        remove_action('wp_head', 'wp_shortlink_wp_head');
        remove_action('wp_head', 'rest_output_link_wp_head');
        remove_action('wp_head', 'wp_oembed_add_discovery_links');
        remove_action('wp_head', 'wp_oembed_add_host_js');
    }
}
add_action('template_redirect', 'blank_template_cleanup_head');

/**
 * Erlaube iFrame-Einbettung für Blank-Template Seiten
 */
function blank_template_allow_iframe($headers) {
    if (is_page_template('blank-template.php')) {
        // Erlaube Einbettung von der eigenen Domain
        $headers['X-Frame-Options'] = 'SAMEORIGIN';
        // Alternativ für spezifische Domains:
        // unset($headers['X-Frame-Options']);
        // $headers['Content-Security-Policy'] = "frame-ancestors 'self' https://wp.silasaslan.com https://silasaslan.com";
    }
    return $headers;
}
add_filter('wp_headers', 'blank_template_allow_iframe');

/**
 * Füge Body-Klasse hinzu für Blank-Template
 */
function blank_template_body_class($classes) {
    if (is_page_template('blank-template.php')) {
        $classes[] = 'blank-template';
        $classes[] = 'iframe-ready';
    }
    return $classes;
}
add_filter('body_class', 'blank_template_body_class');
