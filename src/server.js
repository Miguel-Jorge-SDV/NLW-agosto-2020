//servidor
const express = require('express')
const server = express()
const {
    pageLanding,
    pageStudy,
    pageGiveClasses,
    saveClasses
} = require('./pages')

//configurar nunjuncks (template engine)
const nunjuncks = require('nunjucks')
nunjuncks.configure('src/views', {
    express: server,
    noCache: true,
})

//inicio e configuração do servidor
server
// receber os dados do req.body
.use(express.urlencoded ({ extended: true }))
// configurar arquivos estáticos (css, scripts, imagens)
.use(express.static("public"))
// rotas da aplicação e funcionalidades
.get("/", pageLanding)
.get("/study", pageStudy) 
.get("/give-classes", pageGiveClasses)
.post("/save-class", saveClasses)
//start do servisor
.listen(5500)