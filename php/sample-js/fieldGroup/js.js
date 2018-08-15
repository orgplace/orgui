const fg = orgUi.components.FieldGroup.from(document.getElementById('jsSample'));
fg.getChild().addEventListener('blur', () => {
  const length = fg.getValue().length;
  fg.setHazarding(length < 5 || 10 < length);
});
