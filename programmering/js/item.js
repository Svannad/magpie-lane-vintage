//Valg af billede

function skiftBillede(fileName) {
    let img = document.querySelector("#skirt");
    img.setAttribute("src", fileName);
}

//Reserver Process
function reserver() {  
    var valg = document.getElementById("vaelg");
    valg.style.display = "flex";
  }
  
function login() {
    var login = document.getElementById("login");
    login.style.display = "flex";
}

function opret() {
    var opret = document.getElementById("opret");
    opret.style.display = "flex";
}

function reserv() {
    var reserv = document.getElementById("reserver");
    reserv.style.display = "flex";
}

function takk() {
    var takk = document.getElementById("takk");
    takk.style.display = "flex";
}

function slut() {
    var valg = document.getElementById("vaelg");
    var login = document.getElementById("login");
    var opret = document.getElementById("opret");
    var reserv = document.getElementById("reserver");
    var takk = document.getElementById("takk");
    
    valg.style.display = "none";
    login.style.display = "none";
    opret.style.display = "none";
    reserv.style.display = "none";
    takk.style.display = "none";
}

//Vis mere 

function visMere() {
    var mere = document.getElementById("sto-text");
  
    if (mere.style.display === "none") {
      mere.style.display = "flex";
    } 
    
    else {
      mere.style.display = "none";
    }
  }

  function visMere1() {
    var mere1 = document.getElementById("det-text");
  
    if (mere1.style.display === "none") {
      mere1.style.display = "flex";
    } 
    
    else {
      mere1.style.display = "none";
    }
  }