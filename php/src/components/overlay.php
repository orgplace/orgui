<?php
require('lib/init.php');
require('lib/display_case.php');
require('lib/html5.php');
require('lib/header_lead.php');
require('lib/navbar.php');

const TITLE = 'Overlay';

html5(TITLE . ' | Org UI', function () {
}, function () {
    navbar(); ?>

<?php
headerLead(TITLE, function () {
        ?>
Overlayに含まれる要素は、画面の手前に重ねて表示されます。
ユーザの操作を強制的に一時中断させたい場合に利用します。
<?php
    }); ?>

<section class="ouiFlexSideMargin sampleSection">
  <h3>Basic</h3>
  <?php displayCase('overlay/basic'); ?>
</section>

<?php
});
