Tone.start();

let notEnoughItems = new Error("Your stack does not have enough items to perform this operation.")

class Instance {
  constructor() {
    this.stack = new Stack();
    this.inProgress = null;
  }
  handleKeyInput(key) {
    if (this.inProgress) {
      this.inProgress = this.inProgress.handleKeyInput(key);
    } else {
      switch (key) {
        case "C":
          this.inProgress = new Pusher(this.stack);
          break;
        case "D":
          if (this.stack.isEmpty()) {
            throw notEnoughItems;
            break;
          }
          this.stack.pop();
          break;
        case "E":
          this.inProgress = new Abacus(this.stack);
          break;
        case "F":
          this.inProgress = new Logician(this.stack);
          break;
        case "G":
          this.inProgress = new Printer(this.stack);
          break;
      }
    }
  }
}

class Pusher {
  constructor(stack) {
    this.binary = "";
    this.stack = stack;
  }
  handleKeyInput(key) {
    switch (key) {
      case "C":
        if (this.binary.length > 0) {
          this.stack.push(parseInt(this.binary, 2));
        }
        return null;
        break;
      case "D":
        this.binary += "0";
        break;
      case "E":
        this.binary += "1";
        break;
    }
    return this;
  }
}

class Abacus {
  constructor(stack) {
    this.stack = stack;
  }
  handleKeyInput(key) {
    switch (key) {
      case ("C", "D", "E"):
        if (this.stack.isEmpty()) {
          throw notEnoughItems;
          break;
        }
      case "C":
        this.stack.push(Math.abs(this.stack.pop()));
        break;
      case "D":
        const item = this.stack.pop();
        this.stack.push(item);
        this.stack.push(item);
        break;
      case ("F", "G", "A", "B", "E"):
        if (this.stack.size() < 2) {
          throw notEnoughItems;
        }
        break;
      case "F":
        this.stack.push(this.stack.pop() + this.stack.pop());
        break;
      case "G":
        this.stack.push(this.stack.pop() - this.stack.pop());
        break;
      case "A":
        this.stack.push(this.stack.pop() * this.stack.pop());
        break;
      case "B":
        this.stack.push(this.stack.pop() / this.stack.pop());
        break;
      case "E":
        this.stack.push(this.stack.pop() % this.stack.pop());
        break;
    }
    return null;
  }
}

class Logician {
  constructor(stack) {
    this.stack = stack;
  }
  handleKeyInput(key) {
    switch (key) {
      case ("G", "A", "B"):
        if (this.stack.isEmpty()) {
          throw notEnoughItems;
        }
        break;
      case "G":
        this.stack.push(this.stack.pop() == 0 ? 1 : 0);
        break;
      case "A":
        this.stack.push(this.stack.pop() > this.stack.pop() ? 1 : 0);
        break;
      case "B":
        this.stack.push(this.stack.pop() < this.stack.pop() ? 1 : 0);
        break;
      case "C":
        this.stack.push(this.stack.pop() == this.stack.pop() ? 1 : 0);
        break;
    }
    return null;
  }
}

class Printer {
  constructor(stack) {
    this.stack = stack;
  }
  handleKeyInput(key) {
    switch (key) {
      case ("A", "B"):
        if (this.stack.isEmpty()) {
          throw notEnoughItems;
          break;
        }
      case "B":
        document.getElementById("output").innerHTML += `${String.fromCharCode(this.stack.pop())} <br />`
        break;
      case "A":
        document.getElementById("output").innerHTML += `${this.stack.pop()} <br />`
        break;
    }
    return null;
  }
}

// Stack() adapted from https://github.com/sampoder/ib.js

class Stack {
  constructor() {
    this.value = [];
  }
  push(item) {
    console.log(`PUSH: ${item}`)
    this.value.unshift(item);
  }
  pop() {
    const item = this.value.shift()
    console.log(`POP: ${item}`)
    return item;
  }
  isEmpty() {
    return this.value.length == 0 ? true : false;
  }
  size() {
    return this.value.length;
  }
}

const synth = new Tone.Synth().toDestination();

const instance = new Instance();

var section = 4;

document.onkeydown = function (e) {
  e = e || window.event;
  var key = e.which || e.keyCode;
  if (key === 83) {
    playNote("C", e.shiftKey);
    instance.handleKeyInput("C");
  }
  if (key === 68) {
    playNote("D", e.shiftKey);
    instance.handleKeyInput("D");
  }
  if (key === 70) {
    playNote("E", e.shiftKey);
    instance.handleKeyInput("E");
  }
  if (key === 71) {
    playNote("F", e.shiftKey);
    instance.handleKeyInput("F");
  }
  if (key === 72) {
    playNote("G", e.shiftKey);
    instance.handleKeyInput("G");
  }
  if (key === 74) {
    playNote("A", e.shiftKey);
    instance.handleKeyInput("A");
  }
  if (key === 75) {
    playNote("B", e.shiftKey);
    instance.handleKeyInput("B");
  }
  if (key === 37) {
    if (section > 1) {
      section -= 1;
      document.getElementById("sectionNo").innerText = section;
    } else {
      alert("The lowest keyboard section is 1.");
    }
  }
  if (key === 39) {
    if (section < 8) {
      section += 1;
      document.getElementById("sectionNo").innerText = section;
    } else {
      alert("The highest keyboard section is 8.");
    }
  }
};

function playNote(note, shift) {
  console.log(`${note}${shift ? "#" : ""}${section}`);
  synth.triggerAttackRelease(`${note}${shift ? "#" : ""}4`, "8n");
  document.getElementById(note).style.background = shift
    ? "#338eda"
    : "#33d6a6";
  setTimeout(() => {
    document.getElementById(note).style.background = "white";
  }, 200);
}
