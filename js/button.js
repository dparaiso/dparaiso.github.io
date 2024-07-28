var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

let myLabels = document.querySelectorAll('.lbl-toggle'); 
Array.from(myLabels).forEach(label => 
  { label.addEventListener('keydown', e => 
    { if (e.which === 32 || e.which === 13)
       { e.preventDefault(); label.click();

        }; 
      });
    }); 
