const items = require("../models/items");
const HttpStatus = require("http-status-codes");

export const addItem = (req,res)=>{
    const {name,price} = req.body;
    items.findOne({name})
    .then((result)=>{
        if(result!=null)
            return Promise.reject(new Error("Item already exists."));
        else
            return items.create({name,price});
    })
    .then((savedItem)=>{
        res.status(HttpStatus.OK).json({message:"Item saved successfully",item:savedItem});
    })
    .catch((err)=>{
        res.status(HttpStatus.BAD_REQUEST).json({error:err.message});
    })
}

export const getAllItems = (req,res)=>{
    items.find()
    .then((result)=>{
        res.status(HttpStatus.OK).json(result);
    })
    .catch((err)=>{
        res.status(HttpStatus.BAD_REQUEST).json({error:err.message});
    })
}

export const getItemByName = (req,res)=>{
    const {name} = req.query;
    items.findOne({name})
    .then((result)=>{
        if(result==null)
            return Promise.reject(new Error("Item not exists."));
        else
            res.status(HttpStatus.OK).json({message: "Item data fetched successfully", item:result})
    })
    .catch((err)=>{
        res.status(HttpStatus.BAD_REQUEST).json({error:err.message});
    })
}

export const updateItem = (req,res)=>{
    const {name,price} = req.body;
    items.findOne({name})
    .then((result)=>{
        if(result==null)
            return Promise.reject(new Error("Item not exists."));
        else
            return items.updateOne({name},{$set:{price:price}},{new:true});
    })
    .then((updatedItem)=>{
        res.status(HttpStatus.OK).json({message: "Item data updated successfully", newItem:updatedItem});
    })
    .catch((err)=>{
        res.status(HttpStatus.BAD_REQUEST).json({error:err.message});
    })
}