<?php
function headerLead($title, $lead)
{
    ?>
<div class="header">
  <header class="header__wrapped ouiFlexSideMargin">
      <h2><?= $title ?></h2>
      <p class="header__wrapped__lead"><?php $lead(); ?></p>
  </header>
</div>
<?php
}
