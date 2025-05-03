import express from 'express';
import mongoose from 'mongoose';
const app = express()

app.listen(3000, () => {
    console.log('server is running on port 3000')
});

app.get('/', (req, res) => {
    res.send("Hello from node api")
});


mongoose.connect("mongodb+srv://muchemiedwin68:Dev@2025@crud-backend.p7nii.mongodb.net/Node-API?retryWrites=true&w=majority&appName=crud-backend")
