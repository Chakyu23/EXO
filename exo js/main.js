const form = document.querySelector("#form");
form.addEventListener("submit", function(event){
	event.preventDefault();
	const nom = form.querySelector("#nom");
	const prenom = form.querySelector("#prenom");
	const tab = document.querySelector("#tablo");
	const tr = document.createElement("tr");
	const td_nom = createAll("td", nom.value, "nom");
    const td_prenom = createAll("td", prenom.value, "prenom");
    const td_actions = createAll("td", null, "action");
    const btn_update = createAll("btn", "update", "update");
    const btn_delete = createAll("btn", "remove", "remove");
    const formList = [nom, prenom]

	tr.append(td_nom);
	tr.append(td_prenom);
	tr.append(td_actions);

	btn_update.addEventListener("click", function(event){
		event.preventDefault();
		const tr = this.parentNode.parentNode;
		const td1 = tr.querySelector(".nom");
		const td2 = tr.querySelector(".prenom");
        const input_1 = createAll("input", td1.innerText, "new_nom", "text");
		const input_2 = createAll("input", td2.innerText, "new_prenom", "text");
        const validate = createAll("btn", "valider", null, "submit");
		const tdList = [td1, td2];
        const displayList = [btn_update, btn_delete];
        
        cleaner(tdList);

		td1.append(input_1);
		td2.append(input_2);

		validate.addEventListener("click", function(event){
			event.preventDefault();

            cleaner(tdList)

			td1.innerText = input_1.value
			td2.innerText = input_2.value

			validate.remove()

            modDisplay(displayList, "inherit")

		})

        modDisplay(displayList, "none")
		td_actions.append(validate);

	})

	btn_delete.addEventListener("click", function(event){
		event.preventDefault();
		this.parentNode.parentNode.remove();
	})

	td_actions.append(btn_update);
	td_actions.append(btn_delete);
	tr.append(td_actions)
	tab.append(tr);

    resetform(formList)
})

function cleaner(field) {
    field.forEach(element => {
        element.innerHTML = ""
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
    
    function createInput(base, classe, type) {
        let input = document.createElement("input")
        if(classe != null) {
            input.classList.add(classe)
        }
        if(base != null) {
            input.value = base
        }
        if(type != null) {
            input.setAttribute("type", type)
        }
        return input
    }
    
    function createAll(atr, text = null, classe = null, type = null,  ) {
        let result = null
        if(atr == "td") {
           result = createTd(text, classe)
        }
        if(atr == "btn") {
            result = createButon(text, classe)
        }
        if(atr == "input") {
            result = createInput(text, classe, type)
        }
        return result
    }

    function modDisplay(field, mode) {
            field.forEach(element => {
                element.style.display = mode
            });
        }

    function resetform(field) {
        field.forEach(element => {
            element.value = ""
        });
    }















// const form = document.querySelector("#frm")
// form.addEventListener("submit", function(e) {
//     e.preventDefault()
//     const tab = document.querySelector("#table")
//     const nom = createAll("td", form.nom.value, "nom" )
//     const prenom = createAll("td", form.prenom.value, "prenom")
//     const row = document.createElement("tr")
//     const btn = createAll("td", null, "action")
//     const btn_modify = createAll("btn", "modify", "modify")
//     const btn_supr = createAll("btn", "remove", "remove")
//     let form_list = [form.nom, form.prenom]
    
//     btn.append(btn_modify)
//     btn.append(btn_supr)
//     row.append(nom)
//     row.append(prenom)
//     row.append(btn)
//     tab.append(row)
    
//     resetform(form_list)

//     btn_supr.addEventListener("click", function() {
//         erase = this.parentNode.parentNode
//         erase.remove()
//     })

//     btn_modify.addEventListener("click", function() {
//         let fname = createAll("input", nom.innerText, "fname") 
//         let lname = createAll("input", prenom.innerText, "lname")
//         let btn_valid = createAll("btn", "validate", "validate")
//         let td1 = createAll("td", null, "td1")
//         let td2 = createAll("td", null, "td2")
//         let td3 = createAll("td", null, "td3")
//         let tdList = [btn, prenom, nom]

//         td1.append(fname)
//         td2.append(lname)
//         td3.append(btn_valid)
//         row.append(td1)
//         row.append(td2)
//         row.append(td3)
//         modDisplay(tdList, "none")
        
//         btn_valid.addEventListener("click", function() {
//             let fname = document.querySelector("#fname")
//             let lname = document.querySelector("#lname")
    
//             nom.innerText = fname.value
//             prenom.innerText = lname.value
    
//             td1.remove()
//             td2.remove()
//             td3.remove()
//             modDisplay(tdList, "table-cell")
//         })
//     })
// })

// function resetform(field) {
//     field.forEach(element => {
//         element.value = ""
//     });
// }

// function createTd(text = null, classe = null) {
//     let td = document.createElement("td")
//     if(text != null) {
//         td.innerText = text
//     }
//     if(classe != null) {
//         td.classList.add(classe)
//     }
//     return td
// }

// function createButon(text = null, classe = null) {
//     let buton = document.createElement("button")
//     if(text != null) {
//         buton.innerText = text
//     }
//     if(classe != null) {
//         buton.classList.add(classe)
//     }
//     return buton
// }

// function createInput(base, id) {
//     let input = document.createElement("input")
//     if(id != null) {
//         input.id = id
//     }
//     if(base != null) {
//         input.value = base
//     }
//     return input
// }

// function createAll(atr, text = null, classe = null ) {
//     let result = null
//     if(atr == "td") {
//        result = createTd(text, classe)
//     }
//     if(atr == "btn") {
//         result = createButon(text, classe)
//     }
//     if(atr == "input") {
//         result = createInput(text, classe)
//     }
//     return result
// }

// function modDisplay(field, mode) {
//     field.forEach(element => {
//         element.style.display = mode
//     });
// }



/*=========================================================================================================================*/



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

