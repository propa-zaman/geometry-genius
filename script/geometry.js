
document.getElementById('btn-calculate-triangle').addEventListener('click', function(){

    const triangleBase = getInputFieldValueById('triangle-base');
    const triangleHeight = getInputFieldValueById('triangle-height');

    const triangleArea = 0.5 * triangleBase * triangleHeight;
    const triangleAreaFixed = triangleArea.toFixed(2);

    setTextElementValueById('triangle-area', triangleAreaFixed);
})

document.getElementById('btn-calculate-rectangle').addEventListener('click', function(){

    const rectangleWidth = getInputFieldValueById('rectangle-width');
    const rectangleLength = getInputFieldValueById('rectangle-length');

    const rectangleArea = rectangleWidth * rectangleLength;
    const rectangleAreaFixed = rectangleArea.toFixed(2);

    setTextElementValueById('rectangle-area', rectangleAreaFixed);
})

document.getElementById('random-triangle-color').addEventListener('mouseover', function(){
    document.getElementById('random-triangle-color').style.backgroundColor = randomColor();
})

document.getElementById('random-rectangle-color').addEventListener('mouseover', function(){
    document.getElementById('random-rectangle-color').style.backgroundColor = randomColor();
})

document.getElementById('random-parallelogram-color').addEventListener('mouseover', function(){
    document.getElementById('random-parallelogram-color').style.backgroundColor = randomColor();
})

document.getElementById('random-rhombus-color').addEventListener('mouseover', function(){
    document.getElementById('random-rhombus-color').style.backgroundColor = randomColor();
})

document.getElementById('random-pentagon-color').addEventListener('mouseover', function(){
    document.getElementById('random-pentagon-color').style.backgroundColor = randomColor();
})

document.getElementById('random-ellipse-color').addEventListener('mouseover', function(){
    document.getElementById('random-ellipse-color').style.backgroundColor = randomColor();
})