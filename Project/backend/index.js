const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cron = require('node-cron');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');


//CRON job
// Create the cron job
cron.schedule('0 8 * * *', () => {
    console.log('Cron job is running...');
});

const app = express();
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(express.json({ limit: "10mb" }));

const PORT = process.env.PORT || 8080;
const secretKey = process.env.SECRET_KEY;

// Load environment variables
dotenv.config();

// Connect with MongoDB

//console.log(process.env.MONGODB_URL);
mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGODB_URL)
    .then(() => console.log("Connected to database"))
    .catch((err) => console.log(err));

// Create user schema
const userSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: {
        type: String,
        unique: true
    },
    password: String,
    confirmPassword: String,
    image: String
});

// Create user model
const userModel = mongoose.model("user", userSchema);

// APIs
app.get("/", (req, res) => {
    res.send("Server running");
});


//SIGNUP API

app.post("/signup", async (req, res) => {
    const { email } = req.body;

    try {
        const result = await userModel.findOne({ email: email });
        console.log(result);
        if (result) {
            res.send({ message: "Email id is already registered", alert: false });
        } else {
            const data = new userModel(req.body);
            const save = await data.save();
            res.send({ message: "Successfully signed up", alert: true });
        }
    } catch (err) {
        console.log(err);
        res.status(500).send({ message: "Internal server error", alert: false });
    }
});


//LOGIN API
app.post("/login", async (req, res) => {
    // console.log(req.body);
    const { email } = req.body;

    try {
        const result = await userModel.findOne({ email: email });
        console.log(result);
        if (result) {
            const dataSend = {
                _id: result._id,
                firstName: result.firstName,
                lastName: result.lastName,
                email: result.email,
                image: result.image,
            };
            console.log(dataSend);
            res.send({
                message: "Login is successfully",
                alert: true,
                data: dataSend,
            });
        }
    }
    catch (err) {
        console.log(err);
        res.send({
            message: "Email is not available, please sign up",
            alert: false,
        });
    }
});
app.post('/login', async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const user = await userModel.findOne({ email: email });
      if (!user) {
        return res.status(401).json({ message: 'Authentication failed' });
      }
  
      const match = await bcrypt.compare(password, user.password);
      if (!match) {
        return res.status(401).json({ message: 'Authentication failed' });
      }
  
      const token = jwt.sign({ userId: user._id }, 'your_secret_key');
      res.json({ token });
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  const authenticateToken = (req, res, next) => {
    const token = req.headers.authorization;
  
    if (!token) {
      return res.status(401).json({ message: 'Authentication failed' });
    }
  
    jwt.verify(token, 'your_secret_key', (err, user) => {
      if (err) {
        return res.status(403).json({ message: 'Invalid token' });
      }
      req.user = user;
      next();
    });
  };
  app.get('/protected-route', authenticateToken, (req, res) => {
    // The user is authenticated, you can access req.user to get the user information
    res.json({ message: 'Protected route accessed successfully' });
  });
      
//Schema for diff jobs

const schemaJobs = mongoose.Schema({
    name: String,
    category: String,
    image: String,
    avg_fee: String,
    description: String,
})

const jobModel = mongoose.model("jobs", schemaJobs)

//save job in db

app.post("/uploadJob", async (req, res) => {
    console.log(req.body)
    const data = await jobModel(req.body)
    const datasave = await data.save()
    res.send({ message: 'Upload is successful' })
})

app.get("/jobs", async (req, res) => {
    const data = await jobModel.find({})
    res.send(JSON.stringify(data))
})

//Contact
const contactSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String,
});

// Create a model based on the schema
const Contact = mongoose.model('Contact', contactSchema);

// Define a route to handle the contact form submission
app.post('/api/contact', (req, res) => {
    const { name, email, message } = req.body;

    // Create a new contact instance
    const newContact = new Contact({
        name,
        email,
        message,
    });

    // Save the contact data to the database
    newContact.save((err) => {
        if (err) {
            console.log(err);
            res.status(500).json({ error: 'An error occurred while saving the contact data' });
        } else {
            res.status(200).json({ message: 'Contact data saved successfully' });
        }
    });
});



app.listen(PORT, () => console.log("Server is running at port", PORT));