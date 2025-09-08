// Configuración de la fecha del evento destacado (9 de septiembre de 2025 a las 11:00 hrs)
const eventDate = new Date('2025-09-08T01:04:50');

function updateCountdown() {
    const now = new Date();
    const timeRemaining = eventDate - now;
    
    if (timeRemaining <= 0) {
        // El evento ya comenzó
        document.getElementById('countdown').classList.add('d-none');
        document.getElementById('countdown-ended').classList.remove('d-none');
        return;
    }
    
    // Calcular días, horas, minutos y segundos
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
    
    // Actualizar el DOM
    document.getElementById('days').textContent = days.toString().padStart(2, '0');
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
}

// Iniciar el countdown
updateCountdown();
setInterval(updateCountdown, 1000);