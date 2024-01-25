
var i = 0;
const links = ["img/backgruound1.jpeg", "img/backgruound2.jpeg", "img/backgruound3.jpeg", "img/backgruound4.jpeg", "img/backgruound5.jpeg"];
const cities = ["Kolkata, India", "Bangalore, India", "Puna, India", "Chennai, India", "Indore, India"];
const names = ["Axis Mall", "Central Park", "Victoria", "Diamond Plazza", "Central One"];
const desc = ["Axis Mall Axis Mall Axis Mall", "Central Park Central Park Central Park", "Victoria Victoria Victoria", "Diamond PlazzaDiamond PlazzaDiamond Plazza", "Central OneCentral OneCentral One"];
setInterval(function () {
    i = i % 5;
    document.getElementById("stripimg").src = links[i];
    document.querySelector(".right").style.backgroundImage = `url("${links[i]}")`;
    document.querySelector(".city").innerHTML = cities[i];
    document.querySelector(".name").innerHTML = names[i];
    document.querySelector(".des").innerHTML = desc[i];
    document.querySelector(".text").animate([
        // key frames
        {
            transform: ['translateY(100px)', 'translateY(0px)'],
            opacity: [0, 1]
        }
    ], {
        // sync options
        duration: 600
    });

    i++;
}, 3000);