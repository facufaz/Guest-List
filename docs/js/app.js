const personas = [
  new Persona("Juan", "Perez"),
  new Persona("Charly", "Garcia"),
  new Persona("Pepe", "Fito"),
];

function mostrarPersonas() {
  console.log("MostrarPersonas...");
  let texto = "";
  for (let persona of personas) {
    texto += `<li>${persona.nombre} ${persona.apellido}</li>`;
  }
  document.getElementById("personas").innerHTML = texto;
}

function agregarPersona() {
  const forma = document.forms["forma"];
  const nombre = forma["nombre"];
  const apellido = forma["apellido"];
  const persona = new Persona(nombre.value, apellido.value);
  console.log(persona);
  personas.push(persona);
  mostrarPersonas();
}
