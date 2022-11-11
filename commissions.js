let carrito = [];

//cargar carrito desde localstorage


class commission {
  constructor(tipo, precio, id) {
      this.tipo = tipo;
      
      this.precio= precio;
      this.id=id;
  }
}
const commission1 = new commission("normStyle+SimpleBg",60,1)
const commission5 = new commission("sketch",10,5)
const commission11 = new commission("normStyle+ComplexBg",100,11)
const commission14 = new commission("Chibi",45,14)

const comisiones = [commission1,commission5,commission11,commission14]

/*storage*/
/*if(localStorage.getItem("carrito")){
  carrito = JSON.parse(localStorage.getItem("carrito"));
}  si uso esta parte del codigo, el carrito pasa de object a number*/

const addcart1 = document.querySelector('.addcart1')
addcart1.addEventListener('click', () => {
  
  localStorage.setItem('carrito', carrito.push(commission1.tipo))
  localStorage.setItem('carrito', carrito.push(commission1.precio))
}
)

const addcart2 = document.querySelector('.addcart2')
addcart2.addEventListener('click', () => {
  localStorage.setItem('carrito', carrito.push(commission11.tipo))
  localStorage.setItem('carrito', carrito.push(commission11.precio))
})

const addcart3 = document.querySelector('.addcart3')
addcart3.addEventListener('click', () => {
  localStorage.setItem('carrito', carrito.push(commission5.tipo))
  localStorage.setItem('carrito', carrito.push(commission5.precio))
})

const addcart4 = document.querySelector('.addcart4')
addcart4.addEventListener('click', () => {
  localStorage.setItem('carrito', carrito.push(commission14.tipo))
  localStorage.setItem('carrito', carrito.push(commission14.precio))
  
  
})
/*boton de mostrar carrito*/
const boton = document.getElementById('button')
boton.addEventListener('click',()=>{
  swal.fire(
    carrito.join(', '),
    
  )
})

/*JSON*/
 localStorage.setItem("carritoENJson",JSON.stringify(carrito))

/*swal*/
const addNormStyle = document.querySelector('.btn-suma1')
addNormStyle.addEventListener('click', () =>{
  
  Swal.fire({
 position: 'top-end',
 icon: 'success',
 title: 'You have added one Normal with simple Bg commission to the cart',
 showConfirmButton: false,
timer: 1500})
})
const addSNormDetstyle = document.querySelector('.btn-suma2')
addSNormDetstyle.addEventListener('click', () =>{
  
  Swal.fire({
 position: 'top-end',
 icon: 'success',
 title: 'You have added one Normal with complex Bg commission to the cart',
 showConfirmButton: false,
timer: 1500})
})
const addChibiStyle = document.querySelector('.btn-suma3')
addChibiStyle.addEventListener('click', () =>{
  
  Swal.fire({
 position: 'top-end',
 icon: 'success',
 title: 'You have added one sketch commission to the cart',
 showConfirmButton: false,
timer: 1500})
})
const addsketchStyle = document.querySelector('.btn-suma4')
addsketchStyle.addEventListener('click', () =>{
  
  Swal.fire({
 position: 'top-end',
 icon: 'success',
 title: 'You have added one chibi commission to the cart',
 showConfirmButton: false,
timer: 1500})
})

  




