const deliveryVehicles = require("../models/deliveryVehicles");
const HttpStatus = require("http-status-codes");
const logger = require("../utils/logger");

exports.addDeliveryVehicle = (req,res)=>{
    logger.debug("inside add vehicle api");
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
    logger.debug("inside get all vehicle api");
    deliveryVehicles.find()
    .then((vehicles)=>{
        res.status(HttpStatus.OK).json({message:"Vehicles data fetched successfully.",vehicles});
    })
    .catch((err)=>{
        res.status(HttpStatus.BAD_REQUEST).json({error: err.message});  
    })
}

exports.getVehicleByRegistrationNumber = (req,res)=>{
    logger.debug("inside get vehicle by regno api");
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
    logger.debug("inside update vehicle api");
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