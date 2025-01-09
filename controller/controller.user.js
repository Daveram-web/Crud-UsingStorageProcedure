import db from '../db/database.js';


export const getdata = async(req,res) =>{
try {
   const [user] = await db.promise().query('SELECT * FROM users');
   console.log("users :",user);
   const [order] = await db.promise().query('SELECT * FROM orders');
   console.log("Orders :",order);
   
   return res.status(200).json({
    "message": "Data fetched successfully",
    "users": user,
    "orders": order
    });   

} catch (error) {
    console.log("ERror messgae ",{error});
}
finally{
    console.log("data  Fetching process completed");
    
}
}

export  const InnerJoin = async(req,res)=>{
    try {
    const [inner] = await db.promise().query('SELECT u.id,u.name,u.email FROM users u INNER JOIN orders o ON o.user_id = u.id');
    console.log("Inner Joint result ",inner);
    res.status(200).json({
        message: "Inner Join result",
        inner
    })
    
    } catch (error) {
        
        console.log("Error message",error);
        
    }
    finally{
        console.log("Inner Join process completed");
    }
}

export const Leftjoint = async(req,res)=>{
    try {
        const [left] = await db.promise().query('SELECT u.id,u.name,u.email FROM users u LEFT JOIN orders o ON o.user_id = u.id')
        console.log("Left Joint result ",left);
        res.status(200).json({
            "message" : "Left Join result",
            "left " : left})
    } catch (error) {
        console.log("Error :",error);       
    }

    finally{
        console.log("Left Join process completed");
        
    }
}

export const RightJoint = async(req,res)=>{
    try {
        const [right] = await db.promise().query('SELECT u.id,u.name,u.email FROM users u RIGHT JOIN orders o ON  u.id= o.user_id')
        console.log("Right Joint");
        res.status(200).json({
            "message" : "Right Join result",
            "right" : right})
                   
    } catch (error) {
        console.log("Error",error);
    }
    finally{
        console.log("The Right Join process completed");
    }
}

export const FullOuter = async(req,res)=>{
    try {
        
    const [Full] = await db.promise().query('(SELECT u.id,u.name,u.email FROM users u LEFT JOIN orders o ON o.user_id = u.id ) UNION (SELECT u.id,u.name,u.email FROM users u RIGHT JOIN orders o ON o.user_id = u.id)  ') 
    console.log("Full OuterJoin");
    res.status(200).json({
        "message" : "Full Outer Join result",
        "Full" : Full
    }) 
    } catch (error) {
        console.log("Message", error);
        
    }
    finally{
        console.log("Full Outer joint process has been completed");
        
    }
    
}