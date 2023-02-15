//! Select the container 

const container = document.querySelector('.container');

//! Add the after click function to the button using callback method

container.addEventListener('submit', (event)=>{


    event.preventDefault();

//! Variabes initializer 

    let decimal = 0;
    let counter = 0;

//! THe formulas

    const result = document.querySelector('.result'); //! box where the result will b displayed
    let binary = document.querySelector('#binary').value; //! box where the binary value is inputted

    while(binary > 0){
        let lastDigit = Math.round(binary % 10);
        decimal += Math.pow(2, counter) * lastDigit;
        counter++;
        binary /= 10;
    }

    result.textContent = `Decimal Number : ${decimal}`; //! here Decimal number is the template string (becuase we use the variable decimal so the template string will be used.)
}); //! end if entire callback function for event listener