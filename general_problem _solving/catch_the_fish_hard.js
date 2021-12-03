const prompt = require("prompt-sync")();
var k=prompt("Enter the value of k: ");
var l=prompt("Enter the value of l: ");
var m=prompt("Enter the value of m: ");
var n=prompt("Enter the value of n: ");
var total=prompt("Enter the value of total: ");

const countNumberOfFishes = (k,l,m,n,total)=>{
    if(k==1 || l==1 || m==1 || n==1)
        return total;
    var fishes=0;
    for(var i=1;i<=total;i++){
        if(i%k==0 || i%l==0 || i%m==0 || i%n==0)
            fishes+=1;
    }
    return fishes;
}

const fishesCatched = countNumberOfFishes(k,l,m,n,total);
console.log(fishesCatched);