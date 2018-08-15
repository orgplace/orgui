<?php
require_once('relpath.php');

function html5($self_depth, $title, $ext_head, $body)
{
    ?>
<!DOCTYPE html>
<html>
<head>
  <title><?=$title?></title>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <link rel="stylesheet" href="<?=relpath('css/0.1/orgui.css', $self_depth)?>">
  <link rel="stylesheet" href="<?=relpath('css/0.1/orgui-coding.css', $self_depth)?>">
  <link rel="stylesheet" href="<?=relpath('css/demo.css', $self_depth)?>">
  <script src="<?=relpath('js/orgui-js.js', $self_depth)?>"></script>
<?php $ext_head(); ?>
</head>
<body>
<?php $body(); ?>
</body>
</html>
<?php
}
?>
