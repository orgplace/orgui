<?php
require('lib/init.php');
require('lib/display_case.php');
require('lib/html5.php');
require('lib/header_lead.php');
require('lib/navbar.php');

const TITLE = 'Table';

html5(1, TITLE . ' | Org UI', function () {
}, function () {
    navbar(1); ?>

<?php
headerLead(TITLE, function () {
        ?>
<?php
    }); ?>

<section class="ouiFlexSideMargin sampleSection">
  <h3>Basic</h3>
  <?php displayCase('table/basic'); ?>
</section>

<?php
});
