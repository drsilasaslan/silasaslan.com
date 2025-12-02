<?php
/**
 * Template Name: Blank (iFrame-Ready)
 * Template Post Type: page
 * 
 * Schlankes Template für WordPress-Seiten, die im iFrame eingebettet werden.
 * Rendert nur den Seiteninhalt ohne WP-Header/Footer.
 */

// Verhindere direkten Zugriff
if (!defined('ABSPATH')) {
    exit;
}
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="robots" content="noindex, nofollow">
    
    <!-- Frontend Stylesheet vom Haupt-Frontend -->
    <link rel="stylesheet" href="/assets/frontend.css">
    
    <!-- Google Fonts: Inter (falls nicht im frontend.css) -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet">
    
    <style>
        /* Reset & Base Styles passend zum Frontend */
        :root {
            --background: #f8f9fa;
            --foreground: #1a2332;
            --primary: #3d8b8b;
            --primary-dark: #2d6b6b;
            --accent: #c4785a;
            --muted: #6b7280;
            --muted-light: #9ca3af;
            --surface: #ffffff;
            --surface-alt: #f1f5f9;
            --border: #e2e8f0;
        }
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Inter', system-ui, -apple-system, sans-serif;
            font-size: 16px;
            line-height: 1.7;
            color: var(--foreground);
            background: var(--surface);
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
        }
        
        /* Content Container */
        .blank-content {
            max-width: 800px;
            margin: 0 auto;
            padding: 2rem 1.5rem;
        }
        
        /* Typography */
        .blank-content h1,
        .blank-content h2,
        .blank-content h3,
        .blank-content h4 {
            font-weight: 500;
            color: var(--foreground);
            margin-bottom: 1rem;
            line-height: 1.3;
        }
        
        .blank-content h1 { font-size: 2rem; font-weight: 300; }
        .blank-content h2 { font-size: 1.5rem; margin-top: 2rem; }
        .blank-content h3 { font-size: 1.25rem; margin-top: 1.5rem; }
        
        .blank-content p {
            margin-bottom: 1rem;
            color: var(--muted);
        }
        
        .blank-content a {
            color: var(--primary);
            text-decoration: none;
            transition: color 0.2s;
        }
        
        .blank-content a:hover {
            color: var(--primary-dark);
            text-decoration: underline;
        }
        
        .blank-content ul,
        .blank-content ol {
            margin: 1rem 0;
            padding-left: 1.5rem;
            color: var(--muted);
        }
        
        .blank-content li {
            margin-bottom: 0.5rem;
        }
        
        .blank-content blockquote {
            border-left: 3px solid var(--primary);
            padding-left: 1.5rem;
            margin: 1.5rem 0;
            color: var(--muted);
            font-style: italic;
        }
        
        .blank-content img {
            max-width: 100%;
            height: auto;
            border-radius: 8px;
            margin: 1rem 0;
        }
        
        .blank-content table {
            width: 100%;
            border-collapse: collapse;
            margin: 1.5rem 0;
        }
        
        .blank-content th,
        .blank-content td {
            padding: 0.75rem;
            text-align: left;
            border-bottom: 1px solid var(--border);
        }
        
        .blank-content th {
            font-weight: 500;
            color: var(--foreground);
        }
        
        .blank-content td {
            color: var(--muted);
        }
        
        /* WordPress Block Editor Styles */
        .blank-content .wp-block-separator {
            border: none;
            border-top: 1px solid var(--border);
            margin: 2rem 0;
        }
        
        .blank-content .wp-block-button__link {
            display: inline-block;
            padding: 0.75rem 1.5rem;
            background: var(--primary);
            color: white;
            border-radius: 6px;
            font-weight: 500;
            text-decoration: none;
            transition: background 0.2s;
        }
        
        .blank-content .wp-block-button__link:hover {
            background: var(--primary-dark);
            text-decoration: none;
        }
        
        /* Responsive */
        @media (max-width: 640px) {
            .blank-content {
                padding: 1.5rem 1rem;
            }
            
            .blank-content h1 { font-size: 1.75rem; }
            .blank-content h2 { font-size: 1.25rem; }
        }
    </style>
    
    <?php wp_head(); ?>
</head>
<body <?php body_class('blank-template'); ?>>

<div class="blank-content">
    <?php
    while (have_posts()) :
        the_post();
        the_content();
    endwhile;
    ?>
</div>

<?php wp_footer(); ?>
</body>
</html>
