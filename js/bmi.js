let btn = document.getElementById('btn');

btn.addEventListener('click', function(){
    const w = 703;
    const inches =12;

    let weight = document.getElementById('weight-input').value;
    let ft = document.getElementById('ft-input').value;
    let ins = document.getElementById('in-input').value;

  
    let convertFT = ft * inches;
    console.log(convertFT);
    console.log(ins);
    let totalHeight = convertFT + parseFloat(ins);
    console.log(totalHeight);
   
    
    let result =  (weight / totalHeight / totalHeight  * w).toFixed(1);


    document.getElementById('bmi-output').value = result;

    
})