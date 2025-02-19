const Highscore = require("../models/prismaClient").highscore;

const getHighscore = async (req, res) => {
    try {
        const highscore = await Highscore.findMany();
        
        return res.status(200).json({ highscore })
    } catch (err) {
        console.error(err)
        return res.status(500).json({ message: "Internal server error" });
    }
}

const postSetHighscore = async (req, res) => {
    try {
        const {name, time} = req.body;

        const highscore = await Highscore.create({
            data: {
                name,
                time: Number(time)
            }
        });

        res.status(201).json({
            message: "Highscore set",
            highscore
        })
    } catch (err) {
        console.error(err);
    }
}

const deleteHighscore = async (req, res) => {
    try {
        await Highscore.deleteMany({});

        return res.status(200).json({ message: "Highscore deleted" });
    } catch (err) {
        return res.status(500).json({ message: "Internal server error" });
    }
}

module.exports = {
    getHighscore,
    postSetHighscore,
    deleteHighscore
}