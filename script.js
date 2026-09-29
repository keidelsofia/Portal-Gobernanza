function cargarModulo(*ombre){

const contenido*=
document.getElementById("conteni*o");

if(nombre==="inicio"){
conte*ido.innerHTML=`
<h1*Portal de Gobernanza</h1>

<div cl*ss*"*ard">
Bienvenida Sofi 👋
<br><br*
Seleccion* una opción del menú.
</div*
`;
}

if(nombre==="nps"){
conteni*o.innerHTML=`
<h1*NPS</h1>

<div class*"card">
*esultados NPS

*br><br>

Planes de Acción

<br><br*

Evolución Histórica
</div*
`;
}

if(nombre*=="planeamiento"){
contenido.inner*TML=`
<h1>Planeamiento Estratégico*/h1>

<div class="card">
SWOT

<br*<br>

Objetivos Estratégicos

<br>*br>

Indicadores
</div>
`;
}

if(n*mbre==="gpd"){
contenido.innerHTML*`
<h1>GPD Ágil</h1>

<div class*"card">

Área
⬇️**esafío
⬇️*Objetivo
⬇️
Resultado Clave
⬇️*Inici*tiva
⬇️
Actividad

</div>
`;
}

if*nombre==="comites"){
contenido.inn*rHTML=`
<h1*Comités</h1>

<div class="card">

*omité de Stocks

<br><br>

Comité *e Compras

<br><br*

Comité de Nivel de Servicio

</d*v>
`;
}

if(nombre==="*royectos"){
contenido.innerHTML=`
*h1>Proyectos Estratégicos</h1>

<d*v class="card">

Dashboard Ejecuti*o

<br><br>

Curva S

<br><br*

Cronograma
</div>
`;
}

}

windo**onload=function(){
cargarModulo("i*icio");
}
