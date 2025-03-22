const express = require("express");
const router = express.Router();
const user = require("./../model/users");
const constant = require("./../constant/constant");

const Sequeliza = require("sequelize") ; 
const Op = Sequeliza.Op ;
// bcrypt แปลง password
const bcrypt = require ("bcryptjs") ; 

router.post("/user", async (req, res) => {
  try {
    req.body.password = bcrypt.hashSync (req.body.password, 8 ); // แปลง password one way function
    //  result = user.create(req.body)
    let insert_result = await user.create(req.body); //สร้างตัวแปร insert_result มารับค่า
    res.json({ result: insert_result,api_result: constant.OK });
  } catch (error) {
    console.log(error);
    res.json({ result: error,api_result: constant.NOK }); //shown error
  }
});

// router.post("/user", async (req, res) => {
//   user.create ( req.body)
//   res.json(req.body)
// });

//select user
router.get("/user", async (req, res) => {
  try {
    let result = await user.findAll();
    res.json({ result, api_result: constant.OK });
  } catch (error) {
    console.log(error);
    res.json({ error, api_result: constant.NOK });
  }
});

//update user
router.put("/change_password", async (req, res) => {
  try {
    req.body.password = bcrypt.hashSync (req.body.password, 8 ); // แปลง password one way function
    let result = await user.update(req.body, {
      where: { username: req.body.username },
    });
    console.log(result);
    res.json({ result, api_result: constant.OK });
  } catch (error) {
    console.log(error);
    res.json({ error, api_result: constant.NOK });
  }
});

//delete user
// router.delete("/user", async (req, res) => {
//   try {
//     let result = await user.destroy({
//       where: { username: req.body.username },
//     });
//     res.json({ result, api_result: constant.OK });
//   } catch (error) {
//     console.log(error);
//     res.json({ error, api_result: constant.NOK });
//   }
// });

//find keyword user แบบสั้น
router.get("/user/find/keyword=:keyword", async (req, res) => {
//   let username = req.params.username;
//   let empNumber = req.params.empNumber;
//   console.log(username , empNumber );

let {keyword} = req.params;
try {
    let result = await user.findAll({ 
    // where:{username:keyword}});
    where:{username:{ [Op.like]: `%${keyword}%`} }, 
});
    res.json({ result,api_result:constant.OK });

}catch (error){
    console.log(error) ; 
    res.json({ error,api_result:constant.NOK });
}
});

module.exports = router;
