document.addEventListener('DOMContentLoaded', function() {
  const screen = document.querySelector('.screen');
  const buttons = document.querySelectorAll('.btn');
  const clearButton = document.querySelector('.btn-clear');
  const equalButton = document.querySelector('.btn-equal');

  buttons.forEach(button => {
    button.addEventListener('click', function() {
      screen.value += button.innerText;
    });
  });

  clearButton.addEventListener('click', function() {
    screen.value = '';
  });

  equalButton.addEventListener('click', function() {
    try {
      screen.value = eval(screen.value);
    } catch (error) {
      screen.value = 'Error';
    }
  });
});