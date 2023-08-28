var girls = ["Svetlana","Ludmila","Or","Osher","Shimrit","Valery","Jasmin","Alice","Ruti","Tanya","Yana"];

var init=()=>{
    showList();
    
    setInterval(()=>{
        //window.location.reload;
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
    var hr = document.createElement("hr");
    var h1 = document.createElement("h1");
    h1.textContent = girls[randomGirl(girls.length)];
    victim.appendChild(hr);
    victim.appendChild(h1)
}

var randomGirl=(max)=>{
    return Math.floor(Math.random()*max);
}