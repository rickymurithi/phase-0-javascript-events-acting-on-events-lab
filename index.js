//code!
document.addEventListener('keyup', 
  function(e) {
    if (e.key === 'ArrowLeft') {
        moveDodgerLeft();
    } else if (e.key === 'ArrowRight') {
        moveDodgerRight();
    }
  })

  function moveDodgerLeft() {
    let leftNum = dodgerLeft.style.left.replace('px', '');
    let left = parseInt(leftNum, 10);

    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }

  }

  function moveDodgerRight() {
    let leftNum = dodger.style.left.replace('px', '');
    let left = parseInt(leftNum, 10);
    if (left > 0) {
      dodger.style.left = `${left + 1}px`;
    }
  }
