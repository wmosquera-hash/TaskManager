document.addEventListener("DOMContentLoaded", () => {
    const formulario = document.querySelector("#form-tarea");
    const titulo = document.querySelector("#titulo-tarea");
    const prioridad = document.querySelector("#prioridad-tarea");
    const lista = document.querySelector("#lista-tareas");

    const tareas = JSON.parse(localStorage.getItem("tareas")) || [];

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
        localStorage.setItem("tareas", JSON.stringify(tareas));

        mostrarTarea(nuevaTarea);

        formulario.reset();

    });
            function mostrarTarea(nuevaTarea) {
        const elemento = document.createElement("li");
        const botonCompletar = document.createElement("button");
         botonCompletar.textContent = nuevaTarea.completada
    ? "Deshacer"
    : "Completar";

elemento.style.textDecoration = nuevaTarea.completada
    ? "line-through"
    : "none";
        elemento.textContent =
            `${nuevaTarea.titulo} - Prioridad: ${nuevaTarea.prioridad}`;
            botonCompletar.addEventListener("click", () => {
    nuevaTarea.completada = !nuevaTarea.completada;
    localStorage.setItem("tareas", JSON.stringify(tareas));
    elemento.style.textDecoration = nuevaTarea.completada
        ? "line-through"
        : "none";

    botonCompletar.textContent = nuevaTarea.completada
        ? "Deshacer"
        : "Completar";
});
         elemento.appendChild(botonCompletar);
         const botonEliminar = document.createElement("button");
botonEliminar.textContent = "Eliminar";

botonEliminar.addEventListener("click", () => {
    const posicion = tareas.indexOf(nuevaTarea);

    if (posicion !== -1) {
        tareas.splice(posicion, 1);
    }
    localStorage.setItem("tareas", JSON.stringify(tareas));
    elemento.remove();
});

elemento.appendChild(botonEliminar);

        lista.appendChild(elemento);
        }

    tareas.forEach((tarea) => {
    mostrarTarea(tarea);
});
});
