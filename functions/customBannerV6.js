const phrases = [
    "[f33f] Non Skeetless dude.",
    "[f33f] Bielsex.main on top.",
    "[f33f] Richthe said hello!",
    "[f33f] God i wish i had Bielsex.main.",
    "[f33f] Get good get Bielsex.main!",
    "[f33f] bielsex.main.space goes brrrrr"
];

setInterval(() => {
    const greeting = document.querySelector('.stp-animated-banner h2');
    if (greeting&&features.customBanner) greeting.textContent = phrases[Math.floor(Math.random() * phrases.length)];
}, 3000); 