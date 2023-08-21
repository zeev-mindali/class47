var imageURL = [];
var friendTel = [];
var friendName = [];

function loadImage(){
    var urlData = document.getElementById("imageURL").value;       //input
    var telData = document.getElementById("friendTel").value;     //input
    var nameData = document.getElementById("friendName").value;   //input

    imageURL.push(urlData);     //add data to array
    friendTel.push(telData);    //add telephone to array
    friendName.push(nameData); //add name to array

    createTable();
   
    document.getElementById("friendForm").reset();    
   
    //oh no, it's me again
    //var zeev ="<tr><td>"+imageURL+"</td><td>"+friendName+"</td><td>"+friendTel+"</td></tr>";
}

function createTable(){
    var data = document.getElementById("data");                     //output

    //backtick => ` ~=>tilda

    var info = "";

    for (var index=0;index<imageURL.length;index++){
        info += `
        <tr>
            <td><img src="${imageURL[index]}"/></td>
            <td>${friendName[index]}</td>
            <td>${friendTel[index]}</td>
        </tr>
    `
    }

    data.innerHTML=info;
}

function clearTable(){
    document.getElementById("data").innerHTML="";
    //erase all data from array
    imageURL = [];
    friendTel = [];
    friendName = [];
}

function removeLast(){
    imageURL.pop();
    friendTel.pop();
    friendName.pop();
    createTable();
}