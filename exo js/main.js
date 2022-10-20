const form = document.querySelector("#frm")
form.addEventListener("submit", function(e) {
    e.preventDefault()
    const tab = document.querySelector("#table")
    const nom = createAll("td", form.nom.value, "nom" )
    const prenom = createAll("td", form.prenom.value, "prenom")
    const row = document.createElement("tr")
    const btn = createAll("td", null, "action")
    const btn_modify = createAll("btn", "modify", "modify")
    const btn_supr = createAll("btn", "remove", "remove")
    let form_list = [form.nom, form.prenom]
    
    btn.append(btn_modify)
    btn.append(btn_supr)
    row.append(nom)
    row.append(prenom)
    row.append(btn)
    tab.append(row)
    
    resetform(form_list)

    btn_supr.addEventListener("click", function() {
        erase = this.parentNode.parentNode
        erase.remove()
    })

    btn_modify.addEventListener("click", function() {
        let fname = createAll("input", null, "fname") 
        let lname = createAll("input", null, "lname")
        let btn_valid = createAll("btn", "validate", "validate")
        let td1 = createAll("td", null, "td1")
        let td2 = createAll("td", null, "td2")
        let td3 = createAll("td", null, "td3")
        let tdList = [btn, prenom, nom]

        td1.append(fname)
        td2.append(lname)
        td3.append(btn_valid)
        row.append(td1)
        row.append(td2)
        row.append(td3)
        modDisplay(tdList, "none")
        
        btn_valid.addEventListener("click", function() {
            let fname = document.querySelector("#fname")
            let lname = document.querySelector("#lname")
    
            nom.innerText = fname.value
            prenom.innerText = lname.value
    
            td1.remove()
            td2.remove()
            td3.remove()
            modDisplay(tdList, "table-cell")
            console.log(btn.style.display)
        })
    })
})

function resetform(field) {
    field.forEach(element => {
        element.value = ""
    });
}

function createTd(text = null, classe = null) {
    let td = document.createElement("td")
    if(text != null) {
        td.innerText = text
    }
    if(classe != null) {
        td.classList.add(classe)
    }
    return td
}

function createButon(text = null, classe = null) {
    let buton = document.createElement("button")
    if(text != null) {
        buton.innerText = text
    }
    if(classe != null) {
        buton.classList.add(classe)
    }
    return buton
}

function createInput(id) {
    let input = document.createElement("input")
    if(id != null) {
        input.id = id
    }
    return input
}

function createAll(atr, text = null, classe = null ) {
    let result = null
    if(atr == "td") {
       result = createTd(text, classe)
    }
    if(atr == "btn") {
        result = createButon(text, classe)
    }
    if(atr == "input") {
        result = createInput(classe)
    }
    return result
}

function modDisplay(field, mode) {
    field.forEach(element => {
        element.style.display = mode
    });
}

// console.log(1)

// let _form = document.querySelector("#frm")
// let tab = document.querySelector("#table")
// let modify = document.querySelectorAll(".modify")
// let supr = document.querySelectorAll(".supr")

// modify.forEach(function(el) {
//     console.log(el)
//     el.addEventListener("click", function(event) {
//         event.preventDefault()
//         let place = this.parentNode.parentNode.parentNode
//         console.log(this)
//     })
// })

// // supr.forEach(function(el) {
// //     console.log(el)
// //     el.addEventListener("click", function(event) {
// //         event.preventDefault()
// //         let place = this.parentNode.parentNode.parentNode
// //         console.log(place)
// //         place.remove()
// //     })
// // })


// let sup = document.createTextNode('Supprimer');
// sup.append(tdDelBtnTxt);
// sup.setAttribute('class', 'del' );

// console.log(modify)

// sup.addEventListener('click', function(e) {
//     let BtnDel = e.currentTarget,
//     trDel = BtnDel.parentNode.parentNode.parentNode;
//     trDel.remove();
// })

// _form.addEventListener("submit", function(event) {
//     event.preventDefault()

//     let lname = _form.nom.value
//     let fname = _form.prenom.value
//     let newline = document.createElement("tr")
//     let nom = document.createElement("td")
//     let prenom = document.createElement("td")
//     let buton = document.createElement("td")
//     let mod = document.createElement("input")
//     let act = document.createElement("form")
    
//     nom.innerText = lname
//     prenom.innerText = fname
//     nom.name = "nom"
//     prenom.name = "prenom"
//     mod.value = "modifier"
//     mod.type = "submit"
//     mod.id = 
//     act.append(mod)
//     act.append(sup)
//     buton.append(act)
//     newline.append(nom)
//     newline.append(prenom)
//     newline.append(buton)
//     tab.append(newline)
//     _form.nom.value = ""
//     _form.prenom.value = ""
//     })

