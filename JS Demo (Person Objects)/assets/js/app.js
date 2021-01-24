// var fn;
// var ln;
// var birthYear;
// var job;

// let tempAge = ageCalc(birthYear)
// let eligibleToVote;
// let familyMember = new Array();
// let numFamily;

// var weight, height;

// // Receiving Values
// fn = prompt("Your First Name?")
// sn = prompt("Your Second Name?")
// birthYear = prompt("Your BirthYear?")
// job = prompt("Your Job?")

// numFamily = parseInt(prompt("How many family member(s) do you have?"))

// weight = parseFloat(prompt("Enter Weight:"))
// height = parseFloat(prompt("Enter Height:"))

// // Receiving Family Members
// for (let i = 0; i < numFamily; i++) {
//     familyMember[i] = prompt("Member #" + (i + 1))
// }

// // Age Calculator
// function ageCalc(birthYear) {
//     return new Date().getFullYear() - birthYear
// }

// // Checking Eligibility
// tempAge = parseInt(birthYear)
// if (tempAge >= 18) {
//     eligibleToVote = true
// } else eligibleToVote = false

// // Calculating BMI
// let calcBmi = function (weight, height) {
//     let bmi = weight / (Math.pow(height, 2))
//     bmi = Number(bmi.toFixed(1));
//     if (bmi <= 18.5) {
//         console.log('You are : Underweight')
//     } else if (18.5 <= bmi <= 24.9) {
//         console.log("You are : Healthy")
//     } else if (25.0 <= bmi <= 29.9) {
//         console.log("You are : Overweight")
//     } else if (bmi >= 30) {
//         console.log("You are : Obese")
//     }
// }

// // Output
// console.log("Your name is " + fn + sn)
// console.log("Your profession is " + job)
// console.log("You are " + ageCalc(birthYear) + ' years old.')
// console.log("Can you vote? " + eligibleToVote)

// familyMember.forEach(function (member, index) {
//     console.log("Member #" + (index + 1) + " : " + member);
// });

// console.log(calcBmi(weight, height))


let personProfile = {
    fn: '',
    sn: '',
    birthYear: '',
    job: '',
    age: '',
    eligibleToVote: '',
    familyMembers: [],
    weight: '',
    height: '',
    ageCalc: function () {
        // let currentYear = new Date().getFullYear() 
        let age = this.age
        return this.age = new Date().getFullYear() - this.birthYear
    },
    checkEligibility: function () {
        let tempAge = this.age

        if (tempAge >= 18) {
            this.eligibleToVote = true
        } else this.eligibleToVote = false
    },
    calcBmi: function calcBmi() {
        let bmi = this.weight / (Math.pow(this.height, 2))
        return bmi = Number(bmi.toFixed(1));
        // if (bmi <= 18.5) {
        //     console.log('You are : Underweight')
        // } else if (18.5 <= bmi <= 24.9) {
        //     console.log("You are : Healthy")
        // } else if (25.0 <= bmi <= 29.9) {
        //     console.log("You are : Overweight")
        // } else if (bmi >= 30) {
        //     console.log("You are : Obese")
        // }
    }
}


personProfile.fn = prompt("Your First Name?")
personProfile.sn = prompt("Your Second Name?")
personProfile.birthYear = parseInt(prompt("Your BirthYear?"))
personProfile.job = prompt("Your Job?")
personProfile.weight = parseFloat(prompt("Enter Weight:"))
personProfile.height = parseFloat(prompt("Enter Height:"))

let numFamily = parseInt(prompt("How many family member(s) do you have?"))

// Receiving Family Members
for (let i = 0; i < numFamily; i++) {
    personProfile.familyMembers[i] = prompt("Members " + (i + 1));
}

// Calling Functions In The Object Before Self Invoking Functions
personProfile.ageCalc();
personProfile.checkEligibility();

// Self Invoking Function
(function () {
    console.log('********************************************************************')
    console.log('Here is your profile')
    console.log("Full name " + personProfile.fn + personProfile.sn)
    console.log('You are ' + personProfile.age + ' years old!')
    console.log('Profession ' + personProfile.job)
    console.log('Eligible to vote? ' + personProfile.eligibleToVote)
    console.log('Family Members')
    personProfile.familyMembers.forEach(function (member, index) {
        console.log("Member #" + (index + 1) + ' : ' + member)
    })
    console.log(personProfile.calcBmi() + ' is ur BMI')
    if (personProfile.calcBmi() <= 18.5) {
        console.log('You are : Underweight')
    } else if (18.5 <= personProfile.calcBmi() <= 24.9) {
        console.log("You are : Healthy")
    } else if (25.0 <= personProfile.calcBmi() <= 29.9) {
        console.log("You are : Overweight")
    } else if (personProfile.calcBmi() >= 30) {
        console.log("You are : Obese")
    }
    console.log('********************************************************************')
    // console.log(new Date().getFullYear() - personProfile.birthYear)
})()




// document.getElementById('p').innerHTML = "Your name is " + fn + sn + "<br>" + "Your profession is " + job + '<br>' + "You are " + age + ' years old. <br>' + "Can you vote? " + eligibleToVote + '<br>' + 