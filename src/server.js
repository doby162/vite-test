// const express = require('express');
import express from "express";
const app = express();
const port = 5000;
app.get('/api/data', (req, res) => {
  // Handle your API logic here
  res.json({ message: 'Hello from Express!' });
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});