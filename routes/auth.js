module.exports = (router, Users) =>{
  router.post('/signup', async (req,res)=>{
    var new_user = req.body;
    new_user = new Users(new_user);
    var result = await new_user.save();
    if(result) return res.status(200).json(new_user);
    else return res.status(412).send("fail");
  })
  .post('/signin', async (req,res)=>{
    let user = await Users.findOne(req.body);
    if(!user) return res.stauts(404).json({message : "user not found"});
    await res.status(200).json(user);
  });
  return router;
};
