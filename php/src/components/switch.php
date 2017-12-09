<?php
require('lib/init.php');
require('lib/display_case.php');
require('lib/html5.php');
require('lib/header_lead.php');
require('lib/navbar.php');

const TITLE = 'Switch';

html5(TITLE . ' | Org UI', function () {
}, function () {
    navbar(); ?>

<?php
headerLead(TITLE, function () {
        ?>
Switch は、ユーザから真偽値を受け取るコントロールです。
Input Check と異り、変更と同時に反映されることが想定されます。
<?php
    }); ?>

<section class="ouiFlexSideMargin sampleSection">
  <h3>Basic</h3>
  <?php displayCase('switch/basic'); ?>
</section>

<?php
});
