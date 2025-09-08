// Array para almacenar comentarios (en una aplicación real, esto vendría de una base de datos)
let comentarios = [
    {
        id: 1,
        nombre: "Juan Pérez",
        fecha: "05/09/2025 10:30",
        mensaje: "¡Excelente iniciativa! Estoy ansioso por el festival de música."
    },
    {
        id: 2,
        nombre: "Ana Rodríguez",
        fecha: "04/09/2025 16:45",
        mensaje: "¿Habrá descuentos para estudiantes en el taller de programación?"
    },
    {
        id: 3,
        nombre: "Carlos López",
        fecha: "03/09/2025 09:15",
        mensaje: "Me encanta que organicen estos eventos culturales en la universidad."
    }
];

// Función para formatear la fecha actual
function obtenerFechaActual() {
    const ahora = new Date();
    const dia = ahora.getDate().toString().padStart(2, '0');
    const mes = (ahora.getMonth() + 1).toString().padStart(2, '0');
    const anio = ahora.getFullYear();
    const horas = ahora.getHours().toString().padStart(2, '0');
    const minutos = ahora.getMinutes().toString().padStart(2, '0');
    
    return `${dia}/${mes}/${anio} ${horas}:${minutos}`;
}

// Función para renderizar comentarios
function renderComentarios() {
    const comentariosContainer = document.getElementById('comentarios-container');
    
    // Limpiar contenedor (excepto el título)
    const titulo = comentariosContainer.querySelector('h3');
    comentariosContainer.innerHTML = '';
    comentariosContainer.appendChild(titulo);
    
    // Mostrar mensaje si no hay comentarios
    if (comentarios.length === 0) {
        comentariosContainer.innerHTML += `
            <div class="alert alert-info">
                Sé el primero en comentar sobre los eventos.
            </div>
        `;
        return;
    }
    
    // Renderizar cada comentario
    comentarios.forEach(comentario => {
        const comentarioHTML = `
            <div class="card comentario-card">
                <div class="card-body">
                    <div class="d-flex justify-content-between comentario-header">
                        <strong>${comentario.nombre}</strong>
                        <span>${comentario.fecha}</span>
                    </div>
                    <p class="card-text mt-2">${comentario.mensaje}</p>
                </div>
            </div>
        `;
        
        comentariosContainer.innerHTML += comentarioHTML;
    });
}

// Función para manejar el envío del formulario
function manejarEnvioFormulario(event) {
    event.preventDefault();
    
    const nombreInput = document.getElementById('nombre');
    const mensajeInput = document.getElementById('mensaje');
    
    // Crear nuevo comentario
    const nuevoComentario = {
        id: comentarios.length + 1,
        nombre: nombreInput.value,
        fecha: obtenerFechaActual(),
        mensaje: mensajeInput.value
    };
    
    // Agregar al array de comentarios
    comentarios.unshift(nuevoComentario);
    
    // Renderizar comentarios
    renderComentarios();
    
    // Resetear formulario
    nombreInput.value = '';
    mensajeInput.value = '';
    document.getElementById('contador-caracteres').textContent = '500';
}

// Función para actualizar el contador de caracteres
function actualizarContadorCaracteres() {
    const mensajeInput = document.getElementById('mensaje');
    const contador = document.getElementById('contador-caracteres');
    const caracteresRestantes = 500 - mensajeInput.value.length;
    
    contador.textContent = caracteresRestantes;
    
    if (caracteresRestantes < 20) {
        contador.classList.add('text-danger');
    } else {
        contador.classList.remove('text-danger');
    }
}

// Inicializar cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', function() {
    // Renderizar comentarios iniciales
    renderComentarios();
    
    // Configurar event listeners
    document.getElementById('comentario-form').addEventListener('submit', manejarEnvioFormulario);
    document.getElementById('mensaje').addEventListener('input', actualizarContadorCaracteres);
});