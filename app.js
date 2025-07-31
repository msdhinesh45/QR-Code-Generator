// index.js
const QRCode = require('qrcode');

const data = `https://msdhinesh-portfolio.vercel.app/`;

// Generate QR Code and print in console
QRCode.toString(data,{type:'terminal'},function(err,url){
    if(err) return console.error(err);
    console.log(url);
});

// Generate QR Code as image file(PNG)
QRCode.toFile("qrcode.png",data,{
    color:{
        dark:'#000',    //QR Code Color
        light:'#fff'    //BG color
    }
},function(err){
    if(err) throw err;
console.log("QR Code as qrcode.png");
})