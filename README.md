# Calculator Web Application
## Project Overview
This is my take on creating a simple web calculator using HTML, CSS, and JavaScript. The goal is to make a graphical interface that the user can interact with by clicking on the buttons or by typing in input from the keyboard. The calculator should be able to perform basic mathematical operations such as addition, subtraction, division, and multiplication.

## What I Learned During This Project
This was a great opportunity to put to use the basics of JavaScript used for web development, which includes DOM manipulation, different events, and event handlers. On top of that, it helped me familiarize myself with the JavaScript syntax, which differs from other programming languages in which I have a background. I also got to practice the CSS grid layout, which is a common approach for more complex website structures.

## Challanges That I Faced
* At the beginning, I wasn't really sure how to approach the execution of mathematical operations, especially if there was more than one operation performed at a time. To resolve this issue, I implemented the library called Math.js, which comes with a large set of built-in functions specifically made for mathematical problems, and I used the math.evaluate() function.
```javascript
math.evaluate('1.2 * (2 + 4.5)')     // 7.8
math.evaluate('12.7 cm to inch')     // 5 inch
math.evaluate('sin(45 deg) ^ 2')     // 0.5
```
* Another challenge that I had to overcome was that I wanted to have different CSS properties for the different types of buttons. My initial thought was to apply different classes to each one of them, but this would prove to be really code inefficient and hard to read. Instead, I found out about the CSS :nth-child() pseudo-class and implemented it into my code.
```css
.calculator-buttons-container button:nth-child(n+1):nth-child(-n+2){
    background-color: #00ac81;
}
.calculator-buttons-container button:nth-child(n+3):nth-child(-n+18) {
    background-color: #78c477;
}
```
* I also had some difficulties with making the buttons container symmetrical. To solve the problem, I had to set the container to a static width so I could calculate the padding needed on both sides and make it consistent. I also had to use the CSS justify-content property to center the buttons.
```css
main{
    width: 400px;
    margin: 300px auto;
}
.calculator-buttons-container{
    display: grid;
    grid-template-columns: 20% 20% 20% 20%;
    justify-content: center;
    gap: 15px;
    padding: 25px 0;
}
```