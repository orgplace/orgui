<?php
require('lib/init.php');
require('lib/display_case.php');
require('lib/html5.php');
require('lib/header_lead.php');
require('lib/navbar.php');

const TITLE = 'Card';

html5(TITLE . ' | Org UI', function () {
}, function () {
    navbar(); ?>

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
  <h3>Header &amp; Footer</h3>
  <?php displayCase('card/header_footer'); ?>
</section>

<section class="ouiFlexSideMargin sampleSection">
  <h3>Color variation</h3>
  <?php displayCase('card/colors'); ?>
</section>

<?php
});
