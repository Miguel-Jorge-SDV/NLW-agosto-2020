//dados
const proffys = [
    { name: "Diego Fernandes",
      avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",  
      whatsapp: "4002-8922",   
      bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",   
      subject: "Química",
      cost: "20",
      weekday: "[0]",  
      time_from: "[924]",   
      time_to: "[9482]"
    },

    { name: "Diego Fernandes",
    avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",  
    whatsapp: "4002-8922",   
    bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",   
    subject: "Química",
    cost: "20",
    weekday: "[0]",  
    time_from: "[924]",   
    time_to: "[9482]"
    }
]

const subjects = [
    "Artes", 
    "Biologia", 
    "Ciências", 
    "Educação Física", 
    "Física", 
    "Geografia", 
    "História", 
    "Matemática", 
    "Português", 
    "Química", 
]

const weekdays = [
    "Domingo",
    "Segunda",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
]

//servidor
const express = require('express')
const server = express()

//configurar nunjuncks (template engine)
const nunjuncks = require('nunjucks')
nunjuncks.configure('src/views', {
    express: server,
    noCache: true,
})

//inicio e configuração do servidor
server
// configurar arquivos estáticos (css, scripts, imagens)
.use(express.static("public"))

// rotas da aplicação e funcionalidades
function getSubject(subjectNumber) {
    const position = +subjectNumber - 1
    return subjects[position]
}

get("/pageLanding", (req, res) => {
    return res.render("index.html")
})

.get("/study", (req, res) =>{
    return res.render("views/study.html", { proffys, filters, subject })
    console.log(req.query)
    const filters
})

.get("/give-classes", (req, res) =>{
    const dados = req.query

    //  se tiver dados
    const isNotEmpity = Object.keys(dados).length > 0
    if (isNotEmpity) {

        dados.subject = getSubject()

        // adicionar dados à lista de proffys
        proffys.push(dados)

        return res.redirect("/study")
    }

    // se não, mostrar a pagina
    return res.render("give-classes.html", { subjects, weekdays })
})

//start do servisor
.listen(5500)