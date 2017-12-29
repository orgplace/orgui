<?php
require('lib/init.php');
require('lib/display_case.php');
require('lib/html5.php');
require('lib/header_lead.php');
require('lib/navbar.php');

const TITLE = 'Panel';

html5(1, TITLE . ' | Org UI', function () {
}, function () {
    navbar(1); ?>

<?php
headerLead(TITLE, function () {
        ?>
  Use it to make a message stand out by background color.
  Only for messages that you want to pay attention to.
  Do not use it excessively in one page.
<?php
    }); ?>

<section class="ouiFlexSideMargin sampleSection">
  <h3>Basic</h3>
  <?php displayCase('panel/basic'); ?>
</section>

<section class="ouiFlexSideMargin sampleSection">
  <h3>Color variation</h3>
  <?php displayCase('panel/colors'); ?>
</section>

<?php
});
