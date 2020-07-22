function binaryToDecimal(num) {
    let decimalNum = 0;
    num.split('').reverse().map((digit, index) => {
         decimalNum += digit* Math.pow(2, index);
    })
    return decimalNum;
}

let op1 = ''
let op2 = ''
let operator = ''

let res = document.getElementById('res');
let btnElements = document.querySelectorAll('.btnEl');

function getResult(op1,operator, op2) {
  op1 = binaryToDecimal(op1);
  op2 = binaryToDecimal(op2);
  switch (operator) {
    case '+':
      return Number(op1) + Number(op2)
      break;
    case '-':
      return Number(op1) - Number(op2)
      break;
    case '*':
      return Number(op1) * Number(op2)
      break;
    case '/':
      return Number(op1) / Number(op2)
      break;
    default:
      return null;
      break;

  }
}


btnElements.forEach( btn => {
  btn.addEventListener('click', (e) => {
    if((btn.id === 'btn0' || btn.id === 'btn1') && operator === '') {
      res.textContent = op1 + btn.textContent;
      op1 = res.textContent;
    }
    if((btn.id === 'btn0' || btn.id === 'btn1') && operator != '') {
      res.textContent = op2 + btn.textContent;
      op2 = res.textContent;
    }
    else if(btn.id === 'btnClr') {
      res.textContent = '';
      op1 = '';
      op2 = '',
      operator = ''

    }
    else if(btn.id === 'btnEql' && op1 != '' && op2 != '') {
      if(op2 === 0 && operator === '/') res.textContent = 'Divided by zero Error'
      else {
        let result = getResult(op1,operator, op2);
        res.textContent = decimalToBinary(result)
      }
    }
    else if(btn.classList.contains('operator')) {
      if(op1 != ''){
        operator = btn.textContent;
      }
    }
  })
})

function decimalToBinary(num) {
    let dec = 0;
    let temp;
    while(num> 0) {
        if(num === 1) {
            dec = Number(dec) + 1;
            num = 0;
         }
         else {
                     let i = 0;
          while(num > Math.pow(2,i)) {
           i++;
          }
          if(num === Math.pow(2,i)) {
               temp = 1 + '0'.repeat(i);
               num = num - Math.pow(2,i);
               dec = Number(dec) + Number(temp);
          } else {
                 temp = 1 + '0'.repeat(i-1);
                num = num - Math.pow(2,i-1);
                dec = Number(dec) + Number(temp);
          }
         }
    }
    return dec;
}
