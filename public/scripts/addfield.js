// Procurar o botão
document.querySelector("add-time")
// Quando clicar no botão
.addEventListener('click', cloneField)

// Executar uma ação
function cloneField() {
    // Duplicar os campos
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true) //boolean:true or false

    // Pegar os campos. Quais?
    const fields = newFieldContainer.querySelectorAll('input')
    // Para cada campo, limpar
    fields.forEach(function()) {
        // Pegar o field do momento
        console.log(fieldDoMomento) {
            // Pega o field do momento e limpa ele
        }
    }
    // Colocar na página: onde?
    document.querySelector('schedule-items').appendChild(newFieldsContainer)
}