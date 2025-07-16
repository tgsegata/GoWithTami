document.addEventListener('DOMContentLoaded', () => {
  anime({
    targets: '.cta',
    translateY: [20, 0],
    opacity: [0, 1],
    delay: anime.stagger(300),
    duration: 1000,
    easing: 'easeOutExpo'
  });
});