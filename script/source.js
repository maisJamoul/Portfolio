function readMore() {
    var dots = document.getElementById("dots");
    var more = document.getElementById("more");
    var btn = document.getElementById("btn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btn.innerHTML = "...";
      more.style.display = "none";
    } else {
      dots.style.display = "none";
      btn.innerHTML = "less";
      more.style.display = "inline";
    }
  }