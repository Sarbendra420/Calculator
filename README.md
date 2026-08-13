# Calculator Project 

Welcome to my Calculator project!

Building this calculator was definitely one of the most challenging and rewarding projects in the Foundations path so far. It looks simple on the surface, but getting all the state tracking, edge cases, and keyboard controls working smoothly took a lot of trial, error, and debugging!

---

## 🚀 Live Demo

👉 **[View Live Project](https://sarbendra420.github.io/Calculator/)**

---

## ✨ Features

- **Basic Arithmetic:** Supports addition, subtraction, multiplication, and division.
- **Operator Chaining:** Works like a real calculator—pressing `12 + 7 -` automatically calculates `19` and gets ready for the next operation.
- **Divide-by-Zero Safety:** Displays a funny error message (`Nice Try!`) instead of crashing or showing `Infinity`.
- **Decimal Control:** Prevents users from entering invalid numbers with multiple decimals (e.g., `12.3.4.5`).
- **Backspace (`CE`) Button:** Easily delete the last typed digit without resetting the whole screen.
- **Clean Display Rounding:** Limits long decimal places (like `10 / 3`) to a maximum of 4 decimal places so numbers don't spill off the display.
- **Full Physical Keyboard Support:** Supports typing numbers `0-9`, operators `+ - * /`, `Enter` for equals, `Backspace`, and `Escape` for Clear.

---

## 🛠️ Built With

* **HTML** - Structure and layout.
* **CSS** - Flexbox & Grid for layout, custom styling for buttons, and modern heading typography.
* **JavaScript** - DOM manipulation, state management, and event handling.

---

## 💡 What I Learned & Challenges Faced

This project really pushed my understanding of JavaScript fundamentals and DOM events:

1. **Managing State:** The hardest part was keeping track of variables like `firstNumber`, `secondNumber`, `operator`, and `shouldResetDisplay`. Knowing *when* to reset the screen vs *when* to append numbers took a lot of flowcharting on paper!
2. **Preventing Decimal Overlap:** Using `.includes('.')` to make sure users can only type one decimal point per number.
3. **The `Enter` Key Bug:** I hit a tricky gotcha where pressing `Enter` on the keyboard kept running the last clicked button instead of just calculating `=`. Learning to use `e.preventDefault()` inside the `keydown` event listener was a huge "lightbulb moment"!
4. **CSS Flexbox Gotchas:** When I added my `<h1>` title, it sat right next to the calculator because `flex-direction` defaults to `row`. Switching `body` to `flex-direction: column` fixed it instantly.



