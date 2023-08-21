var friendList = [];

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