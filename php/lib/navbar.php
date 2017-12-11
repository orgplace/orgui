<?php
require_once('relpath.php');

function navbar($self_depth)
{
    ?>

<nav class="navbar ouiFlexSideMargin">
  <div class="navbar__left">
    <h1 class="navbar__item"><a href="<?=relpath('.', $self_depth)?>" class="brandLink">Org UI</a></h1>
    <div class="navbar__item"><a href="<?=relpath('basics.html', $self_depth)?>">Basics</a></div>
    <div class="navbar__item"><a href="<?=relpath('components/', $self_depth)?>">Components</a></div>
  </div>
</nav>

<?php
}
