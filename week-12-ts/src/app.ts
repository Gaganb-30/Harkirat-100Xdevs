import {z as g} from 'zod';
import express from 'express';

const app = express();

const userProfileSchema = g.object({
  name : g.string().min(1, {message : "Min 1 length required"}),
  email : g.string().email({message : "Invalid format"}),
  age : g.number().min(18).optional(),
});

type FinalUserSchema = g.infer<typeof userProfileSchema>;

app.put("/user", (req, res) => {
  const {success} = userProfileSchema.safeParse(req.body);
  const updateBody : FinalUserSchema = req.body;

  if(!success){
    res.status(411).json({});
    return;
  }
  res.json({
    message : 'User updated'
  });
});

app.listen
