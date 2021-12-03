const customers = require("../models/customers");
const HttpStatus = require("http-status-codes");

export const addCustomer = (req,res)=>{
    const {name,city} = req.body;
    customers.findOne({name})
    .then((cust)=>{
        if(cust!=null)
            return Promise.reject(new Error("customer already exists"));
        else
            return customers.create({name,city});
    })
    .then((savedCust)=>{
        res.status(HttpStatus.OK).json({message:"customer saved successfully", savedCust});
    })
    .catch((err)=>{
        res.status(HttpStatus.BAD_REQUEST).json({error: err.message});
    })
}

export const getAllCustomers = (req,res)=>{
    customers.find()
    .then((data)=>{
        res.status(HttpStatus.OK).json({message: "customers data fetched successfully", customersList:data});
    })
    .catch((err)=>{
        res.status(HttpStatus.BAD_REQUEST).json({error: err.message});
    })
}

export const getCustomerByName = (req,res)=>{
    const {name} = req.query;
    customers.findOne({name})
    .then((result)=>{
        if(result==null)
            return Promise.reject(new Error("Customer not exists."));
        else
            res.status(HttpStatus.OK).json({message: "Customer data fetched successfully", customer:result})
    })
    .catch((err)=>{
        res.status(HttpStatus.BAD_REQUEST).json({error:err.message});
    })
}

export const updateCustomer = (req,res)=>{
    const {name,city} = req.body;
    customers.findOne({name})
    .then((result)=>{
        if(result==null)
            return Promise.reject(new Error("Customer not exists."));
        else
            customers.updateOne({name},{$set:{city:city}},{new:true});
    })
    .then((updatedCustomer)=>{
        res.status(HttpStatus.OK).json({message:"Customer updated successfully", updatedCustomer: updatedCustomer});
    })
    .catch((err)=>{
        res.status(HttpStatus.BAD_REQUEST).json({error:err.message});
    })
}