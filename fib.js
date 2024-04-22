// script I use to do fibonacci numbers!

function fibonacci(index) {
  const notes = [
      'C', 'D', 'C', // add 0 to stack
      'C', 'E',  'C',  // add 1 to stack
      'G', 'C', // save 1 in SLOT A. removes from stack.
      'C', 'G', // add 1 to stack SLOT A
      'E', 'F', // adds top two numbers together
      'G', 'D',  // saves addition in SLOT B, removes from stack
      'C', 'G',  // add 1 to stack SLOT A
      'C', 'G', // add 1 to stack SLOT A
      'G', 'A', // outputs 1
      'C' ,'F' // adds addition result to stack
    ];
  index = index || 0;

  const intervalId = setInterval(() => {
    if (index < notes.length) {
      const note = notes[index];
      playNote(note);
      instance.handleKeyInput(note);
      index++;
    } else {
      clearInterval(intervalId);
      fibonacci(6)
    }
  }, 50);
}

document.addEventListener("click", () => fibonacci(0));