const twix = 15.678;
const bounty = 123.965;
const snickers = 90.2345;

document.writeln("Максимальна ціна: "+Math.max(twix, bounty, snickers)+";"+"<br>");
document.writeln("Мінімальна ціна: "+Math.min(twix,bounty,snickers)+";"+"<br>")

const sweets = twix + bounty + snickers;

document.writeln("Загальна сума товарів: "+sweets+";"+"<br>");
document.writeln("Вартість товарів з округленням в меншу сторону: " +Math.floor(sweets)+";" + "<br>")
document.writeln("Округлення до сотень: " +Math.ceil(sweets)+";" + "<br>");
document.writeln("Булеве значення: " + (!!Math.floor((sweets)%2))+";"+"<br>");
 
const customerFee = 500;

document.writeln("Сума решти: "+ (customerFee-sweets)+";"+"<br>");
document.writeln("Середнє значення цін: "+ (sweets/3)+";"+"<br>")

const random = Math.round(Math.random()*100);

document.write("Випадкове число :"+Math.round(Math.random()*100)+";"+"<br>");
document.write("Сума до Оплати зі Знижкою :"+((100-random)*sweets/100).toFixed(2) +";"+"<br>")

const selfPrise = (sweets/2).toFixed(2);

document.write("Самостійна ціна :"+ (sweets/2).toFixed(2) +";"+"<br>");
document.write("Чистий Прибуток: "+(selfPrise -(random*sweets/100)).toFixed(2) +";"+"<br>");