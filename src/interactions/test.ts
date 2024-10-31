"use strict";


document.addEventListener('DOMContentLoaded', () => {
    const title = document.getElementById('title') as HTMLHeadingElement;

    if (title) {

    title.addEventListener('click', () => {
        title.textContent = 'Bienvenue sur mon site';
        title.style.mixBlendMode = 'difference';
        title.style.textTransform = 'uppercase';
    });
    } else {
        console.error('Element not found');
    }
});
//ça change le texte avec l'id quand tu cliques dessus

