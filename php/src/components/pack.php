<?php
require('lib/init.php');
require('lib/display_case.php');
require('lib/html5.php');
require('lib/header_lead.php');
require('lib/navbar.php');

const TITLE = 'Pack';

html5(1, TITLE . ' | Org UI', function () {
}, function () {
    navbar(1); ?>

<?php
headerLead(TITLE, function () {
        ?>
Pack を利用すると、複数のコンポーネントを 1 つにまとめることができます。
<?php
    }); ?>

<section class="ouiFlexSideMargin sampleSection">
  <h3>Basic</h3>
  <?php displayCase('pack/basic'); ?>
</section>

<?php
});
