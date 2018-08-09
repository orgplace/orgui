<?php
require('lib/init.php');
require('lib/display_case.php');
require('lib/html5.php');
require('lib/header_lead.php');
require('lib/navbar.php');

const TITLE = 'Assist';

html5(1, TITLE . ' | Org UI', function () {
}, function () {
    navbar(1); ?>

<?php
headerLead(TITLE, function () {
        ?>
Assistは、入力補完を実装するためのコンポーネントです。
<?php
    }); ?>

<section class="ouiFlexSideMargin sampleSection">
  <h3>Basic</h3>
  <div class="displayCase">
    <div class="displayCase__sample" style="padding-bottom: 120px;">
      <?php require('sample/assist/basic.html'); ?>
    </div>
    <?php require('sample/assist/basic.highlite.html'); ?>
  </div>
</section>

<?php
});
