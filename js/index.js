// Splash Screen Script
document.addEventListener('DOMContentLoaded', function() {
    // Criar elementos da splash screen
    const splash = document.createElement('div');
    splash.id = 'splash-screen';
    splash.innerHTML = `
        <div class="splash-content">
            <img src="./assets/logo.png" alt="Lumini" class="splash-logo">
            <div class="splash-loader"></div>
        </div>
    `;

    // Adicionar ao body (primeiro para evitar flash)
    document.body.appendChild(splash);
    document.body.style.overflow = 'hidden';

    // Mostrar splash com delay mínimo para evitar flash
    setTimeout(() => {
        splash.classList.add('show');
    }, 100);

    // Esconder splash após 3.5 segundos
    setTimeout(() => {
        splash.classList.add('fade-out');
        setTimeout(() => {
            splash.remove();
            document.body.style.overflow = 'auto';
        }, 500); // Tempo da transição
    }, 3500);
});
