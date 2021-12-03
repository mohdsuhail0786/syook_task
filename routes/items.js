const router = require("express").Router();
const {addItem,getAllItems,getItemByName,updateItem} = require("../controllers/items");

router.post("/add",addItem);
router.get("/getAll",getAllItems);
router.get("/get/:name",getItemByName);
router.put("/update",updateItem);

module.exports = router;