Eples = {
    boris_vian: ['Jean', 'Yann', 'Elise', 'Idrissa'],
    la_guarriguette: ['Samira', 'Zulika', 'Melany', 'Saan']
}

document.addEventListener('DOMContentLoaded', event => {
    Eple = document.querySelector('select[name=EPLE]')
    Eple.onchange = () => {
        eleves = Eples[Eple.value]
        createElevesHTMLList(eleves)
    }
})

createElevesHTMLList = elevesList => {
    elevesUl = document.querySelector('ul#eleves')
    elevesLi = elevesList.map(eleve => `<li>${eleve}</li>`).join('')
    elevesUl.innerHTML = elevesLi
}
