const btnE1  = document.getElementById("btn")

const birthdayE1 = document.getElementById("birthday")

function calculateAge(){
    const birthdayValue = birthdayE1.value;
    if (birthdayValue === ""){
        alert("Please enter your birthday")
    }else{
        const age = getAge(birthdayValue)
    }
}


function getAge(birthdayValue){
    const currentDate = new Date();
    const birthdayDate = new Date (birthdayValue);
    console.log(birthdayValue.getFullYear());
}

btnE1.addEventListener("click", calculateAge)