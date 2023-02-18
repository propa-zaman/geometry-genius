

// calculate the geometrical value
document.getElementById('btn-calculate-triangle').addEventListener('click', function(){

    const triangleBase = getInputFieldValueById('triangle-base');
    const triangleHeight = getInputFieldValueById('triangle-height');

    const triangleArea = 0.5 * triangleBase * triangleHeight;
    const triangleAreaFixed = triangleArea.toFixed(2);

    if(triangleBase == '' && triangleHeight == ''){
        alert('Input field can not be empty');
    }
    if(isNaN(triangleBase) && isNaN(triangleHeight)){
        alert('Enter a number');
    } 
    else{
        setTextElementValueById('triangle-area', triangleAreaFixed);
      
    }    

})

document.getElementById('btn-calculate-rectangle').addEventListener('click', function(){

    const rectangleWidth = getInputFieldValueById('rectangle-width');
    const rectangleLength = getInputFieldValueById('rectangle-length');

    const rectangleArea = rectangleWidth * rectangleLength;
    const rectangleAreaFixed = rectangleArea.toFixed(2);

    if(rectangleWidth == '' && rectangleLength == ''){
        alert('Input field can not be empty')
    }

    if(isNaN(rectangleWidth) && isNaN(rectangleLength)){
        alert('Enter a number');
    } 
    else{
        setTextElementValueById('rectangle-area', rectangleAreaFixed);
      
    }  

    
})

document.getElementById('btn-calculate-parallelogram').addEventListener('click', function(){
    var table = document.createElement('table');
    table.innerHTML = "<tr><td>3.</td><td>Parallelogram-</td><td>120cm<sup>2</sup></td></tr>";
    document.getElementById("add-iteam").appendChild(table);
})

document.getElementById('btn-calculate-rhombus').addEventListener('click', function(){
    var table = document.createElement('table');
    table.innerHTML = "<tr><td>4.</td><td>Rhombus-</td><td>64cm<sup>2</sup></td></tr>";
    document.getElementById("add-iteam").appendChild(table);
})

document.getElementById('btn-calculate-pentagon').addEventListener('click', function(){
    var table = document.createElement('table');
    table.innerHTML = "<tr><td>5.</td><td>Pentagon-</td><td>30cm<sup>2</sup></td></tr>";
    document.getElementById("add-iteam").appendChild(table);
})

document.getElementById('btn-calculate-ellipse').addEventListener('click', function(){
    var table = document.createElement('table');
    table.innerHTML = "<tr><td>6.</td><td>Ellipse-</td><td>125.6cm<sup>2</sup></td></tr>";
    document.getElementById("add-iteam").appendChild(table);
})


// generate random color
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