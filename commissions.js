
var carrito= []

/*storage*/
const addcart1 = document.querySelector('.addcart1')
addcart1.addEventListener('click', () => {
  localStorage.setItem('carrito', carrito.push('normalCom+SBG'))
})

const addcart2 = document.querySelector('.addcart2')
addcart2.addEventListener('click', () => {
  localStorage.setItem('carrito', carrito.push('normalCom+CBG'))
})

const addcart3 = document.querySelector('.addcart3')
addcart3.addEventListener('click', () => {
  localStorage.setItem('carrito', carrito.push('sketch'))
})

const addcart4 = document.querySelector('.addcart4')
addcart4.addEventListener('click', () => {
  localStorage.setItem('carrito', carrito.push('ChibiSt'))
  
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

/*condicional de verificador de carrito*/

  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-success',
      cancelButton: 'btn btn-danger'
    },
    buttonsStyling: false
  })
  

 if(carrito.length>3) {swalWithBootstrapButtons.fire({
    title: 'Your cart have a lot of items',
    text: "wanna check them?",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Yes, show me!',
    cancelButtonText: 'Nope',
    reverseButtons: true
  }).then((result) => {
    if (result.isConfirmed) {
      swalWithBootstrapButtons.fire(
        carrito.join(', '),
        
      )
    } else if (
      /* Read more about handling dismissals below */
      result.dismiss === Swal.DismissReason.cancel
    ) {
      swalWithBootstrapButtons.fire(
       'then keep going'
      )
    }
  })}
