const assist1 = orgUi.components.Assist.from(document.getElementById('jsSample'));
assist1.addEventListener('input', event => {
  assist1.clearSuggest();
  for (let i = 1; i <= 3; i++) {
    const elm = document.createElement('div');
    elm.classList.add('ouiAssistItem');
    elm.textContent = event.target.value + ' ' + i;
    assist1.appendSuggestItem(elm);
  }
});
assist1.addEventListener('select', event => {
  assist1.getTarget().value = event.target.textContent;
});
