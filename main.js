const nombre=document.getElementById('nombre');
const apellido=document.getElementById('apellido')
const edad=document.getElementById('edad')
let tabla=document.getElementById('tabla')
const mostrar=document.getElementById('mostrar')
const boton=document.getElementById('save')



boton.addEventListener('click', () =>{
    const fila=document.createElement('tr')
    const texto=document.createElement('td')
    const text1=document.createElement('td')
    const text2=document.createElement('td')



    fila.appendChild(texto)
    fila.appendChild(text1)
    fila.appendChild(text2)

    tabla.appendChild(fila)



    texto.innerText=nombre.value
    text1.innerText=apellido.value
    text2.innerText=edad.value

    if('click'){
        nombre.value=''
        apellido.value=''
        edad.value=''
    }

})

