const express = require("express")
const router = express.Router()
const User = require("../models/user")


// INDEX- get all users
router.get("/", (req, res) => {
    User.find({}).then( allUsers => {
        res.json(
            allUsers
        );
    }).catch((err) => res.json({
        status: 400,
        err: err
    }));
});

// GET- a single user
router.get("/:id", (req, res) => {
    User.findById(req.params.id)
        .then((user) =>
            res.json(
                user
            )
        ).catch((err) => res.json({
            status: 400,
            err: err,
        }));
});

// PUT- update a single user
router.put("/updateUser/:id", (req, res) => {
    User.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then((user) =>
            res.json(
                user
            )
        ).catch((err) => res.json({
            status: 400,
            err: err,
        }));
});

// CREATE- create a single user
router.post("/", async (req, res) => {
    res.json(await User.create(req.body));
});

// DELETE- destroy a single user
router.delete("/:id", (req, res) => {
    User.findByIdAndDelete(req.params.id)
        .then((user) =>
            res.json({
                status: 200,
                msg: "item deleted",
            })
        ).catch((err) => res.json({
            status: 400,
            err: err,
        }));
});

module.exports = router 