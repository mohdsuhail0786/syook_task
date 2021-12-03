const jwt=require('jsonwebtoken');

exports.getResponseMessage=(statusCode,message)=>{
    return {
        statusCode,
        message
    }
}

exports.getErrorMessage=(statusCode,error)=>{
    return {
        statusCode,
        error
    }
}

exports.generateAccessToken=(payload,token_secret)=>{
    return jwt.sign(payload,token_secret,{expiresIn:'1h'});
}

exports.verifyAccessToken=(token,token_secret)=>{
    return new Promise((resolve,reject)=>{
        jwt.verify(token,token_secret,(err,decoded)=>{
            if(err){
                reject(err)
            }
            else{
                resolve(decoded);
            }
        })
    })
}