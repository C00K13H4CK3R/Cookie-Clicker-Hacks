/* In developement */

if (window.location.href == "https://orteil.dashnet.org/cookieclicker/") {
  Game.CloseNotes();
  console.log("Copyright (c) 2021 eunhyobenjaminkim");
  document.getElementById("bakeryName").click();
  document.getElementById("bakeryNameInput").value = "Bot";
  document.getElementById("promptOption0").click();
  Game.OpenSesame();
  Game.Notify('Using Bots isn\'t cheating... is it?','Cheated cookies tastes just fine.',[12,0]);
  
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
  
  /* Auto buys the cheapest upgrades */
  var cheapestUpgrade = 0;
  var currentUpgrade = 0;
  function buyUpgrade() {
    var upgradeVariety = Game.UpgradesById.length;
    while (currentUpgrade < upgradeVariety) {
      if (Game.UpgradesById[currentUpgrade].getPrice() < Game.UpgradesById[cheapestUpgrade].getPrice) {
        cheapestUpgrade = currentUpgrade;
      }
      currentUpgrade ++;
    }
    Game.UpgradesById[cheapestUpgrade].click(event);
    currentUpgrade = 0;
    Game.ClosePrompt();
  }
    
    // ----
  
  var upgradeNum = 0;
  function buyUpgrades() {
   var upgradeLength = Game.UpgradesById.length;
   while (upgradeNum < upgradeLength) {
       Game.UpgradesById[upgradeNum].click(event);
       upgradeNum ++;
       Game.ClosePrompt();
   }
}

setInterval(buyUpgrades, 100);
  /* --- */
 
}

