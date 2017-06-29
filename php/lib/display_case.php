<?php
function displayCase($name)
{
    ?>

<div class="displayCase">
  <div class="displayCase__sample">
    <?php require('sample/' . $name . '.html'); ?>
  </div>
  <?php require('sample/' . $name . '.highlite.html'); ?>
</div>

<?php
}
