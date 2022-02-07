document.querySelector("form").addEventListener("submit" ,Submit)
function Submit(event){
    var Data=JSON.parse(localStorage.getItem("user")) || [];
    
    event.preventDefault();
    var user = document.querySelector("#user").value
    var email = document.querySelector("#email").value;
    var pass =  document.querySelector("#pass").value;
    var mbl = document.querySelector("#mobile").value;
    var text = document.getElementById("para");
    // console.log(email,pass,mbl)

    var userdata={
        user:user,
        email:email,
        pass:pass,
        mbl:mbl,

    }
    Data.push(userdata);

    if(user.length!=0 && email.length !=0 && pass.length !=0 && mbl.length!=0 )
      {
        localStorage.setItem("user",JSON.stringify(Data));
           alert("signup is sucess")
           window.location.href ="signin.html";
       }

       else
       {
       text.textContent = "Invalid Credentials";
       text.style.color = "red";
       }
       
}