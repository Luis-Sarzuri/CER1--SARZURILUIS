// Datos de ejemplo para los eventos
const eventos = [
    {
        id: 1,
        titulo: "Festival de Música Universitaria",
        fecha: "09/09/2025",
        hora: "11:00",
        lugar: "Patio Central USM",
        imagen: "imagenes/musica.jpg",
        valor: "$5.000"
    },
    {
        id: 2,
        titulo: "Charla: Inteligencia Artificial",
        fecha: "15/09/2025",
        hora: "15:00",
        lugar: "Auditorio Principal",
        imagen: "imagenes/inteligencia.jpg",
        valor: "Gratuito"
    },
    {
        id: 3,
        titulo: "Feria de Emprendimiento",
        fecha: "20/09/2025",
        hora: "10:00",
        lugar: "Plaza de la Innovación",
        imagen: "imagenes/feria.jpeg",
        valor: "Gratuito"
    },
    {
        id: 4,
        titulo: "Taller de Programación Web",
        fecha: "25/09/2025",
        hora: "14:00",
        lugar: "Laboratorio de Computación",
        imagen: "imagenes/progra.png",
        valor: "$3.000"
    },
    {
        id: 5,
        titulo: "Concierto de Jazz",
        fecha: "30/09/2025",
        hora: "19:00",
        lugar: "Teatro Municipal",
        imagen: "imagenes/jazz.jpg",
        valor: "$8.000"
    },
    {
        id: 6,
        titulo: "Exposición de Arte Digital",
        fecha: "05/10/2025",
        hora: "11:00",
        lugar: "Galería de Arte",
        imagen: "imagenes/arte.jpg",
        valor: "$2.000"
    }
];

// Función para renderizar los eventos
function renderEventos() {
    const eventosContainer = document.getElementById('eventos-container');
    
    eventos.forEach(evento => {
        const eventoHTML = `
            <div class="col-md-6 col-lg-4 mb-4">
                <div class="card evento-card h-100">
                    <img src="${evento.imagen}" class="card-img-top evento-img" alt="${evento.titulo}">
                    <div class="card-body">
                        <h5 class="card-title">${evento.titulo}</h5>
                        <p class="card-text">
                            <strong>Fecha:</strong> ${evento.fecha} a las ${evento.hora}<br>
                            <strong>Lugar:</strong> ${evento.lugar}<br>
                            <strong>Valor:</strong> ${evento.valor}
                        </p>
                    </div>
                </div>
            </div>
        `;
        
        eventosContainer.innerHTML += eventoHTML;
    });
}

// Ejecutar cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', renderEventos);