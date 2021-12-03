const router = require("express").Router();
const {addCustomer,getAllCustomers,getCustomerByName,updateCustomer} = require("../controllers/customers");

router.post("/add",addCustomer);
router.get("/getAll",getAllCustomers);
router.get("/get/:name",getCustomerByName);
router.put("/update",updateCustomer);

module.exports = router;