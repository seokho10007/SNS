function calculate(e) {
    e.preventDefault();
  
  const mm =  document.getElementById('mm').value;  
  const inches = (parseInt(mm) * 0.0393701).toFixed(3);
  
  console.log(inches)
  
  
  const us = document.getElementById('us_size');
  const uk = document.getElementById('uk_size');
  const eu = document.getElementById('eu_size');a
  
  console.log(us)
  
  
  us.value = ((3 * inches) / 22).toFixed(2)
  uk.value = ((3 * inches) - 23).toFixed(2)
  eu.value = (1.27 * (uk_size.value + 23) + 2).toFixed(2)
  
  console.log(inches)
    
    return null;
}

document.getElementById('calc').addEventListener('click', calculate);
