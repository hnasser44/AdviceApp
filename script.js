
const Button = document.getElementById('btn')
const Advice_id = document.querySelector('span')
const Advice_text = document.getElementById('advice-text')




function GetAdvice() {
 
    fetch('	https://api.adviceslip.com/advice').then(response => {
      return response.json()
    }).then(adviceData => {
      const Adviceobj = adviceData.slip
      const id_num = adviceData.slip
      Advice_id.innerText = id_num.id
      Advice_text.innerText =  `"${Adviceobj.advice}"`
    }).catch(error => {
      console.log(error)
    });
   
  }
