import express from 'express';

const app = express();
const port = 3000;

app.get("/health", (req, res) => {
  res.json({
    nama: "Tina",
    nrp: "5025241060",
    status: "UP",
    timestamp: new Date().toISOString()
  });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});