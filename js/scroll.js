const paragraphs = document.querySelectorAll(".section__paragraph");
let mybutton = document.getElementById("topBtn"); 

window.onscroll = function() {scrollFunction()};

document.addEventListener("scroll", function () {
    paragraphs.forEach((paragraph) => {
        if (isInView(paragraph)) {
            paragraph.classList.add("section__paragraph--visible")
        }
    }) ;
});

function isInView(element) {
    const rect = element.getBoundingClientRect(); 
    return (
        rect.bottom > 0 && 
        rect.top < (window.innerHeight - 150 || document.documentElement.clientHeight - 150)
    );
}

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}