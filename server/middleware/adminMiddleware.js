module.exports = (req,res,next)=>{


    console.log("ADMIN MIDDLEWARE HIT");


    console.log("USER DATA:");

    console.log(req.user);



    if(!req.user){

        return res.status(401).json({

            success:false,

            message:"User not authenticated"

        });

    }




    if(req.user.role !== "admin"){


        console.log(
            "BLOCKED ROLE:",
            req.user.role
        );



        return res.status(403).json({

            success:false,

            message:"Admin access denied",

            role:req.user.role

        });


    }




    console.log("ADMIN ACCESS GRANTED");

    next();


};