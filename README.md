<h1>🎹 Pianofuck</h1>
<p>
  You've heard about Brainfuck, well, this is Pianofuck. It's a stack-based esoteric "programming language" that could hurt your ears. 
  To write a program, you play keys on the keyboard. Try it out on this page and watch your program execute (listen to it as well!).
</p>
<p>
  There are two basic commands: POP and PUSH. To pop an item off the stack, play <kbd>D</kbd> on the piano. 
  To push an item, play <kbd>C</kbd> on the piano followed by your number in binary (<kbd>D</kbd> for 0, <kbd>E</kbd> for 1) or <kbd>G</kbd>/<kbd>F</kbd> for the saved variables, if available. When you're finished
  play <kbd>C</kbd> again.
</p>
<p>
  We also have arithmetic functions. Play <kbd>E</kbd> followed by one of the following:
  <ul>
    <li>
      <kbd>F</kbd>: to add the top two numbers from the stack.
    </li>
    <li>
      <kbd>G</kbd>: to subtract the top two numbers from the stack.
    </li>
    <li>
      <kbd>A</kbd>: to multiply the top two numbers from the stack.
    </li>
    <li>
      <kbd>B</kbd>: to divide the top two numbers from the stack.
    </li>
    <li>
      <kbd>C</kbd>: to absolute value the top number on the stack.
    </li>
    <li>
      <kbd>D</kbd>: to duplicate the top number on the stack.
    </li>
    <li>
      <kbd>E</kbd>: to perform modulo division with the top two numbers from the stack.
    </li>
  </ul>
</p>
<p>
  And there's a bit of logic available. Play <kbd>F</kbd> followed by one of the following:
  <ul>
    <li>
      <kbd>G</kbd>: a NOT operator. If the top number on the stack is a 0, makes it a 1. Otherwise, 0.
    </li>
    <li>
      <kbd>A</kbd>: greater than with the top two numbers on the stack. 1 if true, 0 if false. 
    </li>
    <li>
      <kbd>B</kbd>: less than with the top two numbers on the stack. 1 if true, 0 if false. 
    </li>
    <li>
      <kbd>C</kbd>: equals with the top two numbers on the stack. 1 if true, 0 if false. 
    </li>
  </ul>
</p>
<p>
  Lastly, you can output the top item from your stack by playing <kbd>G</kbd> followed by one of the following:
  <ul>
    <li>
      <kbd>A</kbd>: outputs it as a number.
    </li>
    <li>
      <kbd>B</kbd>: outputs it as an ASCII character. 
    </li>
    <li>
      <kbd>C</kbd>: saves it for later use in Slot A (only value per slot).
    </li>
    <li>
      <kbd>D</kbd>: saves it for later use in Slot B (only value per slot).
    </li>
  </ul>
</p>

Try it out https://pianofuck.sampoder.com.

https://github.com/sampoder/pianofuck/assets/39828164/0860dccd-c187-404b-a346-de72b2972235

Here's a fibonacci sequence program! It's me (aka, auto hot key) typing C, D, C, C, E, C followed by G, C, C, G, E, F, G, D, C, G, C, G, G, A, C, F a bunch of times.
