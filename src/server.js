import express from "express";
const app = express();
const port = 5000;

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
  let letterCounts = countLetters(someText)
  let retString = ""
  for (const key in letterCounts) {
    retString += " " + key + ": " + letterCounts[key]
  }
  res.json({message: retString})
});

app.get('/api/findmatch/:longstr/:shortstr', (req, res) => {
  const longStr = req.params.longstr
  const shortStr = req.params.shortstr
  res.set('Access-Control-Allow-Origin', '*');
  let retString = findMatch(longStr, shortStr)
  res.json({message: retString})
});

const countLetters = (someText) => {
  let letterCounts = {}
  for (let i = 0; i < someText.length; i++) {
    if (letterCounts[someText.charAt(i)]) {
      letterCounts[someText.charAt(i)] = letterCounts[someText.charAt(i)] + 1
    } else {
      letterCounts[someText.charAt(i)] = 1
    }
  }
  return letterCounts
}

const verifySolution = (testCount, letterCountsToMatch) => {
  let match = true
  for (const key in letterCountsToMatch) {
    if ((testCount[key] || 0) < letterCountsToMatch[key]) {
      match = false
    }
  }
  return match
}

const findMatch = (longStr, shortStr) => {
  // the point is to find the shortest substring in longstring that  contains all the letters of shortstring, in any order
  // it's ok for it to contain additional letters but you want to find the shortest one possible.
  let letterCountsToMatch = countLetters(shortStr)
  let solutionLength = shortStr.length
  let solutionStart = 0
  while (solutionLength < longStr.length) {
    while (solutionStart + solutionLength < longStr.length) {
      let testSolution = longStr.slice(solutionStart, solutionStart+solutionLength)
      let testCount = countLetters(testSolution)
      if (verifySolution(testCount, letterCountsToMatch)) {
        return testSolution
      }
      solutionStart++
    }
    solutionStart = 0
    solutionLength++
  }
}

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});