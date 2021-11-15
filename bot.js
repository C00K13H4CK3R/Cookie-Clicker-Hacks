/* In developement */

if (window.location.href == "https://orteil.dashnet.org/cookieclicker/") {
  Game.CloseNotes();
  console.log("Copyright (c) 2021 eunhyobenjaminkim");
  Game.Notify('Using Bots isn\'t cheating... is it?','Cheated cookies tastes just fine.',[12,0]);
  document.getElementById("bakeryName").click();
  document.getElementById("bakeryNameInput").value = "Bot";
  document.getElementById("promptOption0").click();
  Game.UpgradesById[414].choicesPick(9);Game.choiceSelectorOn=-1;Game.UpgradesById[414].buy();
  
  /* For clicking cookies */
  var autoClicker = setInterval(Game.ClickCookie, 100);
  /* --- */
  
  /* For clicking gold cookies */
  setInterval(function() {
    Game.shimmers.forEach(function(shimmer) {
        if (shimmer.type == "golden") { shimmer.pop() }
    })
}, 500);
  /* --- */
  
  /* For clicking wrinklers */
  var wrinklerClick= setInterval(function() {
  for (var i=0;i<12;i++) {
      if (Game.wrinklers[i].close==1) {
        Game.wrinklers[i].hp--
        }
      }
  }, 100);
  
  /* Auto buys the cheapest product */ 
  var cheapestProduct = 0;
  var currentProduct = 0;
  function buyProduct() {
    var productVariety = Game.ObjectsById.length;
    while (currentProduct < productVariety) {
        if (Game.ObjectsById[currentProduct].price < Game.ObjectsById[cheapestProduct].price) {
            cheapestProduct = currentProduct;
        }
        currentProduct ++;
    }
    Game.ObjectsById[cheapestProduct].buy();
    currentProduct = 0;
  }
  
  var autoBuy = setInterval(buyProduct, 100);
  /* --- */
  
  //Does not currently work. The previous code seems to be overriding this.
  /* Auto buys upgrade */
  var currentUpgrade = 0;
  function buyUpgrade() {
   var upgradeVariety = Game.UpgradesById.length;
   while (currentUpgrade < upgradeVariety) {
      Game.UpgradesById[currentUpgrade].buy();
      currentUpgrade ++;
      Game.ClosePrompt();
      }
   }

   var autoUpgrade = setInterval(buyUpgrade, 100);
  /* --- */
 
}

