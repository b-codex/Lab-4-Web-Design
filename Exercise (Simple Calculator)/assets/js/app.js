function add() {
    var numArray = []
    var arrayLength = parseInt(prompt("How many numbers do you want to operate on?"))

    for (let i = 0; i < arrayLength; i++) {
        numArray[i] = parseFloat(prompt("Enter Number " + (i + 1)))
    }
    var sum = 0
    numArray.forEach(e => {
        sum += e
        return sum
    })
    alert(sum)
    console.log(sum)
}

function sub() {
    var num1, num2;
    num1 = parseFloat(prompt("Enter 1st Number "))
    num2 = parseFloat(prompt("Enter 2nd Number "))
    var difference = num1 - num2
    alert(difference)
    console.log(difference)
}

function mul() {
    var numArray = []
    var arrayLength = parseInt(prompt("How many numbers do you want to operate on?"))

    for (let i = 0; i < arrayLength; i++) {
        numArray[i] = parseFloat(prompt("Enter Number " + (i + 1)))
    }
    var product = 1
    numArray.forEach(e => {
        product *= e
        return product
    })
    alert(product)
    console.log(product0)
}

function div() {
    var num1, num2;
    num1 = parseFloat(prompt("Enter 1st Number "))
    num2 = parseFloat(prompt("Enter 2nd Number "))
    if (num2 === parseInt(0)) {
        alert("Can't be divided by 0")
        console.log('Can\'t be divided by 0')
    } else {
        var quotient = num1 / num2
        alert(quotient)
        console.log(quotient)
    }
}

function findMin() {
    var numArray = []
    var arrayLength = parseInt(prompt("How many numbers do you want to operate on?"))

    for (let i = 0; i < arrayLength; i++) {
        numArray[i] = parseFloat(prompt("Enter Number " + (i + 1)))
    }
    numArray.sort()
    var minimum = Math.min(...(numArray))
    alert(minimum)
    console.log(minimum)
}

function findMax() {
    var numArray = []
    var arrayLength = parseInt(prompt("How many numbers do you want to operate on?"))

    for (let i = 0; i < arrayLength; i++) {
        numArray[i] = parseFloat(prompt("Enter Number " + (i + 1)))
    }
    numArray.sort()
    var maximum = Math.min(...(numArray))
    alert(maximum)
    console.log(maximum)
}

function cube() {
    var number = parseFloat(prompt("Enter a number to find it cube"))
    var cube = Math.pow(number, 3)
    alert(cube)
    console.log(cube)
}

function cubicRoot() {
    var number = parseFloat(prompt("Enter a number to find it cube"))
    var cubicRoot = Math.cbrt(number)
    alert(cubicRoot)
    console.log(cubicRoot)
}

function squareRoot() {
    var number = parseInt(prompt("Enter a number to find its square root"))
    var squareRoot = Math.sqrt(number)
    alert(squareRoot)
    console.log(squareRoot)
}

var condition = true
while (condition == true) {

    (function () {

        var op = prompt("Choose \n +  \n - \n * \n / \n minimum \n maximum \n cube \n cubic root \n square root \n quit")

        if (op == '+') {
            add()
        } else if (op == '-') {
            sub()
        } else if (op == '*') {
            mul()
        } else if (op == '/') {
            div()
        } else if (op == 'minimum') {
            findMin()
        } else if (op == 'maximum') {
            findMax()
        } else if (op == 'cube') {
            cube()
        } else if (op == 'cubic root') {
            cubicRoot()
        } else if (op == 'square root') {
            squareRoot()
        } else if (op == 'quit') {
            condition = false
        }

    })()

}