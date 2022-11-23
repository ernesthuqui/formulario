const d = document;
const $formBox = d.querySelector('.form-box'), $images = d.querySelectorAll('.contenedor-imagenes a')
console.log($formBox, $images)

d.addEventListener("click", e=>{
    if(e.target.matches('.vehicle-btn img')){
        e.preventDefault()
        if(!$formBox.classList.contains('form-box-on')){
            $formBox.classList.add('form-box-on')
        } else{
            $formBox.classList.remove('form-box-on')

        }
    }
})