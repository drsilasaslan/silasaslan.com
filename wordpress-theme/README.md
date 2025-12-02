# WordPress Blank-Template für iFrame-Einbettung

## Installation

### 1. Template-Datei kopieren
Kopiere `blank-template.php` in dein aktives WordPress-Theme-Verzeichnis:
```
/wp-content/themes/DEIN-THEME/blank-template.php
```

### 2. Functions-Snippet hinzufügen
Füge den Inhalt von `functions-snippet.php` in die `functions.php` deines Themes ein.

Alternativ: Erstelle ein eigenes Plugin unter `/wp-content/plugins/blank-template-support/`:
```php
<?php
/**
 * Plugin Name: Blank Template Support
 * Description: Unterstützung für das Blank-Template (iFrame-Einbettung)
 * Version: 1.0
 */

// Füge hier den Inhalt von functions-snippet.php ein
```

### 3. Frontend-Stylesheet bereitstellen
Stelle sicher, dass `/assets/frontend.css` auf dem Server existiert und die Styles des Haupt-Frontends enthält.

## Verwendung

1. Erstelle eine neue Seite in WordPress
2. Im Seiten-Editor: **Seiten-Attribute** → **Template** → **Blank (iFrame-Ready)**
3. Speichern/Veröffentlichen
4. Die Seite ist nun unter ihrer URL ohne WP-Header/Footer verfügbar

## iFrame-Einbettung im Next.js Frontend

```tsx
// Beispiel: WordPress-Seite im iFrame einbetten
<iframe
  src="https://wp.silasaslan.com/wordpress/?page_id=6"
  className="w-full border-0"
  style={{ minHeight: '500px' }}
  title="WordPress Content"
/>
```

## Anpassungen

### Farben ändern
Die CSS-Variablen in `blank-template.php` entsprechen dem Haupt-Frontend:
```css
:root {
    --primary: #3d8b8b;      /* Türkis/Petrol */
    --accent: #c4785a;       /* Rost-Akzent */
    --foreground: #1a2332;   /* Text */
    --muted: #6b7280;        /* Sekundärer Text */
}
```

### iFrame-Domain anpassen
In `functions-snippet.php` die erlaubte Domain für iFrame-Einbettung anpassen:
```php
$headers['Content-Security-Policy'] = "frame-ancestors 'self' https://DEINE-DOMAIN.com";
```
