const contenido = document.getElementById("contenido");
const tituloPagina = document.getElementById("titulo-pagina");
const dialogo = document.getElementById("dialogo");
const dialogoInformacion = document.getElementById("dialogo-informacion");
const aviso = document.getElementById("aviso");

const modulos = {
    nps: {
        titulo: "NPS",
        descripcion:
            "Seguimiento de la experiencia de clientes internos y externos, resultados, comentarios y planes de acción.",
        color1: "#075c45",
        color2: "#16a078",
        opciones: [
            ["◉", "Resultados", "Visualización de resultados generales y por área."],
            ["↗", "Evolución", "Consulta de la evolución histórica del indicador."],
            ["☑", "Planes de acción", "Seguimiento de acciones vinculadas con oportunidades de mejora."],
            ["✎", "Comentarios", "Análisis y clasificación de comentarios recibidos."],
            ["♧", "Segmentación", "Consulta por cliente, área proveedora o período."],
            ["▥", "Panel de Power BI", "Acceso al tablero ejecutivo de NPS."]
        ]
    },

    planeamiento: {
        titulo: "Planeamiento Estratégico",
        descripcion:
            "Espacio para centralizar definiciones estratégicas, objetivos, indicadores y avances.",
        color1: "#244b86",
        color2: "#4386d7",
        opciones: [
            ["◇", "Análisis SWOT", "Fortalezas, oportunidades, debilidades y amenazas."],
            ["◎", "Objetivos estratégicos", "Consulta de objetivos y focos prioritarios."],
            ["▥", "Indicadores", "Seguimiento de indicadores estratégicos."],
            ["↗", "Evolución", "Visualización de avances y tendencias."],
            ["☰", "Documentación", "Acceso a presentaciones y materiales de soporte."],
            ["☑", "Seguimiento", "Control de compromisos y acciones estratégicas."]
        ]
    },

    gpd: {
        titulo: "GPD Ágil",
        descripcion:
            "Gestión organizada desde los desafíos estratégicos hasta las iniciativas y actividades de cada área.",
        color1: "#d57823",
        color2: "#f5a54d",
        opciones: [
            ["▦", "Áreas", "Selección del área responsable."],
            ["◆", "Desafíos", "Definición de los desafíos estratégicos."],
            ["◎", "Objetivos", "Consulta de los objetivos asociados."],
            ["↗", "Resultados clave", "Seguimiento de resultados y métricas."],
            ["⚡", "Iniciativas", "Gestión de iniciativas priorizadas."],
            ["☑", "Actividades", "Detalle y control de las actividades."]
        ]
    },

    comites: {
        titulo: "Comités",
        descripcion:
            "Centralización de reuniones, calendarios, acciones, actas e indicadores de los comités de gestión.",
        color1: "#594093",
        color2: "#896fca",
        opciones: [
            ["▦", "Comités activos", "Consulta de los comités vigentes."],
            ["□", "Calendario", "Próximas reuniones y agenda."],
            ["☑", "Acciones", "Seguimiento de acciones y responsables."],
            ["✓", "Asistencia", "Registro de asistencia a reuniones."],
            ["☰", "Actas", "Acceso a actas y documentación."],
            ["▥", "Indicadores", "Panel general de seguimiento."]
        ]
    }
};

function cargarModulo(nombre, elementoMenu) {
    cerrarMenuMovil();

    if (elementoMenu) {
        document.querySelectorAll(".menu-item").forEach((item) => {
            item.classList.remove("activo");
        });

        elementoMenu.classList.add("activo");
    }

    if (nombre === "inicio") {
        cargarInicio();
        return;
    }

    const modulo = modulos[nombre];

    if (!modulo) {
        return;
    }

    tituloPagina.textContent = modulo.titulo;

    contenido.innerHTML = `
        <section
            class="panel-encabezado"
            style="--color-1:${modulo.color1}; --color-2:${modulo.color2};"
        >
            <span class="volver" onclick="cargarInicio()">← Volver al inicio</span>

            <h1>${modulo.titulo}</h1>
            <p>${modulo.descripcion}</p>
        </section>

        <div class="encabezado-seccion">
            <div>
                <h2>Opciones disponibles</h2>
                <p>Seleccioná una opción para explorar el prototipo.</p>
            </div>
        </div>

        <section class="grilla-opciones">
            ${modulo.opciones
                .map(
                    (opcion) => `
                        <article
                            class="opcion"
                            onclick="abrirOpcion('${opcion[1]}', '${opcion[2]}')"
                        >
                            <span>${opcion[0]}</span>
                            <h3>${opcion[1]}</h3>
                            <p>${opcion[2]}</p>
                        </article>
                    `
                )
                .join("")}
        </section>
    `;

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

function cargarInicio() {
    tituloPagina.textContent = "Inicio";

    const botonInicio = document.querySelector(".menu-item");

    document.querySelectorAll(".menu-item").forEach((item) => {
        item.classList.remove("activo");
    });

    if (botonInicio) {
        botonInicio.classList.add("activo");
    }

    contenido.innerHTML = `
        <section class="bienvenida">

            <div>
                <span class="etiqueta">Portal interno | Versión demostrativa</span>

                <h1>La gestión estratégica, en un solo lugar.</h1>

                <p>
                    Un espacio para acompañar la gobernanza, facilitar el acceso
                    a la información y conectar el NPS, el planeamiento,
                    el GPD Ágil y los comités.
                </p>
            </div>

            <div class="ilustracion">
                <div class="circulo-principal">
                    <span>⚡</span>
                </div>
            </div>

        </section>

        <div class="encabezado-seccion">
            <div>
                <h2>Explorá Gobernanza</h2>
                <p>Ingresá al módulo que necesitás consultar o gestionar.</p>
            </div>
        </div>

        <section class="grilla-modulos">

            <article class="tarjeta-modulo nps" onclick="cargarModuloDesdeTarjeta('nps', 1)">
                <div class="icono-modulo">◎</div>
                <h3>NPS</h3>
                <p>
                    Resultados, evolución, comentarios y seguimiento de planes de acción.
                </p>
                <span class="flecha">→</span>
            </article>

            <article
                class="tarjeta-modulo planeamiento"
                onclick="cargarModuloDesdeTarjeta('planeamiento', 2)"
            >
                <div class="icono-modulo">◆</div>
                <h3>Planeamiento Estratégico</h3>
                <p>
                    Objetivos, indicadores, análisis SWOT y prioridades estratégicas.
                </p>
                <span class="flecha">→</span>
            </article>

            <article class="tarjeta-modulo gpd" onclick="cargarModuloDesdeTarjeta('gpd', 3)">
                <div class="icono-modulo">⚡</div>
                <h3>GPD Ágil</h3>
                <p>
                    Áreas, desafíos, objetivos, resultados clave, iniciativas y actividades.
                </p>
                <span class="flecha">→</span>
            </article>

            <article
                class="tarjeta-modulo comites"
                onclick="cargarModuloDesdeTarjeta('comites', 4)"
            >
                <div class="icono-modulo">▦</div>
                <h3>Comités</h3>
                <p>
                    Calendario, reuniones, acciones, responsables, actas e indicadores.
                </p>
                <span class="flecha">→</span>
            </article>

        </section>
    `;

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

function cargarModuloDesdeTarjeta(nombre, posicionMenu) {
    const botones = document.querySelectorAll(".menu-item");
    cargarModulo(nombre, botones[posicionMenu]);
}

function abrirOpcion(titulo, descripcion) {
    dialogoInformacion.innerHTML = `
        <h2>${titulo}</h2>

        <p>${descripcion}</p>

        <p style="margin-top:16px;">
            Esta sección forma parte de la maqueta inicial. En una próxima etapa
            podrá conectarse con Power BI, SharePoint, Power Apps o una base de datos.
        </p>
    `;

    dialogo.showModal();
    mostrarAviso("Opción seleccionada: " + titulo);
}

function cerrarDialogo() {
    dialogo.close();
}

function mostrarAviso(mensaje) {
    aviso.textContent = mensaje;
    aviso.classList.add("visible");

    setTimeout(() => {
        aviso.classList.remove("visible");
    }, 2500);
}

function alternarMenu() {
    document.getElementById("sidebar").classList.toggle("abierto");
}

function cerrarMenuMovil() {
    document.getElementById("sidebar").classList.remove("abierto");
}

dialogo.addEventListener("click", function (evento) {
    if (evento.target === dialogo) {
        cerrarDialogo();
    }
});

window.addEventListener("DOMContentLoaded", cargarInicio);
