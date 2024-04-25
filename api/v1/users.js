const express = require('express');
const bodyParser = require('body-parser');
const { initDB } = require('../../data/db');

const usersRouter = express.Router();
usersRouter.use(bodyParser.json());

const db = initDB();

usersRouter.get("/", (req, res) => {
    db.all("SELECT * FROM users", [], (err, rows) => {
        if (err) {
            res.status(500).json({"error": err.message});
        } else {
            res.json({users: rows})
        }
    });
});

usersRouter.get("/:id", (req, res) => {
    const { id } = req.params;
    db.all("SELECT * FROM users where id is (?)", [id], (err, rows) => {
        if (err) {
            res.status(500).json({"error": err.message});
        } else if (rows.length === 0) {
            res.json({user: {}})
        } else {
            res.json({user: rows[0]})
        }
    })
});

usersRouter.post("/", (req, res) => {
    const { user: { username, password} } = req.body;
    const insertStmt = "INSERT INTO users(username,password) VALUES (?,?)";
    db.run(insertStmt, [username, password], function(err, result) {
        if (err) {
            res.status(500).json({ "error": err.message });
        } else {
            res.json({
                id: this.lastID,
                username,
                password
            })
        }
    })
});

module.exports = usersRouter;
