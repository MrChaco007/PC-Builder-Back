const express = require("express")
const router = express.Router()
// const Build = require("../models/build")

// SEED
router.get("./seed", async (req, res) => {
    await Build.deleteMany({})
    const seedData = await Build.insertMany(build)
    res.json(
        seedData
    ).catch((err) => res.json({
        status: 400,
        err: err
    }));
});

// INDEX
router.get("/", (req, res) => {
    Build.find({}).then( allBuilds => {
        res.json(
            allBuilds
        );
    }).catch((err) => res.json({
        status: 400,
        err: err
    }));
});

// GET- by individual PC
router.get("/:id", (req, res) => {
    Build.findById(req.params.id)
        .then((build) =>
            res.json(
                build
            )
        ).catch((err) => res.json({
            status: 400,
            err: err,
        }));
});

// PUT- update a single PC
router.put("/updateBuild/:id", (req, res) => {
    Build.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then((build) =>
            res.json(
                build
            )
        ).catch((err) => res.json({
            status: 400,
            err: err,
        }));
});

// CREATE-  a new PC
router.post("/", async (req, res) => {
    res.json(await Build.create(req.body));
});

// DELETE- destroy a single PC
router.delete("/:id", (req, res) => {
    Build.findByIdAndDelete(req.params.id)
        .then((build) =>
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
