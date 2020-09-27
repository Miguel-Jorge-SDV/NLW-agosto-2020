const database = require('./db')
const createProffy = require('./createProffy')

database.then(async(db) => {
    //inserir dados

    proffyValue = {
        name: 'Coach Quântico',
        avatar: 'https://www.bing.com/images/search?view=detailV2&ccid=PlpsmOJb&id=141F606E5CC2D1D1455ED98F0AF7F06F069A2D06&thid=OIP.PlpsmOJb7Ela17k9bgGTegHaEK&mediaurl=https%3a%2f%2fi.ytimg.com%2fvi%2f0QbwfDZMUGc%2fmaxresdefault.jpg&exph=720&expw=1280&q=universo+com+silueta+humana&simid=608030724759160656&ck=9F8B120D03F8BF157A98D7AF5FB28E2D&selectedIndex=55&FORM=IRPRST',
        whatsapp: '4002-8922',
        bio: 'irei curar todos os seus problemas com bla bla bla quantico mesmo não tendo formação na area',
    }

    classValue = {
        subject: 'Física',
        cost: '200',
        // o proffy id vira pelo banco de dados
    }

    classScheduleValues = [
        //class_id vira pelo banco de dados, apos cadastrarmos a class
        {
            weekday: 5,
            time_from: 291,
            time_to: 9568
        },
        {
            weekday: 1,
            time_from: 304,
            time_to: 1568
        }
    ]

    // await createProffy (db, {proffyValue, classValue, classScheduleValues})

    //consultar os dados inseridos

    // todos os proffys
    const selectedProffys = await db.all("SELECT * FROM proffys")
    //console.log(selectedProffys)                                       // node src/database/test.js

    // consultar as classes de um determinado profesor
    // e trazes junto os dados do professor
    const selectClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1
    `)
    console.log(selectClassesAndProffys)

    // o horario que a pessoa trabalha, por exemplo, é das 8h - 18h
    // o horario do time_from (8) precisa ser menor ou igual ao horario solicitado
    // o time_to precisa ser acima
    const selectClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = "1"
        AND class_schedule.weekday = "5"
        AND class_schedule.time_from <= "520"
        AND class_schedule.time_to > "520"
    `)

    // console.log(selectClassesSchedules)

})