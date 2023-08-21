var friendList = [];
loadData();

function loadImage(){
    var urlData = document.getElementById("imageURL").value;       //input
    var telData = document.getElementById("friendTel").value;     //input
    var nameData = document.getElementById("friendName").value;   //input

    //
    var data = new Object();
    data.urlData = urlData;
    data.telData = telData;
    data.nameData = nameData;

    friendList.push(data);

    createTable();
    saveData(); 
    document.getElementById("friendForm").reset();    
   
    //oh no, it's me again
    //var zeev ="<tr><td>"+imageURL+"</td><td>"+friendName+"</td><td>"+friendTel+"</td></tr>";
}

function createTable(){
    var data = document.getElementById("data");                     //output

    //backtick => ` ~=>tilda

    var info = "";

    for (var index=0;index<friendList.length;index++){
        info += `
        <tr>
            <td><img src="${friendList[index].urlData}"/></td>
            <td>${friendList[index].nameData}</td>
            <td>${friendList[index].telData}</td>
        </tr>
    `
    }

    data.innerHTML=info;
}

function clearTable(){
    document.getElementById("data").innerHTML="";
    //erase all data from array
    friendList = [];
}

function removeLast(){
    friendList.pop();
    createTable();
}

function loadData(){
    //localStorage.getItem get data from local storage by name
    //JSON.parse => convert the string (in json format to object again)
    friendList = JSON.parse(localStorage.getItem("friends"));
    createTable();
}

function saveData(){
    //localStorage => save the data to user hard disk
    //sessionStorage => save the data as long as the window/tab is open
    //localStorage.setItem => save the data to specific item.....
    localStorage.setItem("friends",JSON.stringify(friendList));
    //the command to convert an object to a string is JSON.stringify(object)
}

