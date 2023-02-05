const categories = { Intro: [{ url: `/IN1080_Kompendium/intro/2023/01/20/Strom.html`, date: `20 Jan 2023`, title: `Strøm Spenning og Effekt`},{ url: `/IN1080_Kompendium/intro/2023/01/20/jord.html`, date: `20 Jan 2023`, title: `Kretser og Jord`},{ url: `/IN1080_Kompendium/intro/2023/01/20/motstand.html`, date: `20 Jan 2023`, title: `Resistans og I-V-Karakteristikk`},{ url: `/IN1080_Kompendium/intro/2023/01/20/arduino.html`, date: `20 Jan 2023`, title: `Arduino`},],Kirchoff: [{ url: `/IN1080_Kompendium/kirchoff/2023/02/05/KVL.html`, date: `05 Feb 2023`, title: `KVL`},{ url: `/IN1080_Kompendium/kirchoff/2023/02/05/KCL.html`, date: `05 Feb 2023`, title: `KCL`},{ url: `/IN1080_Kompendium/kirchoff/2023/02/05/spenningsdeler-copy.html`, date: `05 Feb 2023`, title: `Spenningdeler`},{ url: `/IN1080_Kompendium/kirchoff/2023/02/05/resiserie.html`, date: `05 Feb 2023`, title: `Resistorer i serie og parallell`},], }

console.log(categories)

window.onload = function () {
  document.querySelectorAll(".category").forEach((category) => {
    category.addEventListener("click", function (e) {
      const posts = categories[e.target.innerText.replace(" ","_")];
      let html = ``
      posts.forEach(post=>{
        html += `
        <a class="modal-article" href="${post.url}">
          <h4>${post.title}</h4>
          <small class="modal-article-date">${post.date}</small>
        </a>
        `
      })
      document.querySelector("#category-modal-title").innerText = e.target.innerText;
      document.querySelector("#category-modal-content").innerHTML = html;
      document.querySelector("#category-modal-bg").classList.toggle("open");
      document.querySelector("#category-modal").classList.toggle("open");
    });
  });

  document.querySelector("#category-modal-bg").addEventListener("click", function(){
    document.querySelector("#category-modal-title").innerText = "";
    document.querySelector("#category-modal-content").innerHTML = "";
    document.querySelector("#category-modal-bg").classList.toggle("open");
    document.querySelector("#category-modal").classList.toggle("open");
  })
};