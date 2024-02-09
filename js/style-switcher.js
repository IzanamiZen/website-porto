const data = [
  // Player 1
  {
    home: {
      name: "Andi Rahmat",
      position: "Mahasiswa",
      info: "Perkenalkan saya Andi Rahmat Al Qadri, saya merupakan website desainer, dengan keahlian yang terbilang cukup bagus",
      fp: "/img/mats/me.png",
    },
    about: {
      css: "89%",
      js: "70%",
      php: "30%",
      html: "97%",
      birthday: "20 Oct 2003",
      formatBirthday: "10-20-2003", // format MM-DD-YY
      website: "www.matz.com",
      email: "callmemats@gmail.com",
      phone: "+62895803989861",
      desc: "Saya adalah seorang pemuda kelahiran Bulukumba, Sulawesi Selatan, pada tahun 2003. Saya menempuh pendidikan dasar di SDN 2 Bulukumba, SMPN 1 Bulukumba, dan SMKN 1 Bulukumba. Setelah lulus SMK, Saya melanjutkan pendidikan tinggi di Universitas Islam Negeri Alauddin Makassar, jurusan Teknik Informatika.",
      dateeducation1: "2010 - 2016",
      education1: "SD",
      infoeducation1: "Bersekolah Di SDN2 Terang-Terang Bulukumba",
      dateeducation2: "2017 - 2019",
      education2: "SMP",
      infoeducation2: "Bersekolah Di SMPN 1 Bulukumba",
      dateeducation3: "2020 - 2022",
      education3: "SMK",
      infoeducation3: "Bersekolah Di SMKN 1 Bulukumba",
      tldate: "2021",
      tltitle: "PKL DI BPPMPV KPTK",
      tltext:
        "Saya pernah magang di Balai Diklat BPPMPV KPTK GOWA selama 6 bulan, sebagai teknisi jaringan",
    },
    portofolio: {
      img1: "/img/mats/porto1.png",
      img2: "/img/mats/porto2.png",
      img3: "",
    },
    contact: {
      wa: "+62895803989555",
      located: "Indonesia, South Sulawesi, Makassar",
      email: "callmemats@gmail.com",
      sosmed: "Instagram : matsyu",
    },
  },
  //   Player 2
  // ...
  // Player 3
  // ...
  // Player 4
  // ...
];

function sumAge(birthday) {
  let currentDate = new Date();

  let birthDate = new Date(birthday);

  let age = currentDate.getFullYear() - birthDate.getFullYear();

  if (
    currentDate.getMonth() < birthDate.getMonth() ||
    (currentDate.getMonth() === birthDate.getMonth() &&
      currentDate.getDate() < birthDate.getDate())
  ) {
    age--;
  }
  return age;
}

const styleSwitcherToggler = document.querySelector(".style-switcher-toggler");
styleSwitcherToggler.addEventListener("click", () => {
  document.querySelector(".style-switcher").classList.toggle("open");
});

window.addEventListener("scroll", () => {
  if (document.querySelector(".style-switcher").classList.contains("open")) {
    document.querySelector(".style-switcher").classList.remove("open");
  }
});
const calendarIcon = `<i class="fa fa-calendar"></i>`;
const alternateStyle = document.querySelectorAll(".alternate-style");
function setActiveStyle(color, id) {
  alternateStyle.forEach((style) => {
    if (color === style.getAttribute("title")) {
      style.removeAttribute("disabled");
      document.getElementById("name-home").innerHTML = data[id].home.name;
      document.getElementById("position-home").innerHTML =
        data[id].home.position;
      document.getElementById("info-home").innerHTML = data[id].home.info;
      document.getElementById("name-about").innerHTML = data[id].home.name;
      document.getElementById("position-about").innerHTML =
        data[id].home.position;
      document.getElementById("desc-about").innerHTML = data[id].about.desc;
      document.getElementById("name-about").innerHTML = data[id].home.name;
      document.getElementById("birthday-about").innerHTML =
        data[id].about.birthday;
      document.getElementById("age-about").innerHTML = sumAge(
        data[id].about.formatBirthday
      );
      document.getElementById("website-about").innerHTML =
        data[id].about.website;
      document.getElementById("email-about").innerHTML = data[id].about.email;
      document.getElementById("phone-about").innerHTML = data[id].about.phone;
      document.getElementById(
        "dateeducation1-about"
      ).innerHTML = `${calendarIcon}${data[id].about.dateeducation1}`;
      document.getElementById("education1-about").innerHTML =
        data[id].about.education1;
      document.getElementById("infoeducation1-about").innerHTML =
        data[id].about.infoeducation1;
      document.getElementById(
        "dateeducation2-about"
      ).innerHTML = `${calendarIcon}${data[id].about.dateeducation2}`;
      document.getElementById("education2-about").innerHTML =
        data[id].about.education2;
      document.getElementById("infoeducation2-about").innerHTML =
        data[id].about.infoeducation2;
      document.getElementById(
        "dateeducation3-about"
      ).innerHTML = `${calendarIcon}${data[id].about.dateeducation3}`;
      document.getElementById("education3-about").innerHTML =
        data[id].about.education3;
      document.getElementById("infoeducation3-about").innerHTML =
        data[id].about.infoeducation3;
      document.getElementById("tldate-about").innerHTML = data[id].about.tldate;
      document.getElementById("tltitle-about").innerHTML =
        data[id].about.tltitle;
      document.getElementById("tltext-about").innerHTML = data[id].about.tltext;
      document.getElementById("wa-contact").innerHTML = data[id].contact.wa;
      document.getElementById("located-contact").innerHTML =
        data[id].contact.located;
      document.getElementById("email-contact").innerHTML =
        data[id].contact.email;
      document.getElementById("sosmed-contact").innerHTML =
        data[id].contact.sosmed;
      document.querySelector(".fp").setAttribute("src", data[id].home.fp);
      document
        .querySelector(".portoimg1")
        .setAttribute("src", data[id].portofolio.img1);
      document
        .querySelector(".portoimg2")
        .setAttribute("src", data[id].portofolio.img2);
      document.getElementById("css").style.width = data[id].about.css;
      document.getElementById("css-skill").innerHTML = data[id].about.css;
      document.getElementById("js").style.width = data[id].about.js;
      document.getElementById("js-skill").innerHTML = data[id].about.js;
      document.getElementById("php").style.width = data[id].about.php;
      document.getElementById("php-skill").innerHTML = data[id].about.php;
      document.getElementById("html").style.width = data[id].about.html;
      document.getElementById("html-skill").innerHTML = data[id].about.html;
    } else {
      style.setAttribute("disabled", "true");
    }
  });
}
/*============================== Default ================================*/
document.getElementById("age-about").innerHTML = sumAge(
  data[0].about.formatBirthday
);

const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () => {
  dayNight.querySelector("i").classList.toggle("fa-sun");
  dayNight.querySelector("i").classList.toggle("fa-moon");
  document.body.classList.toggle("dark");
});
window.addEventListener("load", () => {
  if (document.body.classList.contains("dark")) {
    dayNight.querySelector("i").classList.add("fa-sun");
  } else {
    dayNight.querySelector("i").classList.add("fa-moon");
  }
});
