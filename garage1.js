document.addEventListener('DOMContentLoaded', function () {
    const video = document.getElementById('heroVideo');
    const heroSection = document.querySelector('.hero');
    const servicesSection = document.querySelector('.services');
    let isScrollingUp = false;
    let isPlaying = false; // Suivre l'état de la vidéo (en lecture ou en pause)
    let isRewinding = false; // Suivre si la vidéo est en mode rewind
    let rewindInterval = null; // Intervalle pour simuler le rebobinage

    // Fonction pour lire la vidéo normalement
    async function playVideo() {
        if (!isPlaying && !isRewinding) {
            try {
                video.playbackRate = 1; // Vitesse normale
                await video.play(); // Attendre que la vidéo commence à jouer
                isPlaying = true; // Mise à jour de l'état
            } catch (error) {
                console.error("Erreur de lecture vidéo : ", error);
            }
        }
    }

    // Fonction pour rebobiner la vidéo
    function rewindVideo() {
        if (!isRewinding && isPlaying) {
            isRewinding = true;
            video.pause(); // Mettre en pause avant de commencer le rebobinage
            clearInterval(rewindInterval); // Effacer tout intervalle existant
            video.currentTime = video.duration; // Positionner la vidéo à la fin
            rewindInterval = setInterval(() => {
                if (video.currentTime > 0) {
                    video.currentTime -= 0.1; // Rebobiner la vidéo en diminuant currentTime
                } else {
                    clearInterval(rewindInterval); // Arrêter le rebobinage quand on arrive au début
                    isRewinding = false; // Réinitialiser l'état
                    pauseVideo(); // Mettre la vidéo en pause après rebobinage
                }
            }, 20); // Intervalle pour rebobiner la vidéo
        }
    }

    // Fonction pour mettre la vidéo en pause
    async function pauseVideo() {
        if (isPlaying && !isRewinding) {
            try {
                clearInterval(rewindInterval); // Stoppe le rebobinage si actif
                await video.pause(); // Attendre que la vidéo se mette en pause
                isPlaying = false; // Mise à jour de l'état de la vidéo
            } catch (error) {
                console.error("Erreur de pause vidéo : ", error);
            }
        }
    }

    // Fonction pour gérer le défilement
    function handleScroll() {
        const heroRect = heroSection.getBoundingClientRect();
        const servicesRect = servicesSection.getBoundingClientRect();

        if (heroRect.top <= 0 && heroRect.bottom >= 0) {
            // Si on est dans la section Hero
            if (isScrollingUp) {
                rewindVideo(); // Si on scrolle vers le haut, rebobiner la vidéo
            } else {
                playVideo(); // Si on scrolle vers le bas, lire la vidéo
            }
        } else if (servicesRect.top <= window.innerHeight && servicesRect.bottom >= 0) {
            // Si on est dans la section Services, mettre en pause
            pauseVideo();
        }
    }

    // Écouteur pour détecter le sens du défilement
    window.addEventListener('scroll', function () {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        isScrollingUp = (this.oldScroll > scrollTop);
        this.oldScroll = scrollTop;

        handleScroll();
    });

    // Initialisation: on met la vidéo sur pause au départ
    pauseVideo();
});
