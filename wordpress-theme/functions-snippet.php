<?php
/**
 * Füge diesen Code in die functions.php deines WordPress-Themes ein,
 * oder erstelle ein eigenes Plugin dafür.
 */

/**
 * Deaktiviere unnötige WordPress-Styles im Blank-Template
 */
function blank_template_dequeue_styles() {
    if (is_page_template('blank-template.php')) {
        // Entferne WordPress Block Library CSS
        wp_dequeue_style('wp-block-library');
        wp_dequeue_style('wp-block-library-theme');
        wp_dequeue_style('wc-blocks-style'); // WooCommerce falls vorhanden
        wp_dequeue_style('global-styles');
        
        // Entferne Theme-Styles
        wp_dequeue_style('theme-style');
        
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
    }
}
add_action('init', 'blank_template_cleanup_head');

/**
 * Erlaube iFrame-Einbettung für Blank-Template Seiten
 * WICHTIG: Passe die Domain an!
 */
function blank_template_allow_iframe($headers) {
    if (is_page_template('blank-template.php')) {
        // Erlaube Einbettung nur von der eigenen Domain
        $headers['X-Frame-Options'] = 'SAMEORIGIN';
        // Oder für spezifische Domain:
        // $headers['Content-Security-Policy'] = "frame-ancestors 'self' https://wp.silasaslan.com";
    }
    return $headers;
}
add_filter('wp_headers', 'blank_template_allow_iframe');
