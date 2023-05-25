window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 80) {
      document.getElementById("header").style.padding = "0";
      document.getElementById(("header").style.boxshadow = "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;")
    } else {
      document.getElementById("header").style.padding = "8px 0";
    }
  }