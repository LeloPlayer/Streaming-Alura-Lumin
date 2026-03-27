// Splash Screen Script
document.addEventListener('DOMContentLoaded', function() {
    // Criar elementos da splash screen
    const splash = document.createElement('div');
    splash.id = 'splash-screen';
    splash.innerHTML = `
        <div class="splash-content">
            <img src="/assets/logo.png" alt="Netflix" class="splash-logo">
            <div class="splash-loader"></div>
        </div>
    `;

    // Adicionar ao body
    document.body.appendChild(splash);

    // Mostrar splash
    setTimeout(() => {
        splash.classList.add('show');
    }, 100);

    // Esconder splash após 3 segundos
    setTimeout(() => {
        splash.classList.add('hide');
        setTimeout(() => {
            splash.remove();
        }, 500); // Tempo da transição
    }, 3000);
});
