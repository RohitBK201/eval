function sUp(){

    window.location.href="signup.html";
}

var reguser = JSON.parse(localStorage.getItem("users"))

function logus(){
    var name = document.querySelector("#nm").value;
    var pass = document.querySelector("#pass").value;

    if(name == "" || pass == "")
    {
        alert("Fill the form properly!");
    }

    else{
            for(var i=0;i<reguser.length;i++)
            {
                if(reguser[i].nam == name && reguser[i].p==pass)
                {
                    window.location.href = "menu.html";
                }
            }

    }

    setTimeout(function(){
        alert("Invalid credentials!")
    },100)
    
}