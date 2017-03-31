  var animal=document.getElementsByClassName('animal');
  var select=document.getElementById('select');
  select.onchange=function(){
    if (select.value=="original") {
      for (var i = 0; i < animal.length; i++) {
        animal[i].classList.remove("blanco-negro");
        animal[i].classList.remove("invertir-color");
        animal[i].classList.remove("sepia");
      }
    }
    if (select.value=="blanco-negro") {
      for (var i = 0; i < animal.length; i++) {
        animal[i].classList.add("blanco-negro");
        animal[i].classList.remove("original");
        animal[i].classList.remove("invertir-color");
        animal[i].classList.remove("sepia");
      }
    }
    if (select.value=="invertir-color") {
      for (var i = 0; i < animal.length; i++) {
        animal[i].classList.add("invertir-color");
        animal[i].classList.remove("blanco-negro");
        animal[i].classList.remove("original");
        animal[i].classList.remove("sepia");
      }
    }
    if (select.value=="sepia") {
      for (var i = 0; i < animal.length; i++) {
        animal[i].classList.add("sepia");
        animal[i].classList.remove("blanco-negro");
        animal[i].classList.remove("invertir-color");
        animal[i].classList.remove("original");
      }
    }
  }
