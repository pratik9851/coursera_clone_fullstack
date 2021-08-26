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

        document.querySelector(".bg-model").style.display = "none";
        document.body.style.background = "none";

        let userData = document.getElementById("signUPForm");

        const name = userData.name.value;
        const email = userData.email.value;
        const password = userData.password.value;
        let userAllData;

      
           userAllData = {
               name,
               email,
               password
           };
            
       
        userAllData = JSON.stringify(userAllData);
        console.log(userAllData);
        
        fetch("http://localhost:2355/users/signup", {
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
        

        // let arr;
        // arr = localStorage.getItem("signUpData");

        // if(arr==null){
        //     arr = [];
        // }else{
        //     arr = JSON.parse(localStorage.getItem("signUpData"));
        // }

        // arr.push(userAllData);
        // localStorage.setItem("signUpData", JSON.stringify(arr));
        

        document.body.style.background = "rgba(0, 0, 0, 0.7)";
        document.querySelector(".bg-model_login").style.display = "flex";

        document.querySelector(".close2").addEventListener("click", function () {
            document.querySelector(".bg-model_login").style.display = "none";
            document.body.style.background = "none";
        });
      
        }
   
        function userLogin(e) {
            e.preventDefault();

            let form = document.getElementById("login12");

            const username = form.email.value;
            const password = form.password.value;

         
            console.log(username, password);

            fetch(`http://localhost:2355/users/logindata/${username}`, {
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
               console.log(data);
                if (data.email == username && data.password == password) {
                    console.log("**");
                    document.querySelector(".bg-model_login").style.display = "none";
                    document.body.style.background = "none";
                    const name = data.name;
                    window.location.href = `http://localhost:2355?name=${name}`;
                    return;
                }
        
                alert("Invalid Credentials");
            }

        };
        
        
    


     