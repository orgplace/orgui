<?php
require('lib/init.php');
require('lib/display_case.php');
require('lib/html5.php');
require('lib/header_lead.php');
require('lib/navbar.php');

const TITLE = 'Input Text';

html5(TITLE . ' | Org UI', function () {
}, function () {
    navbar(); ?>

<?php
headerLead(TITLE, function () {
        ?>
Input Textは、ユーザから文字列を受け取るコントロールです。
<?php
    }); ?>

<section class="ouiFlexSideMargin sampleSection">
  <h3>Basic</h3>
  <?php displayCase('inputText/basic'); ?>
</section>

<?php
});
