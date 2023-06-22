const test = document.querySelectorAll('.par');
const text = document.querySelectorAll('.text');
const sizeSalary = document.querySelector('#sizeSalary');
const btn = document.querySelector('#btn');



for (let index = 0; index < test.length; index++) {
    if (test[index].textContent == "Привіт") {
        test[index].addEventListener('click', ()=> {
            alert(test[index].textContent.length)
        })
    }
    
}


    if (text[0].textContent.length > text[1].textContent.length) {
        text[0].addEventListener('click', () => {
            text[0].style.color = 'red';
            // alert(1)
        }) 
        
    } else {
            text[1].style.color = 'brown';
            // alert(2)
    }

    
    btn.addEventListener('click', () => {
        let sumSalary = parseInt(sizeSalary.value); // введення парситься в число
        let SalaryWithBonus = sumSalary * 1.15; // ЗП + премія
        let taxAndCosts = (SalaryWithBonus * 0.9) - 190; // Податок + витрати на магазин
        let result = (taxAndCosts / 2).toFixed(2); // 50% - його частина 
      
        alert(result);
      });
    


