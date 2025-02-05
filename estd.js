// search-box open close js code
let navbar = document.querySelector(".navbar");
let searchBox = document.querySelector(".search-box .bx-search");
// let searchBoxCancel = document.querySelector(".search-box .bx-x");

searchBox.addEventListener("click", ()=>{
  navbar.classList.toggle("showInput");
  if(navbar.classList.contains("showInput")){
    searchBox.classList.replace("bx-search" ,"bx-x");
  }else {
    searchBox.classList.replace("bx-x" ,"bx-search");
  }
});

// sidebar open close js code
let navLinks = document.querySelector(".nav-links");
let menuOpenBtn = document.querySelector(".navbar .bx-menu");
let menuCloseBtn = document.querySelector(".nav-links .bx-x");
menuOpenBtn.onclick = function() {
navLinks.style.left = "0";
}
menuCloseBtn.onclick = function() {
navLinks.style.left = "-100%";
}


// sidebar submenu open close js code
let htmlcssArrow = document.querySelector(".htmlcss-arrow");
htmlcssArrow.onclick = function() {
 navLinks.classList.toggle("show1");
}
let moreArrow = document.querySelector(".more-arrow");
moreArrow.onclick = function() {
 navLinks.classList.toggle("show2");
}
let jsArrow = document.querySelector(".js-arrow");
jsArrow.onclick = function() {
 navLinks.classList.toggle("show3");
}



// Pagination

const pageContent = document.getElementById("page-content");
const pageButtons = document.querySelectorAll(".page-btn");
const prevButton = document.querySelector(".prev-btn");
const nextButton = document.querySelector(".next-btn");


document.addEventListener('DOMContentLoaded', function() {
  const pages = document.querySelectorAll('.pagination  a');
  const contentPages = document.querySelectorAll('.page');

  pages.forEach(page => {
      page.addEventListener('click', function(event) {
          event.preventDefault();

          // Remove 'active' class from all content pages
          contentPages.forEach(p => p.classList.remove('active'));

          // Find the target page and display it
          const targetPage = document.querySelector(this.getAttribute('href'));
          if (targetPage) {
              targetPage.classList.add('active');
          }

          // Add 'active' class to the clicked link
          this.classList.add('active');
      });
  });
        });

const pages = [
  "Page 1",
  "Page 2",
  "Page 3",
  "Page 4",
  "Page 5",
];
let currentPage = 1;

function updatePagination() {
  pageContent.textContent = pages[currentPage - 1];

  pageButtons.forEach((btn, index) => {
    btn.classList.toggle("active", index + 1 === currentPage);
  });

  prevButton.disabled = currentPage === 1;
  nextButton.disabled = currentPage === pages.length;
}

pageButtons.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    currentPage = index + 1;
    updatePagination();
  });
});

prevButton.addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    updatePagination();
  }
});

nextButton.addEventListener("click", () => {
  if (currentPage < pages.length) {
    currentPage++;
    updatePagination();
  }
});

updatePagination();