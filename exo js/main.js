console.log(1)

let _form = document.querySelector("#frm")

_form.addEventListener("submit", function(event) {
    event.preventDefault()
    console.log(_form)
    let lname = _form.nom.value
    let fname = _form.prenom.value
    console.log(lname, fname)
    _form.createElement(tr)
    }
)
