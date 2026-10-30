document.addEventListener("DOMContentLoaded", () => {
    const formulario = document.querySelector("#form-tarea");
    const titulo = document.querySelector("#titulo-tarea");
    const prioridad = document.querySelector("#prioridad-tarea");
    const lista = document.querySelector("#lista-tareas");

    const tareas = [];

    formulario.addEventListener("submit", (evento) => {
        evento.preventDefault();

        const texto = titulo.value.trim();

        if (texto === "") {
            alert("Por favor, escribe una tarea.");
            return;
        }

        const nuevaTarea = {
            titulo: texto,
            prioridad: prioridad.value,
            completada: false
        };

        tareas.push(nuevaTarea);

        const elemento = document.createElement("li");
        elemento.textContent =
            `${nuevaTarea.titulo} - Prioridad: ${nuevaTarea.prioridad}`;

        lista.appendChild(elemento);

        formulario.reset();
    });
});
