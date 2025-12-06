<?php
$heroKicker        = $page->hero_kicker()->or('Thought Leadership');
$heroTitle         = $page->hero_title()->or($page->title());
$heroIntro         = $page->hero_intro();
$spotlightLabel    = $page->spotlight_label()->or('Aktueller Fokus');
$spotlightText     = $page->spotlight_text();
$upcomingTitle     = $page->upcoming_title()->or('Nächster Auftritt');
$upcomingDate      = $page->upcoming_date();
$upcomingLocation  = $page->upcoming_location();
$upcomingDesc      = $page->upcoming_description();
$cards             = $page->highlight_cards()->toStructure();
$bodyField         = $page->body();
$portrait          = $page->files()->template('portrait')->first() ?? $page->files()->first();
$panelUrl          = kirby()->url('panel');
$logoutUrl         = $panelUrl . '/logout';
?>
<!DOCTYPE html>
<html lang="de">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?= $page->title()->esc() ?> · <?= $site->title()->esc() ?></title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500&family=Inter:wght@400;500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="<?= url('assets/css/site.css') ?>">
  </head>
  <body>
    <div class="page-shell">
      <div class="page-wrapper">
        <header class="site-header">
          <span class="brand"><?= $site->title()->esc() ?></span>
          <nav class="nav-links">
            <a href="/">Start</a>
            <a href="<?= url('/#about') ?>">Über mich</a>
            <a href="<?= url('/#expertise') ?>">Expertise</a>
            <a href="<?= url('/#contact') ?>">Kontakt</a>
            <a href="<?= $logoutUrl ?>" class="text-xs uppercase tracking-widest text-[var(--muted)] hover:text-[var(--primary)]">
              Logout
            </a>
          </nav>
        </header>

        <section class="hero">
          <div>
            <p class="hero-kicker"><?= $heroKicker->esc() ?></p>
            <h1><?= $heroTitle->esc() ?></h1>
            <div><?= $heroIntro->kt() ?></div>
            <?php if ($upcomingTitle->isNotEmpty()): ?>
              <div class="badge">
                <span><?= $upcomingTitle->esc() ?></span>
                <?php if ($upcomingDate->isNotEmpty()): ?>
                  <span>· <?= $upcomingDate->esc() ?></span>
                <?php endif ?>
              </div>
            <?php endif ?>
          </div>
          <?php if ($portrait): ?>
            <figure class="hero-portrait">
              <img src="<?= $portrait->url() ?>" alt="<?= $portrait->alt()->or('Portrait')->esc() ?>">
            </figure>
          <?php endif ?>
        </section>

        <section class="content-card">
          <p class="section-label"><?= $spotlightLabel->esc() ?></p>
          <div><?= $spotlightText->kt() ?></div>
          <?php if ($upcomingTitle->isNotEmpty() || $upcomingDesc->isNotEmpty()): ?>
            <div class="grid-two">
              <div>
                <h3><?= $upcomingTitle->esc() ?></h3>
                <?php if ($upcomingLocation->isNotEmpty()): ?>
                  <p class="text-muted"><?= $upcomingLocation->esc() ?></p>
                <?php endif ?>
                <?php if ($upcomingDate->isNotEmpty()): ?>
                  <p><strong><?= $upcomingDate->esc() ?></strong></p>
                <?php endif ?>
              </div>
              <div>
                <?= $upcomingDesc->kt() ?>
              </div>
            </div>
          <?php endif ?>
        </section>

        <?php if ($cards->isNotEmpty()): ?>
          <section class="grid-two" style="margin-top:2.5rem;">
            <?php foreach ($cards as $card): ?>
              <article class="card-muted">
                <h3><?= $card->title()->esc() ?></h3>
                <p><?= $card->text()->kt() ?></p>
              </article>
            <?php endforeach ?>
          </section>
        <?php endif ?>

        <?php if ($bodyField->isNotEmpty()): ?>
          <section class="content-card" style="margin-top:2.5rem;">
            <?= $bodyField->kt() ?>
          </section>
        <?php endif ?>
      </div>

      <footer class="site-footer">
        © <?= date('Y') ?> <?= $site->title()->esc() ?> · Alle Rechte vorbehalten
      </footer>
    </div>
  </body>
</html>
