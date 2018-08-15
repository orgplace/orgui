const assist = orgUi.components.Assist.from(document.getElementById('jsSample'));
assist.addEventListener('input', event => {
  assist.clearSuggest();
  for (let i = 1; i <= 3; i++) {
    const elm = document.createElement('div');
    elm.classList.add('ouiAssistItem');
    elm.textContent = event.target.value + ' ' + i;
    assist.appendSuggestItem(elm);
  }
});
assist.addEventListener('select', event => {
  assist.getTarget().value = event.target.textContent;
});
