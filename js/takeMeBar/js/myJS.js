var girls = ["Svetlana","Ludmila","Or","Osher","Shimrit","Valery","Jasmin","Alice","Ruti","Tanya","Yana"];

var init=()=>{
    showList();
    
    setInterval(()=>{
        //window.location.reload;
        initVictim();
        showVictim();
    },1000)
}

var showList=()=>{
    var myList = document.querySelector("#girls");
    var myOL = document.createElement("ol");
    for (var counter=0;counter<girls.length;counter++){
        var singleGirl = document.createElement("li");
        singleGirl.textContent = girls[counter];
        myOL.appendChild(singleGirl)
    }
    myList.appendChild(myOL);
}

var showVictim=()=>{
    //console.log(randomGirl(girls.length));
    var victim= document.querySelector("#victim");
    var speartor = document.querySelector(("#speartor"))
    var hr = document.createElement("hr");
    var h1 = document.createElement("h1");
    h1.textContent = girls[randomGirl(girls.length)];
    speartor.appendChild(h1);
    victim.appendChild(hr);
    victim.appendChild(h1);
}

var randomGirl=(max)=>{
    return Math.floor(Math.random()*max);
}

//stupid but working method
// var initVictim=()=>{
//     var victim= document.querySelector("#victim");
//     victim.innerHTML="";
// }

var initVictim=()=>{
    //select the id by selector
    var victim= document.querySelector("#victim");
    //select the first child
    var first = victim.firstElementChild;
    while (first){
       first.remove();
       first = victim.firstElementChild;
    }
    
    
}