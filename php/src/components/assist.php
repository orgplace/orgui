<?php
require('lib/init.php');
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
    <div class="displayCase__sample" style="padding-bottom: 124px;">
      <?php require('sample-html/assist/basic.html'); ?>
    </div>
    <?php require('sample-html/assist/basic.highlite.html'); ?>
  </div>
</section>

<section class="ouiFlexSideMargin sampleSection">
  <h3>Footer</h3>
  <div class="displayCase">
    <div class="displayCase__sample" style="padding-bottom: 147px;">
      <?php require('sample-html/assist/footer.html'); ?>
    </div>
    <?php require('sample-html/assist/footer.highlite.html'); ?>
  </div>
</section>

<section class="ouiFlexSideMargin sampleSection">
  <h3>JavaScript</h3>
  <div class="displayCase">
    <div class="displayCase__sample" style="padding-bottom: 124px;">
      <?php require('sample-html/assist/js.html'); ?>
      <script><?php require('sample-js/assist/js.js'); ?></script>
    </div>
    <?php require('sample-html/assist/js.highlite.html'); ?>
    <?php require('sample-js/assist/js.highlite.html'); ?>
  </div>
</section>

<?php
});
