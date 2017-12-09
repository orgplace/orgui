<?php
require('lib/init.php');
require('lib/html5.php');
require('lib/header_lead.php');
require('lib/navbar.php');

const TITLE = 'Components';

html5(TITLE . ' | Org UI', function () {
}, function () {
    navbar(); ?>

<?php
headerLead(TITLE, function () {
        ?>
  Components は、画面を構成する部品の集合です。
  Org UI のコンポーネントは、CSS を中心とした設計で、
  特定の JavaScript コードに依存しません。
<?php
    }); ?>

<div class="ouiFlexSideMargin" style="padding: 40px 0; display: flex; flex-wrap: wrap;">

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
  new SampleItem("Switch", "switch.html"),
];
    foreach ($items as $item) {
        ?>
  <div class="ouiCard">
    <div class="ouiCard__content">
      <a href="<?= $item->href ?>"><?= $item->title ?></a>
    </div>
  </div>
<?php
    } ?>

</div>

<?php
});
