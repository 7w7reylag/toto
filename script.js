let currentNumber = 2; // Comenzamos con el primer número par
let previousNumber = 0; // Variable para almacenar el número par anterior

// Función para actualizar el número en la pantalla
function updateDisplay() {
    document.getElementById('numberDisplay').innerText = currentNumber;
}

// Evento para el clic izquierdo
document.body.addEventListener('click', function() {
    previousNumber = currentNumber; // Guardamos el número actual antes de incrementar
    currentNumber += 2; // Avanzamos al siguiente número par
    updateDisplay(); // Actualizamos la pantalla
});

// Evento para el clic derecho
document.body.addEventListener('contextmenu', function(event) {
    event.preventDefault(); // Prevenimos el menú contextual
    if (previousNumber > 0) { // Solo retrocedemos si hay un número anterior
        currentNumber = previousNumber; // Retrocedemos al número par anterior
        updateDisplay(); // Actualizamos la pantalla
    }
});
