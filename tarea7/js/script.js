var lista = [];
const nombres = document.getElementById("nombres");
const escuela = document.getElementById("escuela");
const ciclo = document.getElementById("ciclo");
const correo = document.getElementById("correo");
const respuesta = document.getElementById("resp");
class Alumno{
    constructor(nombres, escuela, ciclo, correo){
        this.nombres = nombres;
        this.escuela = escuela;
        this.ciclo = ciclo;
        this.correo = correo;
    }
}

function add(){
    let alumn = new Alumno(nombres.value, escuela.value, ciclo.value, correo.value);
    lista.push(alumn);
    nombres.value = "";
    escuela.value = 0;
    ciclo.value = 0;
    correo.value = "";
    nombres.focus();
    
    
    

}
function listar(){   
    document.write(
      "<head>"
      +"<link rel=stylesheet href=css/estilos.css>"
      +"</head>"
    )
    document.write(
    "<table >"
    +"<tr  >"
    +"<td >"+"<h1>Nombre    </h1>"+"</td>"
    +"<td>"+"<h1>Escuela    </h1>"+"</td>>"
    +"<td>"+"<h1>Ciclo      </h1>"+"</td>"
    +"<td>"+"<h1>Correo      </h1>"+"</td>"
    +"</tr>"
   
    )
    
    for(var i=0;i<lista.length;i++){
    document.write(
        
        +"<tr>"
        +"<td>"+lista[i].nombres+"</td>"
        +"<td>"+lista[i].escuela+"</td>>"
        +"<td>"+lista[i].ciclo+"</td>"
        +"<td>"+lista[i].correo+"</td>"
        +"</tr>" 
        
    )
    
    
    document.write(+"</table>")
    
}
    
}

