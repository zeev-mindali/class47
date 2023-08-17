function loadImage(){
    var img = document.getElementById("imageURL").value;
    var friendName = document.getElementById("friendName").value;
    var friendTel = document.getElementById("friendTel").value;
    //document.getElementById("friendImage").src = img;
    document.getElementById("friendList").innerHTML=`
    <tr>
      <td>
         <img src="${img}" width="50"/>
      </td>
      <td>
        ${friendName}
      </td>
      <td>
        ${friendTel}
      </td>`;
}