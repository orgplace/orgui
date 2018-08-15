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

function displayJsCase($name)
{
  ?>

<div class="displayCase">
  <div class="displayCase__sample">
    <?php require('sample-html/' . $name . '.html'); ?>
    <script><?php require('sample-js/' . $name . '.js'); ?></script>
  </div>
  <?php require('sample-html/' . $name . '.highlite.html'); ?>
  <?php require('sample-js/' . $name . '.highlite.html'); ?>
</div>

<?php
}
