function disimg1() {
  document.getElementById('menu1').style.display="none";
  document.getElementById('menu2').style.display="block";
  document.getElementById('sidebar').style.display="block";
  document.getElementById('email').display="block";
  document.getElementById('sidebar').style.width="50vmin";
  document.getElementById('sidebar').style.animation="sidebar 0.5s linear";
}

function disimg2() {
  document.getElementById('menu1').style.display="block";
  document.getElementById('menu2').style.display="none";
  document.getElementById('sidebar').style.width="0vmin";
  document.getElementById('email').display="none";
  document.getElementById('menu2').src="";
  document.getElementById('sidebar').style.animation="sidebarend 0.5s linear";
}
