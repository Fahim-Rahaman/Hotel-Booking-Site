import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRoute from './routes/auth.js';
import userRoute from './routes/users.js';
import hotelRoute from './routes/hotels.js';
import roomRoute from './routes/rooms.js';
dotenv.config();

const app = express();

const connect = async () =>{
    try {
        await mongoose.connect(process.env.MONGO, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        });
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

const db = mongoose.connection;

db.on("dissconnected",()=>{
    console.log("MongoDB disconnected");
});

app.get('/', (req, res) => {
    res.send('Hello from the hotel app');
});

// Middleware
app.use(express.json());

app.use('/auth',authRoute,);
app.use('/rooms',roomRoute);
app.use('/users',userRoute);
app.use('/hotels',hotelRoute);

//error handling middleware
app.use((err, req, res, next) => {
    console.error(err);
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    res.status(statusCode).json({
        success: false,
        status: statusCode,
        message: message,
        stack: err.stack
    });
});

app.listen('8800', () => {
    connect();
  console.log('Server is running on port 8800');
});

