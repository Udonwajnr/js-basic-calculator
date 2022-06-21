const addition =(a,b)=>{
    return a + b
}
const subtraction=(a,b)=>{
    return a - b
}
const multiplication=(a,b)=>{
    return a * b
}

const division=(a,b)=>{
    return a / b
}

while (true) {
    const question = Number(prompt('Welcome to my calculator!!!.\n Press 1 for addition.  \n Press 2 for subtraction. \n Press 3 for multiplication. \n Press 4 for division. '))
    if (question === 1) {
        let a = Number(prompt('first number'))
        let b = Number(prompt('second number'))
        alert(addition(a, b))
        break
    }

    else if (question == 2) {
        let a = Number(prompt('first number'))
        let b = Number(prompt('second number'))
        alert(subtraction(a, b))
        break

    }

    else if (question == 3) {
        let a = Number(prompt('first number'))
        let b = Number(prompt('second number'))
        alert(multiplication(a, b))
        break

    }

    else if (question == 4) {
        let a = Number(prompt('first number'))
        let b = Number(prompt('second number'))
        alert(division(a, b))
        break
    }

    else {
        alert('You have typed a wrong input.Please try again.')
    }    
}
