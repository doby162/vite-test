import express from "express";
import cors from "cors"
const app = express();
const port = 5000;

// app.use(cors)

app.get('/api/data', (req, res) => {
  // Handle your API logic here
  console.log("get trigger")
  res.set('Access-Control-Allow-Origin', '*');
  res.json({ message: 'Hello from Express!' })
});
// app.options('/api/data', (req, res) => {
//   console.log("options trigger")
//   res.json({ message: 'Hello from Express!' })
// })
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});