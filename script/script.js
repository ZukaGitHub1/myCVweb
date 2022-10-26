// const webflows = [
//     {
//         img:'<img src="img/Boldo.PNG">',
//         link:'https://boldo.pages.dev/',
//     },
//     {
//         img:'<img src="img/chat-app.PNG">',
//         link:'https://chat-web-czt.pages.dev/',
//     },
//     {
//         img:'<img src="img/colloseum.PNG">',
//         link:'https://colloseumgym.pages.dev/',
//     },
//     {
//         img:'<img src="img/findtrend.PNG">',
//         link:'https://findtrend.pages.dev/',
//     },
//     {
//         img:'<img src="img/product.PNG">',
//         link:'https://product-preview-card-eu4.pages.dev/',
//     },
//     {
//         img:'<img src="img/single-page.PNG">',
//         link:'https://single-page-web.pages.dev/',
//     },
// ]

// webflows.forEach(element=>{
//     let website = document.getElementById('webs')
//     let aLink = document.createElement('a');
//     let divs = document.createElement('div');
//     divs.setAttribute('class','flows');
//     aLink.textContent = element.link;
//     divs.textContent = element.img;
//     website.appendChild(divs);
// })





function reveal() {
    var reveals = document.querySelectorAll(".skills");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().left;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);
