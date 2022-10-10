let numberList=document.querySelectorAll("button");
let starList=document.querySelectorAll(".starsContainer div");
let submitButton=document.querySelector("input");
let mainContainer=document.querySelector("main");

let starsState="of"
let submitState="of"

submitButton.addEventListener("click",submit)

for (number of numberList) {
    
    number.addEventListener("mouseover",showStars);
    number.addEventListener("mouseout",hideStars);
    number.addEventListener("click",holdStars);
    document.addEventListener("click",inactiveStars);

}

function showStars(evento) {
    if (starsState=="of") {
        for (star of starList) {
            if (star.attributes.value.value<= evento.target.value) {
                star.classList.add("star");
            }
        }
    }
}

function hideStars() {

    if (starsState=="of") {
        for (star of starList) {
            if (star.attributes.value.value>1) {
                star.classList.remove("star");
            }
        }
    }

}

function holdStars(evento2) {
    
    starsState="on";
    submitState="on";
    
    for (star of starList) {
        if (star.attributes.value.value<= evento2.target.value) {
            star.classList.add("star");
        }
        else {
            star.classList.remove("star");
        }

    }

}

function inactiveStars(evento3) {
    counter=0
    if (evento3.target.value=="SUBMIT") {

    }
    
    else {
        for (number of numberList) {
            if (evento3.target!=number) {
                counter++
                if (counter==5) {
                    starsState="of"
                    submitState="of"
                    hideStars()
                }
            }
    
        }
    }

}

function submit() {
    counterStars=0
    for (star of starList) {
        if (star.classList.value=="star" || star.classList.value=="inactiveStars star" ) {
            counterStars++
        }
    }

    if (submitState=="on") {
        
        mainContainer.innerText="";
        mainContainer.setAttribute("class","submitMain")

        ilustrationContainer=document.createElement("img");
        ilustrationContainer.setAttribute("alt","thank You");
        ilustrationContainer.setAttribute("src","./images/illustration-thank-you.svg");

        starsSelectedContainer=document.createElement("div");
        starsSelectedContainer.setAttribute("class","starsSelected");
        starsSelectedContainer.innerText="You selected " + counterStars + " out of 5"
        
        titleContainer=document.createElement("h1");
        titleContainer.setAttribute("class","centerText");
        titleContainer.innerText="Thank you!"

        paragraphContainer=document.createElement("p");
        paragraphContainer.setAttribute("class","centerText");
        paragraphContainer.innerText="We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!"


        mainContainer.appendChild(ilustrationContainer);
        mainContainer.appendChild(starsSelectedContainer);
        mainContainer.appendChild(titleContainer);
        mainContainer.appendChild(paragraphContainer);



    }

}