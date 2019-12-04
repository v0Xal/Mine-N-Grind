//Currency
var money = 0;
var ore = 0;
var miners = 0;
var minerCost = 20;

//Pickaxes
var picks = [["Wood Pickaxe", 20 , 2],["Stone Pickaxe", 100 , 3],["Iron Pickaxe", 500 , 5], ["Steel Pickaxe", 1000 , 10],["Gold Pickaxe", 1500, 20], ["Diamond Pickaxe", 2500, 40], ["Infinity Pickaxe", 999999999999999999999999999999999999999999999999999999999999999999, 1000]]
var pickPower = 1;
var nextPickNum = 0;
var pickCost = 20;

//Mines
var mines = [["Coal Mine", 400 , 2],["Iron Mine", 2000 , 3],["Steel Mine", 10000 , 5], ["Gold Mine", 20000 , 10],["Diamond Mine", 30000, 25], ["Infinity Mine", 999999999999999999999999999999999999999999999999999999999999999999, 1000]]
var sellPrice = 1;
var nextMineNum = 0;
var mineCost = 400;

//Vaults
var vaults = [["Stone Vault", 100 , 400],["Iron Vault", 1000 , 800],["Steel Vault", 10000 , 1500], ["Gold Vault", 100000 , 5000],["Diamond Vault", 1000000, 15000] ["Infinity Vault", 999999999999999999999999999999999999999999999999999999999999999999, 1000]]
var vaultOverflow = 200;
var nextVaultNum = 0;
var vaultCost = 100;


//Mining Code
function mine() {
  ore += pickPower;
  document.getElementById("money").innerHTML = money;
  document.getElementById("ore").innerHTML = ore;
  overflow();
}
function overflow(){
  if (vaultOverflow <= ore) {
    ore = vaultOverflow;
    document.getElementById("money").innerHTML = money;
    document.getElementById("ore").innerHTML = ore;
  }
}
//Selling Your Ore
function sell(){
  money += sellPrice * ore;
  ore = 0;
  document.getElementById("money").innerHTML = money;
  document.getElementById("ore").innerHTML = ore;
}
//Updating HTML
function loopGame(){
  document.getElementById("ore").innerHTML = ore;
  document.getElementById("money").innerHTML = money;
  document.getElementById("pickpower").innerHTML = pickPower;
  document.getElementById("minepower").innerHTML = sellPrice;
   document.getElementById("miners").innerHTML = miners;
  //loopGame();
}
(function() {
  setInterval(function(){ loopGame() }, 500);
})();
//Buying new Pickaxes [WIP]
function buyNextPick(){
  if (money >= picks[nextPickNum][1]){
    pickPower = picks[nextPickNum][2];
    pickCost = picks[nextPickNum][1];
    money -= pickCost;
    nextPickNum++;
    document.getElementById("pickaxebuy").innerHTML = picks[nextPickNum][0] +	"&#32;" + "&#40;" + picks[nextPickNum][1] + "&#32;" + "Coins" + "&#41;";
    document.getElementById("pickpower").innerHTML = pickPower;
    document.getElementById("minepower").innerHTML = sellPrice;
    document.getElementById("ore").innerHTML = ore;
    document.getElementById("money").innerHTML = money;
    console.log(nextPickNum);
  }
}
function buyNextMine(){
  if (money >= mines[nextMineNum][1]){
    sellPrice = mines[nextMineNum][2];
    mineCost = mines[nextMineNum][1];
    money -= mineCost;
    nextMineNum++;
    document.getElementById("minebuy").innerHTML = mines[nextMineNum][0] +	"&#32;" + "&#40;" + mines[nextMineNum][1] + "&#32;" + "Coins" + "&#41;";
    document.getElementById("pickpower").innerHTML = pickPower;
    document.getElementById("minepower").innerHTML = sellPrice;
    document.getElementById("ore").innerHTML = ore;
  document.getElementById("money").innerHTML = money;
    console.log(nextMineNum);
  }
}
function buyNextVault(){
  if (money >= vaults[nextVaultNum][1]){
    vaultOverflow = vaults[nextVaultNum][2];
    vaultCost = vaults[nextVaultNum][1];
    money -= vaultCost;
    nextVaultNum++;
    document.getElementById("vaultbuy").innerHTML = vaults[nextVaultNum][0] +	"&#32;" + "&#40;" + vaults[nextVaultNum][1] + "&#32;" + "Coins" + "&#41;";
    document.getElementById("pickpower").innerHTML = pickPower;
    document.getElementById("overflow").innerHTML = vaultOverflow;
    document.getElementById("vaultpower").innerHTML = vaultOverflow;
    document.getElementById("minepower").innerHTML = sellPrice;
    document.getElementById("ore").innerHTML = ore;
  document.getElementById("money").innerHTML = money;
    console.log(nextVaultNum);
  }
}

funtction buyminer(){
  miners++;
  money - minerCost;
  minercost *= 1.5;
  document.getElementById("minerbuy").innerHTML ="Miner" +	"&#32;" + "&#40;" + minercost + "&#32;" + "Coins" + "&#41;";
  document.getElementById("miners").innerHTML = miners;
}
var last = Date.now()
var goal = last + 1000;

function handleInterval () {
  last = Date.now();
  if (last >= goal) {
    goal = goal + 1000;
    ore += miners
    document.getElementById("ore").innerHTML = ore;
  }
}
setInterval(handleInterval, 100);