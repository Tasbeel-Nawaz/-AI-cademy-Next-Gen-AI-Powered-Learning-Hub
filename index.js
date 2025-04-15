const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { studentmodel, studentmessage } = require('./compuss');
const app = express();

app.use(express.json());
app.use(cors({
  origin: 'http://localhost:5174',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

mongoose.connect('mongodb://127.0.0.1:27017/Ai-Cademy', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected successfully'))
.catch(err => console.log('MongoDB connection error: ', err));



app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await studentmodel.findOne({ email });
    if (!user) {
      return res.status(401).json({ success: false, message: "User not found" });
    }
    if (user.password !== password) {
      return res.status(401).json({ success: false, message: "Incorrect password" });
    }
    res.json({ success: true, user: { name: user.name, email: user.email } });
  } catch (err) {
    console.log("Login Error", err);
    res.status(500).json({ success: false, message: "Server Error" });
  }
});
app.post('/blogpost', async (req, res) => {
  const { email } = req.body;
  try {
    const user = await studentmodel.findOne({ email });
    if (!user) {
      return res.status(401).json({ success: false, message: "User not found" });
    }
   
    res.json({ success: true, user: { name: user.name, email: user.email } });
  } catch (err) {
    console.log("Login Error", err);
    res.status(500).json({ success: false, message: "Server Error" });
  }
});
app.post("/signup", async (req, res) => {
    try {
        const student = await studentmodel.create(req.body);
        res.json(student); 
    } catch (err) {
        console.error("Error creating student: ", err); 
        res.status(500).json({ message: 'Server error', error: err }); 
    }
});
app.post("/contact", async (req, res) => {
  try {
    const message = await studentmessage.create(req.body);
    res.json({ success: true, data: message });
  } catch (err) {
    console.error("Contact Form Error: ", err);
    res.status(500).json({ message: 'Server error', error: err });
  }
});
app.listen(7000, () => {
    console.log("Server is running on port 7000"); 
});