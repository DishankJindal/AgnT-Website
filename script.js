function disimg1() {
  document.getElementById('menu1').style.display="none";
  document.getElementById('menu2').style.display="block";
  document.getElementById('sidebar').style.display="block";
  document.getElementById('email').display="inline";
  document.getElementById('menu2').src="img/menu2.png";
}

function disimg2() {
  document.getElementById('menu1').style.display="block";
  document.getElementById('menu2').style.display="none";
  document.getElementById('sidebar').style.display="none";
  document.getElementById('email').display="none";
}
