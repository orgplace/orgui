<?php
require('lib/display_case.php');
require('lib/html5.php');
require('lib/header_lead.php');
require('lib/navbar.php');

const TITLE = 'Field Group';

html5(TITLE . ' | Org UI', function () {
}, function () {
  navbar();
?>

<?php
headerLead(TITLE, function() {
?>
<!-- TODO -->
<?php
});
?>

<section class="ouiFlexSideMargin sampleSection">
  <h3>Basic</h3>
  <?php displayCase('fieldGroup/basic'); ?>
</section>

<section class="ouiFlexSideMargin sampleSection">
  <h3>Help Text</h3>
  <?php displayCase('fieldGroup/helpText'); ?>
</section>

<section class="ouiFlexSideMargin sampleSection">
  <h3>Required</h3>
  <?php displayCase('fieldGroup/required'); ?>
</section>

<section class="ouiFlexSideMargin sampleSection">
  <h3>Error</h3>
  <?php displayCase('fieldGroup/error'); ?>
</section>

<?php
});
