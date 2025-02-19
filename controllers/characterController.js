const checkPositionIsClose = require("../utils/checkPositionIsClose");

const Character = require("../models/prismaClient").character;

const getAllCharacters = async (req, res) => {
    try {
        const characters = await Character.findMany();

        const parsedCharacters = characters.map(char => {
            const match = char.coord.match(/\(([^,]+),([^)]+)\)/);
            const x = parseFloat(match[1]);
            const y = parseFloat(match[2]);

            return {
                ...char,
                x,
                y
            }
        });

        res.status(200).json({ characters: parsedCharacters });
    } catch (err) {
        return res.status(500).json({ message: "Internal server error" });
    }
}

const getCharacter = async (req, res) => {
    try {
        const id = Number(req.params.id);
        
        const character = await Character.findUnique({
            where: {
                id
            }
        });

        if (!character) {
            return res.status(404).json({ message: "Character not found" })
        }

        const match = character.coord.match(/\(([^,]+),([^)]+)\)/);
        const x = parseFloat(match[1]);
        const y = parseFloat(match[2]);

        return res.status(200).json({
            ...character,
            x,
            y
        });
    } catch (err) {
        console.error(err)
        return res.status(500).json({ message: "Internal server error" });
    }
}

const getCheckCharacterPosition = async (req, res) => {
    try {
        const id = Number(req.params.id);
        const x = Number(req.query.x);
        const y = Number(req.query.y);

        const character = await Character.findUnique({
            where: {
                id
            }
        });

        const match = character.coord.match(/\(([^,]+),([^)]+)\)/);
        const character_x = parseFloat(match[1]);
        const character_y = parseFloat(match[2]);

        if (checkPositionIsClose(character_x, character_y, x, y)) {
            return res.status(200).json({
                found: true,
                message: `You found ${character.name}!`
            });
        } else {
            return res.status(200).json({
                found: false,
                message: "Try again"
            });
        }
    } catch (err) {
        return res.status(500).json({ message: "Internal server error" });
    }
}

module.exports = {
    getAllCharacters,
    getCharacter,
    getCheckCharacterPosition
}