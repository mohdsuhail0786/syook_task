const router=require("express").Router();
const {placeOrder,getAllOrders,getOrderById,orderDelivered} = require("../controllers/orders");

router.post("/new",placeOrder);
router.get("/getAll",getAllOrders);
router.get("/get:orderId",getOrderById);
router.put("/orderDeliver",orderDelivered);

module.exports = router;