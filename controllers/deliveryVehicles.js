const deliveryVehicles = require("../models/deliveryVehicles");
const HttpStatus = require("http-status-codes");

exports.addDeliveryVehicle = (req,res)=>{
    const {registrationNumber,vehicleType,city} = req.body;
    deliveryVehicles.findOne({registrationNumber})
    .then((result)=>{
        if(result!=null)
            return Promise.reject(new Error("Delivery Vehicle already exists."));
        else
            return deliveryVehicles.create({registrationNumber,vehicleType,city});
    })
    .then((savedVehicle)=>{
        res.status(HttpStatus.OK).json({message:"Delivery Vehicle added successfully.",vehicle: savedVehicle});
    })
    .catch((err)=>{
        res.status(HttpStatus.BAD_REQUEST).json({error: err.message});
    })
}

exports.getAllVehicles = (req,res)=>{
    deliveryVehicles.find()
    .then((vehicles)=>{
        res.status(HttpStatus.OK).json({message:"Vehicles data fetched successfully.",vehicles});
    })
    .catch((err)=>{
        res.status(HttpStatus.BAD_REQUEST).json({error: err.message});  
    })
}

exports.getVehicleByRegistrationNumber = (req,res)=>{
    const registrationNumber = req.query;
    deliveryVehicles.findOne({registrationNumber})
    .then((vehicle)=>{
        if(vehicle==null)
            return Promise.reject(new Error("Vehicle info not found"));
        else
            res.status(HttpStatus.OK).json({message:"Vehicle data fetched successfully",vehicle});
    })
    .catch((err)=>{
        res.status(HttpStatus.BAD_REQUEST).json({error: err.message});
    })
}

exports.updateVehicle = (req,res)=>{
    const {registrationNumber,vehicleType,city} = req.body;
    deliveryVehicles.findOne({registrationNumber})
    .then((vehicle)=>{
        if(vehicle==null)
            return Promise.reject(new Error("Vehicle info not found"));
        else
            deliveryVehicles.updateOne({registrationNumber},{$set:{vehicleType:vehicleType, city:city}},{new: true});
    })
    .then((updatedVehicle)=>{
        res.status(HttpStatus.OK).json({message:"Vehicle updated successfully", updatedVehicle});
    })
    .catch((err)=>{
        res.status(HttpStatus.BAD_REQUEST).json({error: err.message});
    })
}