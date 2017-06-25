<?php
function html5($title, $ext_head, $body)
{
?>
<!DOCTYPE html>
<html>
<head>
  <title><?=$title?></title>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <link rel="stylesheet" href="/_ui/css/0.1/orgui.css">
  <link rel="stylesheet" href="/_ui/css/0.1/orgui-coding.css">
  <link rel="stylesheet" href="/_ui/css/demo.css">
<?php $ext_head(); ?>
</head>
<body>
<?php $body(); ?>
</body>
</html>
<?php
}
?>
