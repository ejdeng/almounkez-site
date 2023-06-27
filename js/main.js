function Loadpage() {
    alert("شكرا لك لزيارة موقعنا");
}

  function uppercase(y) {
    var x = document.getElementById("fname");
    x.value = x.value.toUpperCase();
    y.style.background = "yellow";


  }

  function confirmInput() {
    fname = document.forms[0].fname.value;
    alert("مرحبا بك في الصفحة الجديدة");
  }
  function bigImg(x) {
    x.style.height = "300px";
    x.style.width = "270px";
  }
  
  function normalImg(x) {
    x.style.height = "290px";
    x.style.width = "260px";
  }
  function loadImage() {
    alert("Image is loaded");
  }