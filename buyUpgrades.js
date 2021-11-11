/* Buys upgrades when you have enough cookies.
If you want to get all upgrades without using your cookies, simply use Game.SetAllUpgrades(1); instead. */

var upgradeNum = 0;
function buyUpgrades() {
   var upgradeLength = Game.UpgradesById.length;
   while (upgradeNum < upgradeLength) {
       Game.UpgradesById[upgradeNum].click(event);
       upgradeNum ++;
   }
}

PlaySound('snd/tick.mp3');Game.ClosePrompt();
setInterval(buyUpgrades, 100);
