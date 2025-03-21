const card = document.querySelector(".card");

card.addEventListener('click', () =>{
    card.classList.toggle("flip");
})


const cardno = document.getElementById("cardno");
const cn = document.getElementById("cn");
const cardhold = document.getElementById("cardhold");
const cna = document.getElementById("cna");
const months = document.getElementById("months");
const cmonth = document.getElementById("cmonth");

const yearsi = document.getElementById("yearsi");
const cyear = document.getElementById("cyear");

const cvin = document.getElementById("cvin");
const cvvno = document.getElementById("cvvno");




const inp = document.querySelectorAll(".inp");

inp.forEach(()=>{

    cardno.addEventListener('keyup',(e)=>{
        // const value = e.target.value;
        cn.textContent = e.target.value;
        // cn.textContent = value;
        // console.log(value);

    })

    cna.addEventListener("keyup",(e)=>{
        cardhold.textContent = e.target.value;
    })

    months.addEventListener("keyup",(e)=>{
        cmonth.textContent = e.target.value;
    })

    yearsi.addEventListener("keyup",(e)=>{
        cyear.textContent = e.target.value;
    })

    cvin.addEventListener("keyup",(e)=>{
        cvvno.textContent = e.target.value;
    })

    
})


const front = document.querySelector(".front");
const back = document.querySelector(".back");

const cardname = document.getElementById("cardname");
const cardim = document.getElementById("cardim");

cardname.addEventListener('change',(e)=>{
    const selectedvalue = e.target.value;
    console.log(selectedvalue);
    const imagepath = 'cardlogo/'+ selectedvalue + '.png';
    cardim.src = imagepath;

    if(selectedvalue == "mastercard"){
        front.classList.toggle("mastercard");
        back.classList.toggle("mastercard");
    }

    else if(selectedvalue == "americanexpress"){
        front.classList.toggle("americanexpress");
        back.classList.toggle("americanexpress");
    }

    else if(selectedvalue == "jcb"){
        front.classList.toggle("jcb");
        back.classList.toggle("jcb");
    }

    else if(selectedvalue == "visaelectron"){
        front.classList.toggle("visaelectron");
        back.classList.toggle("visaelectron");
    }

    else if(selectedvalue == "maestro"){
        front.classList.toggle("maestro");
        back.classList.toggle("maestro");
    }

    else{
        front.classList.toggle("visa");
        back.classList.toggle("visa");
    }

    
        
    
})

const submit = document.getElementById("submit");

submit.addEventListener("click",()=>{
    document.querySelector(".content").style.display = 'none';
    card.style.top = "70px";
})