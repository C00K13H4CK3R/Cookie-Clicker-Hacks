/* In developement */

if (window.location.href == "https://orteil.dashnet.org/cookieclicker/") {
  console.log("Copyright (c) 2021 eunhyobenjaminkim");
  document.getElementById("bakeryName").click();
  document.getElementById("bakeryNameInput").value = "Bot";
  document.getElementById("promptOption0").click();
  Game.OpenSesame();
  Game.Notify('Using Bots isn\'t cheating... is it?','Cheated cookies tastes just fine.',[12,0]);
  
  /* For clicking cookies */
  var autoClicker = setInterval(Game.ClickCookie, 200);
  
  /* For clicking gold cookies */
  setInterval(function() {
    Game.shimmers.forEach(function(shimmer) {
        if (shimmer.type == "golden") { shimmer.pop() }
    })
}, 500);
}
