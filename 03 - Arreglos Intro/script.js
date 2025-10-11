//Areglo de alumnos en formato JSON con nombre,apellido materno, paterno y matricula
var alumnos = [{nombre: "Ana", apellidoPaterno: "Lopez", apellidoMaterno: "Gomez", matricula: "2042893"},
               {nombre: "Luis", apellidoPaterno: "Perez", apellidoMaterno: "Hernandez", matricula: "2062409"},
               {nombre: "Carlos", apellidoPaterno: "Ramirez", apellidoMaterno: "Sanchez", matricula: "1983475"},
               {nombre: "Luisa", apellidoPaterno: "Torres", apellidoMaterno: "Diaz", matricula: "1765432"},
               {nombre: "Ana", apellidoPaterno: "Martinez", apellidoMaterno: "Vargas", matricula: "2039485"}
            ];

console.log(alumnos);

/*
// Acceder a un elemento del arreglo
alumnos.push("Maria");
console.log(alumnos);

//Eliminar el ultimo elemento del arreglo
alumnos.pop();
console.log(alumnos);

//Agregar un elemento al inicio del arreglo
alumnos.unshift("Maria");
console.log(alumnos);

//Eliminar el primer elemento del arreglo
alumnos.shift();
console.log(alumnos);

//Cambiar valor de un elemento del arreglo
alumnos[1] = "Pablo";
console.log(alumnos);

//Buscar la posicion de un elemento en el arreglo
console.log(alumnos.indexOf("Luisa"));

//Si el elemento no existe devuelve -1
console.log(alumnos.indexOf("Andrea"));

//Si hay elementos repetidos devuelve la posicion del primer elemento encontrado
console.log(alumnos.find(nombre => nombre === "Ana"));

//Si hay elementos repetidos devuelve la posicion del ultimo elemento encontrado
console.log(alumnos.findIndex(nombre => nombre === "Ana"));
for (var i = 0; i < alumnos.length; i++) {
    if(alumnos[i] == "Ana"){
        console.log("Encontrado en la posicion " + i);
    }
}

*/

//Creacion de un nuevo elemento en el DOM por cada alumno en el arreglo y dejarlo para crearle un estilo en CSS
var ul = document.getElementById("listaAlumnos");
alumnos.forEach(function(alumno){
    var li = document.createElement("li");
    li.classList.add("elementosCreados");
    li.appendChild(document.createTextNode(alumno.nombre + " " + alumno.apellidoPaterno + " " + alumno.apellidoMaterno + " - " + alumno.matricula));
    ul.appendChild(li);
}
);

//Al recibir el input, filtrar la lista de alumnos y mostrar los alumnos que cumplan con el filtro
var input = document.getElementById("filtroAlumno");
input.addEventListener("input", function(){
    var filtro = input.value.toLowerCase();
    var elementos = document.querySelectorAll(".elementosCreados");
    elementos.forEach(function(elemento){
        if(elemento.textContent.toLowerCase().indexOf(filtro) > -1){
            elemento.style.display = "";
        }else{
            elemento.style.display = "none";
        }   
    });
}); 
