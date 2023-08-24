var userData = new Object();


const runMeFirst=()=>{
    userWho();
}

const iAmZeev=()=>{
    who_am_i.innerText="Zeev";
}

const iAmBar=()=>{
    who_am_i.innerText="Bar(aa)";
}

const iAmHagai=()=>{
    who_am_i.innerText="Hagai";
}

const makeLogin=()=>{
    var uName=document.getElementById("uName").value;
    var uPass=document.getElementById("uPass").value;
    var saveMe = document.getElementById("saveMe").checked;
    
    saveData(uName,uPass,saveMe);
}

const saveData_ls=(uName,uPass,saveMe)=>{
    console.log(uName,uPass,saveMe);
   
    userData.uName = uName;
    userData.uPass = uPass;
    //userData.saveMe = saveMe?1:0;
    userData.saveMe = saveMe;

    //save to local storage
    //JSON.stringify => convert object to string
    localStorage.setItem("user",JSON.stringify(userData));
}

const loadData=()=>{
    userData = JSON.parse(localStorage.getItem("user"));    
    console.log("type of userData.saveMe",typeof userData.saveMe);
    userData.saveMe=userData.saveMe==1;
    console.log(userData);
}

const saveData_db=(uName,uPass,saveMe)=>{

}

const saveData_fb=(uName,uPass,saveMe)=>{

}

loadData();

var saveData=saveData_ls; //we are using now local storage

var who_am_i = document.getElementById("am");

var userWho = iAmBar; //tell it's zeev


runMeFirst();

//Arrow function=>

/*
function functionName (args....){


}
*/

/*
var functionName = (args...)=>{

}
*/

