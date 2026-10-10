# 🧮 Calculator

A simple two-number calculator that runs in the browser. Enter two numbers, click Addition, Subtraction, Division, or Multiplication, and the result appears on the page right away.

## How It's Made:

**Tech used:**

<p align="left">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
</p>

The page has two number inputs, four operation buttons, and an empty `<p id="result">` that holds the answer.

In JavaScript, each button gets its own click listener and function (`addition`, `subtraction`, `division`, `multiplication`). When a button is clicked, its function:

- reads both input values and converts them from strings to numbers with `Number()`, so `2 + 3` gives `5` instead of `"23"`,
- does the math for that operation, and
- writes the answer to the page with `textContent` and a template literal, e.g. `The result is: 5`.

## Optimizations

- Combine the four functions into one `calculate(operator)` function, since each repeats the same input-reading code and only the math changes.
- Handle division by zero. Right now dividing by 0 shows `Infinity` instead of a helpful message.
- Check for empty inputs. `Number("")` returns `0`, so clicking a button with no numbers entered still shows a result.
- Round long decimals (e.g. `0.1 + 0.2` shows `0.30000000000000004`) with `toFixed()` or `Math.round()`.
- Replace the leftover starter text: the page title ("Title in the tab") and the placeholder meta description and keywords.
- Add styling and a button layout that looks more like a real calculator.

## Lessons Learned:

This project taught me the basic pattern behind most interactive pages: read input from the user, process it, and display the result in the DOM. I learned that values from input fields are always strings, so I needed `Number()` to do math instead of joining text together. Writing four nearly identical functions also showed me how much code gets repeated, and why one reusable function with a parameter would make it cleaner and easier to extend with new operations.
