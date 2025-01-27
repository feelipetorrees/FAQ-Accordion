const buttons = document.querySelectorAll('.btn-accordion')
const responses = document.querySelectorAll('.response')

function showAccordion() {
  buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
    
    button.classList.toggle('active-btn')     
      
    if(button.classList.contains('active-btn')){
        button.src = "./assets/images/icon-minus.svg"
    }else{
        button.src = "./assets/images/icon-plus.svg"
    }
      const currentResponse = responses[index]
      currentResponse.classList.toggle('active-accordion')
    })
  })
}

showAccordion()
  

