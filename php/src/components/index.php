<?php
require('lib/init.php');
require('lib/html5.php');
require('lib/header_lead.php');
require('lib/navbar.php');

const TITLE = 'Components';

html5(1, TITLE . ' | Org UI', function () {
?>
<style>
.sampleItemCard {
  margin: 8px;
}
</style>

<?php
}, function () {
  navbar(1);
?>

<?php
  headerLead(TITLE, function () {
?>
  Components は、画面を構成する部品の集合です。
  Org UI のコンポーネントは、CSS を中心とした設計で、
  特定の JavaScript コードに依存しません。
<?php
  });
?>

<div class="ouiFlexSideMargin">
  <div style="margin: 40px -8px 0; display: flex; flex-wrap: wrap;">

<?php
  class SampleItem
  {
      public function __construct($title, $href)
      {
          $this->title = $title;
          $this->href = $href;
      }
  }

  $items = [
    new SampleItem("Button", "button.html"),
    new SampleItem("Breadcrumb", "breadcrumb.html"),
    new SampleItem("Card", "card.html"),
    new SampleItem("Field Group", "fieldGroup.html"),
    new SampleItem("Input Check", "inputCheck.html"),
    new SampleItem("Input Select", "inputSelect.html"),
    new SampleItem("Input Text", "inputText.html"),
    new SampleItem("Loading Spinner", "loadingSpinner.html"),
    new SampleItem("Overlay", "overlay.html"),
    new SampleItem("Pack", "pack.html"),
    new SampleItem("Switch", "switch.html"),
    new SampleItem("Table", "table.html"),
  ];
  foreach ($items as $item) {
?>
  <div class="ouiCard ouiCardItem sampleItemCard">
    <a href="<?= $item->href ?>"><?= $item->title ?></a>
  </div>
<?php
  }
?>
  <div>
</div>

<?php
});
