const resultElement = document.getElementById('result')
const submitBtn = document.getElementById('submit')



submitBtn.onclick = function (){
    resultElement.textContent = sum
    const input1 = document.getElementById('input1')
    const input2 = document.getElementById('input2')
    const sum = Number(input1.value) + Number(input2.value)

}

