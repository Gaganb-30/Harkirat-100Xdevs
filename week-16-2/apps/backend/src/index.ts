import { Request, Response } from "express";
import {BACKEND_URL, VALUE} from "@repo/common/index";
const express = require('express');

const app = express();

const PORT = 3002;
app.get('/', (req : Request, res : Response ) => {
  res.json({message: 'Inside backend get / ' + VALUE + '/ ' + BACKEND_URL});
})

app.listen(PORT, console.log('Server started at port : ' + PORT));