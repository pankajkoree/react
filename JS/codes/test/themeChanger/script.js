const buttons = document.querySelectorAll("button")

buttons.forEach((button) => {
    button.addEventListener('click',(e) => {
        document.body.style.backgroundColor = e.target.className
    })
})  
