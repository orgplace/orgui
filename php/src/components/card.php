<?php
require('lib/init.php');
require('lib/display_case.php');
require('lib/html5.php');
require('lib/header_lead.php');
require('lib/navbar.php');

const TITLE = 'Card';

html5(1, TITLE . ' | Org UI', function () {
}, function () {
    navbar(1); ?>

<?php
headerLead(TITLE, function () {
        ?>
<!-- TODO -->
<?php
    }); ?>

<section class="ouiFlexSideMargin sampleSection">
  <h3>Basic</h3>
  <?php displayCase('card/basic'); ?>
</section>

<section class="ouiFlexSideMargin sampleSection">
  <h3>Shorthand</h3>
  <?php displayCase('card/shorthand'); ?>
</section>

<section class="ouiFlexSideMargin sampleSection">
  <h3>Colors</h3>
  <?php displayCase('card/colors'); ?>
</section>

<?php
});
