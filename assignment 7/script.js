
let johnobject= {

    firstname:"john",

    lastname:"frank",

    birthyear:"1994",

    job:"pilot",

    address:"397-porkshireStreet",

    email:"johntheman406gmail.com",

    favoritecolor:"grey"


};

let currentyear=new Date(2021);

let retirementyear=new Date(2040)
 let difference= currentyear - retirementyear;
 console.log(currentyear - retirementyear);

function convert(){
    let c= document.getElementById('data').Value;
    let f= (c * 1.8) + 32;
     document.getElementById('answer').innertext='${c} c=${f}F';
}

function bmi(weight,height){
    let bmi=weight/(height**2);
    console.log("lucas BMI is 1.4, and Congrats! lucas’s body weight is ideal");
    
      }
      
    


let lucas= {

   mass:"50",

   height:"5.8",

   name:"lucas"


};

let john= {

    mass:"30",

    height:"5.5",

    name:"john"

};

let Mark= {

    mass:"45",

    height:"6.0",

    name:"mark"
  
};

let bmis= {
    lucasbmi:"1.4",

    markbmi:"1.2",

    johnbmi:"0.9"
}
 