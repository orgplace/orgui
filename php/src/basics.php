<?php
require('lib/init.php');
require('lib/html5.php');
require('lib/header_lead.php');
require('lib/navbar.php');

const TITLE = 'Basics';

html5(0, TITLE . ' | Org UI', function () {
}, function () {
    navbar(0); ?>

<?php
headerLead(TITLE, function () {
        ?>
  Org UI employs a handful of important global styles and settings that you'll need to be aware of when using it,
  all of which are almost exclusively geared towards the normalization of cross browser styles.
<?php
    }); ?>

<div class="ouiFlexSideMargin" style="padding: 40px 0">
  <section>
    <h3>Normalize</h3>
    <p>
      Org UI uses Normalize.css and some tricks for normalization.
    </p>
  </section>
  <section>
    <h3>Box sizing</h3>
    <p>
      For more straightforward sizing in CSS, we switch the global <code class="ouiCode">box-sizing</code> value from <code class="ouiCode">content-box</code> to <code class="ouiCode">border-box</code>.
    </p>
  </section>
  <section>
    <h3>Modifiers</h3>
    <p>
      Flags on blocks or elements. Use them to change appearance, behavior or state.
      The modifier itself must not have the css properties.
    </p>
    <dl>
      <dt><code class="ouiCode">isDisabled</code></dt>
      <dd>
        Depending on some conditions, it indicates a disabled state.
        It is mainly given to buttons that can not be clicked, text that can not be input, etc.
      </dd>
      <dt><code class="ouiCode">isHazarding</code></dt>
      <dd></dd>
      <dt><code class="ouiCode">isPrimary</code></dt>
      <dd></dd>
      <dt><code class="ouiCode">isRequired</code></dt>
      <dd></dd>
      <dt><code class="ouiCode">isSelected</code></dt>
      <dd></dd>
      <dt><code class="ouiCode">isSuccess</code></dt>
      <dd></dd>
      <dt><code class="ouiCode">isWarning</code></dt>
      <dd></dd>
    </dl>
  </section>
</div>

<?php
});
