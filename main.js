let twix = 15.678;
let bounty = 123.965;
let snickers = 90.2345;

document.writeln("Максимальна ціна: "+Math.max(twix, bounty, snickers)+";"+"<br>");
document.writeln("Мінімальна ціна: "+Math.min(twix,bounty,snickers)+";"+"<br>")

let sweets = twix + bounty + snickers;

document.writeln("Загальна сума товарів: "+sweets+";"+"<br>");
document.writeln("Вартість товарів з округленням в меншу сторону: " +Math.floor(sweets)+";" + "<br>")
document.writeln("Округлення до сотень: " +Math.ceil(sweets)+";" + "<br>");
document.writeln("Булеве значення: " + (!!Math.floor((sweets)%2))+";"+"<br>");
document.writeln("Сума решти: "+ (500-sweets)+";"+"<br>");
document.writeln("Середнє значення цін: "+ (sweets/3)+";"+"<br>")

let random = Math.round(Math.random()*100);

document.write("Випадкове число :"+Math.round(Math.random()*100)+";"+"<br>");
document.write("Сума до Оплати зі Знижкою :"+((100-random)*sweets/100).toFixed(2) +";"+"<br>")

let selfPrise = (sweets/2).toFixed(2);

document.write("Самостійна ціна :"+ (sweets/2).toFixed(2) +";"+"<br>");
document.write("Чистий Прибуток: "+(selfPrise -(random*sweets/100)).toFixed(2) +";"+"<br>");