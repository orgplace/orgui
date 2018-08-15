<?php
function displayCase($name)
{
    ?>

<div class="displayCase">
  <div class="displayCase__sample">
    <?php require('sample-html/' . $name . '.html'); ?>
  </div>
  <?php require('sample-html/' . $name . '.highlite.html'); ?>
</div>

<?php
}
