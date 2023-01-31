import express from 'express';
import bodyParser from "body-parser";
import mongoose from "mongoose";
import routes from './routes/steps.js';

const app = express();

const PORT = 5000;

mongoose.connect("", { 
    useNewUrlParser: true,
    useUnifiedTopology: true 
})
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));


app.use(bodyParser.json());

app.use('/steps',routes);

app.get('/',(req,res) => {
    res.send("<h1 style='text-align:center'>Hi, we are on Home Page 💕</h1>");
});


app.listen(PORT, () => console.log("Server is running on port : http://localhost:"+PORT));