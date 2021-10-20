    document.getElementById("signupButton").addEventListener("click",function(){
        document.body.style.background = "rgba(0, 0, 0, 0.7)";
        document.querySelector(".bg-model").style.display = "flex";
    });

    document.querySelector(".close").addEventListener("click",function(){
        document.querySelector(".bg-model").style.display = "none";
         document.body.style.background = "none";
    });

   
    
    function signUpData(e){
        
        e.preventDefault();

       

        let userData = document.getElementById("signUPForm");

        const name = userData.name.value;
        const email = userData.email.value;
        const password = userData.password.value;

        let temp = "" + password;

        if (name.trim() == "" || email.trim() == "" || password.trim() == "") {

            document.getElementById("validateBox").style.display = "block";

        }
        else {
           
             document.querySelector(".bg-model").style.display = "none";
             document.body.style.background = "none";

            let userAllData;

      
            userAllData = {
                name,
                email,
                password
            };
            
       
        userAllData = JSON.stringify(userAllData);
       
        
            fetch(" https://murmuring-brook-47360.herokuapp.com/users/signup", {
                method: "Post",
                body: userAllData,

                headers: {
                    "Content-Type": "application/json",
                },
            })
                .then((res) => {
                    return res.json();
                })
                .then((res) => {
                    console.log(res);
                })
                .catch((err) => {
                    console.log(err);
                })
        


            document.body.style.background = "rgba(0, 0, 0, 0.7)";
            document.querySelector(".bg-model_login").style.display = "flex";

            document.querySelector(".close2").addEventListener("click", function () {
                document.querySelector(".bg-model_login").style.display = "none";
                document.body.style.background = "none";
            });
        }
      
        }
   
        function userLogin(e) {
            e.preventDefault();

            let form = document.getElementById("login12");

            const username = form.email.value;
            const password = form.password.value;

          
            console.log(username, password);

            if (username.trim() == "" || password.trim() == "") {
                document.getElementById("validateBox2").style.display = "block";
            }
            else {
                fetch(` https://murmuring-brook-47360.herokuapp.com/users/logindata/${username}`, {
                    method: "Get",
                
                })
                    .then((res) => {
                        return res.json();
                    })
                    .then((res) => {
                        check(res);
                    })
                    .catch((err) => {
                        console.log(err);
                    })
              
           function check(data){
               
                if (data.email == username && data.password == password) {
                    
                    document.querySelector(".bg-model_login").style.display = "none";
                    document.body.style.background = "none";
                    const name = data.name;
                    window.location.href = ` https://murmuring-brook-47360.herokuapp.com/afterLogin?name=${name}`;
                    return;
                }
        
                    alert("Invalid Credentials");
                }
            }
        };
        
        
    


     