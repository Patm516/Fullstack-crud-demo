const express = require('express');
const router = express.Router();


const {
  getAllCharacters, createMcuCharacter, updateMcuCharacter, deleteMcuCharacter, getOneCharacter
} = require("../controllers/mcuController");


router.get("/allCharacters", getAllCharacters); 

router.get("/oneMcuCharacter/:name", getOneCharacter);

router.post("/createMcuCharacter", createMcuCharacter);

router.put("/updateMcuCharacter", updateMcuCharacter);

router.delete("/deleteMcuCharacter/:name", deleteMcuCharacter);




module.exports = router;