const express = require('express')
const router = express.Router()
const { JevelinModelController } = require("../controllers/Jevelin.controller");

router.get('/', JevelinModelController.getAll)
router.get('/:id', JevelinModelController.getById)
router.post('/', JevelinModelController.add)
router.delete('/:id', JevelinModelController.deleteById)

module.exports = router