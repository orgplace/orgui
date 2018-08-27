const assist2 = orgUi.components.Assist.from(document.getElementById('jsSearchSelectSample'));
const $targetOutput = assist2.getTarget().getElementsByClassName('ouiOutput')[0];
const $searchInput = document.getElementById('jsSearchSelectSample__searchInput');
const $suggest = assist2.getSuggest();
assist2.addEventListener('blur', event => {
  event.preventDefault();

  // Use timeout to delay examination of activeElement until after blur/focus
  // events have been processed.
  setTimeout(function() {
    const focus = document.activeElement;
    if (focus !== $searchInput) {
      $suggest.style.visibility = 'hidden';
    }
  }, 1);
});
$searchInput.addEventListener('blur', () => {
  $suggest.style.visibility = 'hidden';
});
$searchInput.addEventListener('input', () => {
  assist2.clearSuggest();
  for (let i = 1; i <= 3; i++) {
    const elm = document.createElement('div');
    elm.classList.add('ouiAssistItem');
    elm.textContent = event.target.value + ' ' + i;
    assist2.appendSuggestItem(elm);
  }
})
assist2.addEventListener('select', event => {
  if (event.target.dataset['placeholder'] !== 'true') {
    $targetOutput.textContent = event.target.textContent;
  }
});
