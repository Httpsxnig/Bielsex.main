const phrases = [
    "[🌿] Non Skeetless dude.",
    "[🌿] Bielsex.main on top.",
    "[🌿] Richthe said hello!",
    "[🌿] God i wish i had Bielsex.main.",
    "[🌿] Get good get Bielsex.main!",
    "[🌿] bielsex.main.space goes brrrrr"
];

setInterval(() => {
    const greeting = document.querySelector('.stp-animated-banner h2');
    if (greeting&&features.customBanner) greeting.textContent = phrases[Math.floor(Math.random() * phrases.length)];
}, 3000);