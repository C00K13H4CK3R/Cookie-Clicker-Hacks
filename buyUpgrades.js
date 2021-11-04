/* Buys upgrades when you have enough cookies.
If you want to get all upgrades without using your cookies, simply use Game.SetAllUpgrades(1); instead. */

// Does not work (I will try to fix this)

var upgradeNum = 0;
function buyUpgrades() {
   var upgradeLength = Game.UpgradesById.length;
   while (upgradeNum < upgradeLength) {
       Game.UpgradesById[upgradeNum].toggle();
       upgradeNum ++;
   }
}

setInterval(buyUpgrades, 100);
