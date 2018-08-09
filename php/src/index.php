<?php
require('lib/init.php');
require('lib/html5.php');
require('lib/navbar.php');

html5(0, _('Org UI'), function () {
    ?>
<?php
}, function () {
        navbar(0); ?>

<div style="background-color: #eee">
  <header class="ouiFlexSideMargin" style="text-align: center; padding: 40px 0">
      <h2>Org UI</h2>
      <p style="max-width: 800px; margin: 0 auto">
        Org UI is CSS-centered design Framework.
        Scripts in this framework are reference implementation.
        We allow existing of other scripting ecosystem.
        Therefore, we do not limit the style of your JavaScript!
      </p>
  </header>
</div>

<section class="ouiFlexSideMargin" style="padding: 40px 0">
  <h3>Getting Started</h3>

  <div class="ouiCodeBlock"><pre><span></span><span class="p">&lt;</span><span class="nt">link</span> <span class="na">rel</span><span class="o">=</span><span class="s">&quot;stylesheet&quot;</span> <span class="na">href</span><span class="o">=</span><span class="s">&quot;<script>document.write(location.toString().replace(/index(?:\.html)?$/, ''));</script>css/0.1/orgui.css&quot;</span><span class="p">&gt;</span></pre></div>
</section>

<section class="ouiFlexSideMargin" style="padding: 40px 0">
  <h3>JavaScript</h3>

  <div class="ouiCodeBlock"><pre><span></span><span class="nt">&lt;script</span> <span class="na">src=</span><span class="s">&quot;<script>document.write(location.toString().replace(/index(?:\.html)?$/, ''));</script>js/0.1/orgui-js.js&quot;</span> <span class="na">defer</span><span class="nt">&gt;&lt;/script&gt;</span></pre></div>
</section>

<?php
    });
