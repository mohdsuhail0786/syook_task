const mongoose = require("mongoose");
const { boolean } = require("webidl-conversions");

const orderSchema = new mongoose.Schema({
    orderNumber : {type: Number, default: 0001},
    itemId: {type: mongoose.Types.ObjectId, ref: 'items', required: true},
    price: {type: Number, required: true},
    customerId: {type: mongoose.Types.ObjectId, ref: 'customers', required: true},
    deliveryVehicleId: {type: mongoose.Types.ObjectId, ref: 'deliveryVehicles', required: true},
    isDelivered: {type: Boolean, default: true}
})

var orders = mongoose.model("orders",orderSchema);

module.exports = orders;