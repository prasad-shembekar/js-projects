const form  = document.querySelector('form');

// const weight = parseInt(document.querySelector("#weight").value);
// if we take value from here it will provide you empty values. 

form.addEventListener('submit',function(e){
    e.preventDefault();

    const height = parseInt(document.querySelector("#height").value);
    const weight = parseInt(document.querySelector("#weight").value);
    const results = document.querySelector("#results");
    
    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = `Please give valid height ${height}`;
    }else if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = `Please give valid height ${weight}`;
    }else{
      const bmi =  (weight / ((height*height)/10000)).toFixed(2);
    //   show result 
    

    if(bmi < 18.8){
        results.innerHTML = `<span>${bmi} and you are underweight</span>`
    }

    if(bmi > 18.8 && bmi < 24.9){
        results.innerHTML = `<span>${bmi} and you are normal weight</span>`
    }

    if(bmi > 24.9){
        results.innerHTML = `<span>${bmi} and you are over weight</span>`
    }
    }
    
    
});