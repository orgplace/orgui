<?php
require('lib/init.php');
require('lib/display_case.php');
require('lib/html5.php');
require('lib/header_lead.php');
require('lib/navbar.php');

const TITLE = 'Button';

html5(TITLE . ' | Org UI', function () {
}, function () {
  navbar();
?>

<?php
headerLead(TITLE, function() {
?>
Button is one of popular component to trigger events
including links via the anchor tags.
<?php
});
?>

<section class="ouiFlexSideMargin sampleSection">
  <h3>Basic</h3>
  <?php displayCase('button/basic'); ?>
</section>

<section class="ouiFlexSideMargin sampleSection">
  <h3>Color variation</h3>
  <?php displayCase('button/colors'); ?>
</section>

<section class="ouiFlexSideMargin sampleSection">
  <h3>Color variation</h3>
  <?php displayCase('button/disabled'); ?>
</section>

<?php
});
