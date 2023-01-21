const categories = { Intro: [{ url: `/IN1080_Kompendium/intro/2023/01/20/Strom.html`, date: `20 Jan 2023`, title: `Strøm Spenning og Effekt`},{ url: `/IN1080_Kompendium/intro/2023/01/20/jord.html`, date: `20 Jan 2023`, title: `Kretser og Jord`},{ url: `/IN1080_Kompendium/intro/2023/01/20/motstand.html`, date: `20 Jan 2023`, title: `Impedans, Kretselementer og Ohms Lov`},{ url: `/IN1080_Kompendium/intro/2023/01/20/arduino.html`, date: `20 Jan 2023`, title: `Arduino`},], }

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