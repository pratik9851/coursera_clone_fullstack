let courseData = [
    {
      img: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera/topics/ml/large-icon.png?auto=format%2Ccompress&dpr=1&w=150&h=150&fit=fill&bg=FFF&q=25",
      name: "Machine Learning",
      unversity: "Stanford University",
      course: "Course",
      rating: 4.9,
      numStudent: 161690,
      numINMin: "4.3M",
      level: "Mixed",
      lang:"English",
      courseduration:"1-3 Months",
    },
    {
      img: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/51/51d7604aba11e7ae3525d9720463e7/Shiller_FinancialMarkets_New.png?auto=format%2Ccompress&dpr=1&w=150&h=150&fit=fill&bg=FFF&q=25",
      name: "Financial Markets",
      unversity: "Yale Univerdity",
      course: "Course",
      rating: 4.8,
      numStudent: 184999,
      numINMin: "990k",
      level: "Beginner",
      lang:"English",
      courseduration:"1-3 Months",
    },
    {
      img: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/bb/62e6a0120b11e6bc32c330496bd91a/Career-Development.jpg?auto=format%2Ccompress&dpr=1&w=150&h=150&fit=fill&bg=FFF&q=25",
      name: "English for Career Development",
      unversity: "University of Pennsylvania",
      course: "Course",
      rating: 4.8,
      numStudent: 10171,
      numINMin: "1.4M",
      level: "Mixed",
      lang:"Spanish",
      courseduration:"1-3 Months",
    },
    {
      img: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-university-assets.s3.amazonaws.com/b4/339da416653830d015f5a179f864e1/square_logo_large.png?auto=format%2Ccompress&dpr=1&w=150&h=150&fit=fill&bg=FFF&q=25",
      name: "Introduction to Psychology",
      unversity: "Yale Univerdity",
      course: "Course",
      rating: 4.8,
      numStudent: 118594,
      numINMin: "700k",
      level: "Intermediate",
      lang:"Spanish",
      courseduration:"1-4 weeks",
    },
    {
      img: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/19/554c8d156a477690c6f0b81733c11c/intoduction-to-statistics_XFDS112.jpg?auto=format%2Ccompress&dpr=1&w=150&h=150&q=25&fit=fill&bg=FFF",
      name: "Introduction to Statistics",
      unversity: "Standfornd University",
      course: "Course",
      rating: 4.5,
      numStudent: 207,
      numINMin: "25k",
      level: "Beginner",
      lang:"Italian",
      courseduration:"1-4 weeks",
    },
    {
      img: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/35/01fcc0dd0011e6bfe6e9e792d574eb/Logo.png?auto=format%2Ccompress&dpr=1&w=150&h=150&q=25&fit=fill&bg=FFF",
      name: "Indigenous Canada",
      unversity: "University of Alberta",
      course: "Course",
      rating: 4.8,
      numStudent: 11385,
      numINMin: "370k",
      level: "Mixed",
      lang:"Italian",
      courseduration:"1-4 weeks",
    },
    {
      img: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera/topics/medicalneuro/large-icon.png?auto=format%2Ccompress&dpr=1&w=150&h=150&fit=fill&bg=FFF&q=25",
      name: "Medical Neuraoscience",
      unversity: "Duke University",
      course: "Course",
      rating: 4.9,
      numStudent: 2229,
      numINMin: "240k",
      level: "Advanced",
      lang:"German",
      courseduration:"Less than two hours",
    },
    {
      img: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/29/77d8a09b4c11e8b7a12503c978f9c1/penicillin.jpg?auto=format%2Ccompress&dpr=1&w=150&h=150&fit=fill&bg=FFF&q=25",
      name: "Antibiotic Stewardship",
      unversity: "Standford University",
      course: "Course",
      rating: 4.4,
      numStudent: 156,
      numINMin: "23k",
      level: "Advanced",
      lang:"German",
      courseduration:"Less than two hours",
    },
    {
      img: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/40/8dbf10ac1911e68f5119007c0cf554/GettyImages-547015901-Thumbnail.jpg?auto=format%2Ccompress&dpr=1&w=150&h=150&fit=fill&bg=FFF&q=25",
      name: "The Stategy of Content Marketing",
      unversity: "University of California, Davis",
      course: "Course",
      rating: 4.5,
      numStudent: 2977,
      numINMin: "230k",
      level: "Intermediate",
      lang:"English",
      courseduration:"Less than two hours",
    },
    {
      img: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/51/85e280c26e11e8849d270c2d8122ff/SportsMarketing2018_Tile.jpg?auto=format%2Ccompress&dpr=1&w=150&h=150&q=25&fit=fill&bg=FFF",
      name: "Sports Marketing",
      unversity: "Northwestern University",
      course: "Course",
      rating: 4.7,
      numStudent: 829,
      numINMin: "23k",
      level: "Beginner",
      lang:"German",
      courseduration:"Less than two hours",
    },
  ];

  if (localStorage.getItem("CourseData") == null) {
    localStorage.setItem("CourseData", JSON.stringify(courseData));
  }

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

  showData(JSON.parse(localStorage.getItem("CourseData")));

  function addFilter(e) {
    let data = JSON.parse(localStorage.getItem("CourseData"));
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


 function addlang(e) {
  let data = JSON.parse(localStorage.getItem("CourseData"));
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
function adddur(e) {
  let data = JSON.parse(localStorage.getItem("CourseData"));
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