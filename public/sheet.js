

const scriptURL ='https://script.google.com/macros/s/AKfycbzecvg06e5o5wE0pr6H77R96l1vDUA3a_gxZWTPyuB2712h5H8zjX1Gc_SeMv7akj6LBg/exec'

const form = document.forms['contact_form']

form.addEventListener('submit', e =>{
    e.preventDefault()
    fetch(scriptURL, {method: 'POST',body: new FormData(form)})
    .then(response => alert('Thankyou for your message !'))
    .then(() => { window.location.reload();})
    .catch(error => console.error('Error!',error.message))
})