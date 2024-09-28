// for loop -> davtalt -> neg codiig olon dahin ashiglahad
// for(hedees_ehleh; hed_hurtel, nemegdeh/hasagdah) bicheglele
//for (var i = 10; i >= 1; i--) {

// i=1 -> 1<=10 -> true => 1bat -> i++
// i=2 -> 2<=10 -> true => 2bat -> i++
// .....
// i =11 -> 11<=10 -> false
//for (var i = 1; i <= 100; i++) {
//    if(i%2==0){
//    console.log(i + "bat");
//}}
//for (var i = 1; i <= 10; i++) {
//    if(i%3==0 && i%5==0){
//        console.log(+1);
//    }
//}
//var too=2;
//for (var i = 1; i <= 10; i++) {
//    console.log(too+"x"+i+"="+i*too);
//}
//var a = 0;
//var b = 1;
//for (var i = 1; i <= 10; i++) {
//    a = a + i;
//    b = b * i;
//}
//console.log(a);
//console.log(b);
var random = Math.floor(Math.random() * 10) + 1;
console.log(random);
for (var i = 1; i <= 3; i++)
    {
    var too = +prompt("1-10 hoorond toog taana uu");
    if (too == random) {
        alert("zov taalaa");
        alert("bayrhurgey " +i+ " orldgoor hojloo")
        break;  
    }else if (too>10 || too<0) {
        alert("buruu utga oruulla");
    } else if (too > random) {
        alert("ih baina");
    } else if (too < random) {
        alert("baga baina");
    }  else {
        alert("ta buruu taalaa");
    } if (i==3){
        alert("ami duusla Ctrl+R darj dahin toglno uu")
    }
}
