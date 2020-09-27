const database = require('./database/db')
const {subjects, weekdays, getSubject, convertHoursToMinutes} = require("./utils/format")

function pageLanding (req, res) {
    return res.render("index.html")
}

async function pageStudy(req, res) {
    const filters = req.query

    if (!filters.subject || !filters.weekday || !filters.time) {
        return res.render("study.html", { filters, subject, weekdays})
    }

    // converter hrs em min
    const timeToMinurtes = convertHoursToMinutes(filters.time)

    const query =
    `
    SELECT classes.*, proffys.*
    FROM proffys
    JOIN classes ON (classes.proffy_id = proffys.id)
    WHERE EXISTS(
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = classes.id
        AND class_schedule.weekday = ${filters.weekday}
        AND class_schedule.time_from <= ${timeToMinurtes}
        AND class_schedule.time_to > ${timeToMinurtes}
    )
    AND classes.subject = '${filters.subject}'
    `
    // caso haja erro na hora da consulta do banco de dados.
    try {
        const db = await database
        const proffys = await db.all(query)

        return res.render('study.html', { proffys, subject, weekday, filters})

    } catch (error) {
        console.log(error)
    }
}

function pageGiveClasses(req, res){
    return res.render("give-classes.html", { subjects, weekdays })
}

function saveClasses(req, res) {
    const createProffy = require('./database/createProffy')
    const dados = req.body



    return res.redirect("/study")
}

module.exports = {
    pageLanding,
    pageStudy,
    pageGiveClasses,
    saveClasses
}