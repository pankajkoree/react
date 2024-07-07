### JavaScript Projects

# Project 1 : Theme Changer

## Solution Code

### index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>theme changer</title>
    <script src="script.js" defer></script>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
        <button class="gray"></button>
        <button class="pink"></button>
        <button class="red"></button>
        <button class="green"></button>
        <button class="purple"></button>
  </body>
</html>
```

### style.css

```css
* {
  margin: 0;
  padding: 0;
}
body{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  gap: 5px;
}
.gray,
.pink,
.red,
.green,
.purple {
  border: 1px solid #000;
  width: 100px;
  height: 100px;
}
.gray {
  background-color: gray;
}
.pink {
  background: pink;
}
.red {
  background: red;
}
.green {
  background: green;
}
.purple {
  background: purple;
}
```


### script.js
```javascript
const buttons = document.querySelectorAll("button")

buttons.forEach((button) => {
    button.addEventListener('click',(e) => {
        document.body.style.backgroundColor = e.target.className
    })
})  

```