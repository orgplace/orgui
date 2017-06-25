<?php
require('lib/display_case.php');
require('lib/html5.php');
require('lib/header_lead.php');
require('lib/navbar.php');

const TITLE = 'Input Text';

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
  <?php displayCase('inputText/basic'); ?>
</section>

<?php
});
