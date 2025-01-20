import express from "express";
import User from "../models/usermodel.js";

const router = express.Router();

router.post("/api/post", async (req, res) => {
  try {
    const { name, email, age ,description} = req.body; // destructuring  name ,email ,age will get from frontend
    const newUser = new User({
      name: name,
      email: email,
      age: age,
      description:description,

    });
    const useradded = await newUser.save();
    res.status(200).json(useradded);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});
//read data
router.get("/alluser", async (req, res) => {
  try {
    const user = req.body;
    const data = await User.find();
    res.status(200).send(data);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

//  single user
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const singleuser = await User.findById({ _id: id });
    res.status(200).send(singleuser);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});
// patch put
router.patch("/update/:id", async (req, res) => {
  try {
    const {name,email,age} =req.body;
    const { id } = req.params;
    const updateUser = await User.findByIdAndUpdate(id, req.body,{new:true});
    res.status(200).send(updateUser);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});
// delete
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const delUser = await User.findByIdAndDelete({ _id: id });
    res.status(200).send(delUser);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

export default router;
