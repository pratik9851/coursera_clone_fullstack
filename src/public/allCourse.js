

function showData(d) {
 
    let data = d;

    let div_data = document.getElementById("div_data");
    div_data.innerHTML = null;
    div_data.setAttribute("class", "container");

    data.forEach(function (el) {
      let div = document.createElement("div");
      div.setAttribute("class", "courseDiv");

      let div_img = document.createElement("div");

      let div_content = document.createElement("div");

      let img = document.createElement("img");
      img.style.padding = "20px 0";

      let name = document.createElement("h3");
      name.style.fontSize = "25px";
      name.style.marginTop = "4px";

      name.addEventListener("click", function () {
        courseDetailsPage();
      });
      name.setAttribute("class", "courseName");

      let cours = document.createElement("p");
      cours.setAttribute("class", "cours");

      let university = document.createElement("h");
      university.style.color = "rgb(112, 112, 112)";

      let rating = document.createElement("p");

      let level = document.createElement("h5");
      level.setAttribute("class", "level");

      img.src = el.img;

      name.textContent = el.name;

      university.textContent = el.unversity;

      rating.innerHTML = `<span id=rating>${el.rating}</span><span id=giveSpace1>(${el.numStudent}) &#9475;<span/><span id=giveSpace2>${el.numINMin}</span><span>Students</span>`;

      cours.textContent = el.course;

      level.textContent = el.level;

      div_img.append(img);
      div_content.append(name, university, rating, cours, level);

      div.append(div_img, div_content);

      div_data.append(div);
    });
  }

  fetch(`http://localhost:2355/courses`, {
    method: "Get",
    
})
.then((res) => {
    return res.json();
})
.then((res) => {
    console.log(res)
    showData(res)
})
.catch((err) => {
    console.log(err);
})
  

 

  async function addFilter(e) {
  
    let res =await  fetch(`http://localhost:2355/courses`)
    let data=await res.json()
   
  
    if (e.key == "Enter") {
      let arr = [];

      let selectValue = document.getElementById("selectFilter2");

      data.forEach(function (el) {
        if (selectValue.value == el.level) {
          console.log(el);
          arr.push(el);
        }
      });

      showData(arr);
    }
};

function courseDetailsPage() {
  window.location.href = "http://localhost:2355/courseDetail";
}


 async function addlang(e) {

  let res =await  fetch(`http://localhost:2355/courses`)
    let data=await res.json()
 
  if (e.key == "Enter") {
    let arr = [];

    let selectValue = document.getElementById("selectFilter1");

    data.forEach(function (el) {
      if (selectValue.value == el.lang) {
        console.log(el);
        arr.push(el);
      }
    });
    showData(arr);
  }
};
async function adddur(e) {
  
  let res =await  fetch(`http://localhost:2355/courses`)
  let data=await res.json()

  if (e.key == "Enter") {
    let arr = [];

    let selectValue = document.getElementById("selectFilter3");

    data.forEach(function (el) {
      if (selectValue.value == el.courseduration) {
        console.log(el);
        arr.push(el);
      }
    });
    showData(arr);
  }
};


function showProfile() {
    console.log("hII");
    document.querySelector("#profileBox").style.display = "block";

    document.body.addEventListener("dblclick", () => {
      document.querySelector("#profileBox").style.display = "none";
    });
}
  
function logout() {
    window.location.href = "/static/home.html";
}