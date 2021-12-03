const router = require("express").Router();
const {addDeliveryVehicle,getAllVehicles,getVehicleByRegistrationNumber,updateVehicle} = require("../controllers/deliveryVehicles");

router.post("/add",addDeliveryVehicle);
router.get("/getAll",getAllVehicles);
router.get("/get/:registrationNumber",getVehicleByRegistrationNumber);
router.put("/update",updateVehicle);

module.exports = router;