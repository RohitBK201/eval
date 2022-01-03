function log() {
    window.location.href = "login.html";
  }

  var data = JSON.parse(localStorage.getItem("users")) || [];

  function sUp() {
    var userdata = {};

    var name = document.querySelector("#nm").value;
    var email = document.querySelector("#em").value;
    var cont = document.querySelector("#cn").value;
    var pas = document.querySelector("#pass").value;

        if(name==""||email==""||cont==""||pas=="")
        {
            alert("Fill the form properly!")
        }
        else{

                userdata.nam = name;
                userdata.emil = email;
                userdata.con = cont;
                userdata.p = pas;

                data.push(userdata);

                localStorage.setItem("users", JSON.stringify(data));

                document.querySelector("#nm").value="";
                document.querySelector("#em").value="";
                document.querySelector("#cn").value="";
                document.querySelector("#pass").value="";

        }



  }