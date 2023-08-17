function power2(userNumber) {
    return userNumber * userNumber;
  }
  function checkLogin() {
    //console.log("login system crashed!!!");
    var userName = document.getElementById("userName").value;
    var userPass = document.getElementById("userPass").value;
    console.log(userName,userPass);
    //document.getElementById("result").innerHTML="<u>zeevik</u>";  //with html 
    document.getElementById("result").innerText="<u>zeevik</u>";    //plain text
  }

  console.log("Hello class 47");