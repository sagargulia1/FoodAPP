document.querySelector("form").addEventListener("submit",Submit);
var newAct=JSON.parse(localStorage.getItem("user")) || [];
    // console.log(newAct);


 function Submit(event){
    event.preventDefault();
    var email=document.querySelector("#email").value;
    var pass=document.querySelector("#pass").value;
    var tex=document.getElementById('para')
    var text = document.getElementById("signin-para")
    // console.log(newAct)
    for(var i=0; i<newAct.length; i++){ 
      // console.log(newAct[i].email,newAct[i].pass)

        if(newAct[i].email== email && newAct[i].pass == pass) 
          {
            alert("signin succes");
            // we add the location here home.html
              window.location.href ="index.html";
           }

          else if(email.length == 0)
          {
            event.preventDefault()
            tex.textContent = "Please enter email";
            tex.style.color = "red";
        }

        else if(pass.length == 0)
        {
          event.preventDefault()
          text.textContent = "Please enter password";
          text.style.color = "red";
         }

           else{
               alert("sign up first");
               window.location.href = "signup.html";
         }
        
    } 
}