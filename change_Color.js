function changeColor(){
    const background = document.getElementsByClassName("container")[0];

    const randomColor = () => Math.floor(Math.random() * 256);
    const bgColor = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;

    const textColor = `rgb(${255-randomColor()}, ${255-randomColor()}, ${255-randomColor()})`;

    background.style.backgroundColor = bgColor;
    background.style.color = textColor;
}