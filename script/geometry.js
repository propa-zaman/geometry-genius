

// calculate the geometrical value
document.getElementById('btn-calculate-triangle').addEventListener('click', function(){

    const triangleBase = getInputFieldValueById('triangle-base');
    const triangleHeight = getInputFieldValueById('triangle-height');

    const triangleArea = 0.5 * triangleBase * triangleHeight;
    const triangleAreaFixed = triangleArea.toFixed(2);

    if(triangleBase === ''|| triangleBase === null){
        alert('Please fill the input field');
    }
    else{
        setTextElementValueById('triangle-area', triangleAreaFixed);
    }

    // if(isNaN(triangleBase) && isNaN(triangleHeight)){
    //     alert('Enter a number');
    // } 
    // else{
    //     setTextElementValueById('triangle-area', triangleAreaFixed);
      
    // }    

})

document.getElementById('btn-calculate-rectangle').addEventListener('click', function(){

    const rectangleWidth = getInputFieldValueById('rectangle-width');
    const rectangleLength = getInputFieldValueById('rectangle-length');

    const rectangleArea = rectangleWidth * rectangleLength;
    const rectangleAreaFixed = rectangleArea.toFixed(2);

    if(isNaN(rectangleWidth) && isNaN(rectangleLength)){
        alert('Enter a number');
    } 
    else{
        setTextElementValueById('rectangle-area', rectangleAreaFixed);
      
    }  

    
})

document.getElementById('btn-calculate-parallelogram').addEventListener('click', function(){
    const paraBase = getInputFieldValueById('para-base');
    const paraHeight = getInputFieldValueById('para-height');

    const parallelogramArea = paraBase * paraHeight;
    const parallelogramAreaFixed = parallelogramArea.toFixed(2);

    setTextElementValueById('parallelogram-area', parallelogramAreaFixed);
})

document.getElementById('btn-calculate-rhombus').addEventListener('click', function(){
    const rhombusD1 = getInputFieldValueById('rhombus-d1');
    const rhombusD2 = getInputFieldValueById('rhombus-d2');

    const rhombusArea = 0.5 * rhombusD1 * rhombusD2;
    const rhombusAreaFixed = rhombusArea.toFixed(2);

    setTextElementValueById('rhombus-area', rhombusAreaFixed);
})

document.getElementById('btn-calculate-pentagon').addEventListener('click', function(){
    const pentagonP = getInputFieldValueById('pentagon-p');
    const pentagonB = getInputFieldValueById('pentagon-b');

    const pentagonArea = 0.5 * pentagonP * pentagonB;
    const pentagonAreaFixed = pentagonArea.toFixed(2);

    setTextElementValueById('pentagon-area', pentagonAreaFixed);
})

document.getElementById('btn-calculate-ellipse').addEventListener('click', function(){
    const ellipseA = getInputFieldValueById('ellipse-a');
    const ellipseB = getInputFieldValueById('ellipse-b');

    const ellipseArea = 3.14 * ellipseA * ellipseB;
    const ellipseAreaFixed = ellipseArea.toFixed(2);

    setTextElementValueById('ellipse-area', ellipseAreaFixed);
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