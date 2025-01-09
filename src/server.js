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
app.get('/api/count/:text', (req, res) => {
  // Handle your API logic here
  const someText = req.params.text
  res.set('Access-Control-Allow-Origin', '*');
  let letterCounts = {}
  for (let i = 0; i < someText.length; i++) {
    if (letterCounts[someText.charAt(i)]) {
      letterCounts[someText.charAt(i)] = letterCounts[someText.charAt(i)] + 1
    } else {
      letterCounts[someText.charAt(i)] = 1
    }
  }
  let retString = ""
  for (const key in letterCounts) {
    retString += " " + key + ": " + letterCounts[key]
  }
  res.json({message: retString})

});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});