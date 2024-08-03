const paragraphs = document.querySelectorAll(".section__paragraph");
const project = document.querySelectorAll(".project__paragraph");
let mybutton = document.getElementById("topBtn"); 

window.onscroll = function() {
    scrollFunction();
}

document.addEventListener("scroll", function () {
    paragraphs.forEach((paragraph) => {
        if (isInView(paragraph)) {
            paragraph.classList.add("section__paragraph--visible");
        }else{
            paragraph.classList.remove("section__paragraph--visible");
        }
    }) ;
});

document.addEventListener("scroll", function() {
    project.forEach((project) => {
        if(lateView(project)) {
            project.classList.add("project__paragraph--visible"); 
        }else{
            project.classList.remove("project__paragraph--visible"); 
        }
    });
});

function isInView(element) {
    const rect = element.getBoundingClientRect(); 
    return (
        rect.bottom > 0 && 
        rect.top < (window.innerHeight - 100 || document.documentElement.clientHeight - 100)
    );
}

function lateView(element) {
    const rect = element.getBoundingClientRect(); 
    return (
        rect.bottom > 0 && 
        rect.top < (window.innerHeight - 500 || document.documentElement.clientHeight - 500)
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
