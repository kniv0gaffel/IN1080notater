const categories = { Intro: [{ url: `/IN1080_Kompendium//intro/2023/01/19/Strom.html`, date: `19 Jan 2023`, title: `Strøm Spenning og Motstand`},{ url: `/IN1080_Kompendium//intro/2023/01/16/arduino.html`, date: `16 Jan 2023`, title: `Arduino`},{ url: `/IN1080_Kompendium//intro/2023/01/09/spenningsdeler.html`, date: `09 Jan 2023`, title: `Spenningsdeler`},], }

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