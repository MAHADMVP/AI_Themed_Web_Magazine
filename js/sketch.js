// for articles.js
document.addEventListener("DOMContentLoaded", function () {
    const headings = document.querySelectorAll(".article-section h2");
  
    headings.forEach((heading) => {
      heading.addEventListener("click", function () {
        // Remove "active-section" class from all headings
        headings.forEach((h) => h.classList.remove("active-section"));
        
        // Add "active-section" class to the clicked heading's parent section
        this.parentElement.classList.add("active-section");
        
        // Toggle the display of articles
        const articles = this.nextElementSibling;
        articles.classList.toggle("show-articles");
      });
    });
  });
