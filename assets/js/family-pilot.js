// With JavaScript disabled all three actual screenshots remain available.
(() => {
  const picker = document.querySelector('.screen-picker');
  if (!picker) return;
  const buttons = [...picker.querySelectorAll('button')];
  const examples = [...document.querySelectorAll('.app-example')];
  function show(index) {
    examples.forEach((example, i) => { example.hidden = i !== index; });
    buttons.forEach((button, i) => button.setAttribute('aria-pressed', String(i === index)));
  }
  buttons.forEach((button, i) => { button.setAttribute('aria-controls', examples[i].id); button.addEventListener('click', () => show(i)); });
  show(0);
  picker.hidden = false;
})();
