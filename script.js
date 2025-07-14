const semestres = [
  {
    nombre: "Semestre 1",
    materias: [
      { nombre: "Cátedra San Pablo", creditos: 3 },
      { nombre: "Competencias Comunicativas", creditos: 3 },
      { nombre: "Leer y Escribir", creditos: 3 },
      { nombre: "Historia General de Colombia", creditos: 3 },
      { nombre: "Profesiones de la Comunicación", creditos: 3 },
      { nombre: "Inglés I (A1)", creditos: 3 },
    ]
  },
  {
    nombre: "Semestre 2",
    materias: [
      { nombre: "Cátedra Interdisciplinar I", creditos: 3 },
      { nombre: "Lenguajes y Géneros", creditos: 3 },
      { nombre: "Epistemología", creditos: 3 },
      { nombre: "Sociedad, Ciudadanía y Comunicación", creditos: 3 },
      { nombre: "Antropología y Comunicación", creditos: 3 },
      { nombre: "Inglés II (A2)", creditos: 3 },
    ]
  },
  {
    nombre: "Semestre 3",
    materias: [
      { nombre: "Cátedra Interdisciplinar II", creditos: 3 },
      { nombre: "Escribir para Medios", creditos: 3 },
      { nombre: "Teorías de la Comunicación", creditos: 3 },
      { nombre: "El Mundo y sus Signos", creditos: 3 },
      { nombre: "Globalización y Sociedades Contemporáneas", creditos: 3 },
      { nombre: "Inglés III (B1)", creditos: 3 },
    ]
  },
  {
    nombre: "Semestre 4",
    materias: [
      { nombre: "Cátedra Interdisciplinar III", creditos: 3 },
      { nombre: "Crónica y Reportaje", creditos: 3 },
      { nombre: "Medios y Opinión Pública", creditos: 3 },
      { nombre: "Investigación", creditos: 3 },
      { nombre: "Comunicación para el Cambio Social", creditos: 3 },
      { nombre: "Inglés IV (B2)", creditos: 3 },
    ]
  },
  {
    nombre: "Semestre 5",
    materias: [
      { nombre: "Periodismo y Géneros Televisivos", creditos: 3 },
      { nombre: "Periodismo Investigativo", creditos: 3 },
      { nombre: "Fotografía", creditos: 3 },
      { nombre: "Producción Editorial", creditos: 3 },
      { nombre: "Formatos Radiofónicos", creditos: 3 },
      { nombre: "Electiva I (Socio-Humanística)", creditos: 3 },
    ]
  },
  {
    nombre: "Semestre 6",
    materias: [
      { nombre: "Diseño Web, Animación y Multimedia", creditos: 3 },
      { nombre: "Periodismo Radial", creditos: 3 },
      { nombre: "Narrativas Audiovisuales", creditos: 3 },
      { nombre: "Relaciones Internacionales", creditos: 3 },
      { nombre: "Tendencias en Comunicación Audiovisual", creditos: 3 },
      { nombre: "Electiva II", creditos: 3 },
    ]
  },
  {
    nombre: "Semestre 7",
    materias: [
      { nombre: "Diseño y Producción Transmedia", creditos: 3 },
      { nombre: "Comunicación Organizacional", creditos: 3 },
      { nombre: "Teoría Organizacional", creditos: 3 },
      { nombre: "Gestión de la Comunicación Estratégica", creditos: 3 },
      { nombre: "Marketing Digital", creditos: 3 },
      { nombre: "Electiva III", creditos: 3 },
    ]
  },
  {
    nombre: "Semestre 8",
    materias: [
      { nombre: "Proyecto de Grado", creditos: 3 },
      { nombre: "Práctica Profesional", creditos: 3 },
      { nombre: "Logística", creditos: 3 },
      { nombre: "Emprendimiento y Empresarismo", creditos: 3 },
      { nombre: "Innovación y Creatividad", creditos: 3 },
      { nombre: "Electiva IV", creditos: 3 },
    ]
  }
];

let totalCreditos = 0;
const contenedor = document.getElementById("semestres");
const creditosSpan = document.getElementById("creditos");

semestres.forEach(sem => {
  const semDiv = document.createElement("div");
  semDiv.classList.add("semestre");
  semDiv.innerHTML = `<h2>${sem.nombre}</h2>`;

  sem.materias.forEach(mat => {
    const matDiv = document.createElement("div");
    matDiv.classList.add("materia");
    matDiv.textContent = `${mat.nombre} (${mat.creditos} créditos)`;

    matDiv.addEventListener("click", () => {
      if (!matDiv.classList.contains("seleccionada")) {
        totalCreditos += mat.creditos;
        matDiv.classList.add("seleccionada");
      } else {
        totalCreditos -= mat.creditos;
        matDiv.classList.remove("seleccionada");
      }
      creditosSpan.textContent = totalCreditos;
    });

    semDiv.appendChild(matDiv);
  });

  contenedor.appendChild(semDiv);
});
