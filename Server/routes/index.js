const { getData , Create , getDateForUpdate , Delete , Update }  = require('../controller')
const express = require('express')
const router = express.Router();

router.get("/",getData);
router.post("/create",Create);
router.get("/gettask/:id",getDateForUpdate);
router.put("/update/:id",Update);
router.delete("/delete/:id",Delete);

module.exports = router;
