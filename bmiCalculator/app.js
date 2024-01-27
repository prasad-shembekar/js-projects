const form  = document.querySelector('form');

// const weight = parseInt(document.querySelector("#weight").value);
// if we take value from here it will provide you empty values. 

form.addEventListener('submit',function(e){
    e.preventDefault();

    const height = parseInt(document.querySelector("#height").value);
    const weight = parseInt(document.querySelector("#weight").value);
    const results = document.querySelector("#results");
    
    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = "Please give valid height"
    }

    
    
});