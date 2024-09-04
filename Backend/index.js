const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const techyModel = require('./models/techy')
const feedbackModel = require("./models/feedback")
const app = express()
app.use(express.json())
app.use(cors())
app.use((req, res, next) => {
    res.setHeader('Cross-Origin-Opener-Policy', 'same-origin');
    res.setHeader('Cross-Origin-Embedder-Policy', 'require-corp');
    next();
});

mongoose.connect("mongodb://localhost:27017/Techy");

app.post('/login', (req,res) => {
    const {email,password} = req.body;
    techyModel.findOne({email:email,})
    .then(user => {
        if(user){
            if(user.password === password){
                res.json("Success")
            }
            else{
                res.json("The password is incorrect")
            }
        }
        else{
            res.json("No record exist")
        }
    })
})
app.post('/signup', (req,res) => {
    techyModel.create(req.body)
    .then(techy => res.json(techy))   
    .catch(err=> res.json(err))
})

app.post('/submit-feedback', async (req, res) => {
    console.log('Request Body:', req.body);  // Log the request body

    const { name, email, rating, comments } = req.body;

    if ( !name || !email || !rating || !comments) {
        console.log('Missing fields:', {  name, email, rating, comments });
        return res.status(400).send('All fields are required.');
    }

    feedbackModel.create(req.body)
    .then(Feedback => res.json(Feedback))
    .catch(err=>res.json(err))
});

app.get('/feedback', async (req, res) => {
    try {
      const feedback = await feedbackModel.find().sort({ createdAt: -1 });
      res.json(feedback);
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' });
    }
  });

app.listen(3001, () => {
    console.log("server is running on port 3001");
});
