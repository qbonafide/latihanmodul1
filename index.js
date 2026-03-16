import express from 'express';

const app = express();
const port = 3000;

const startTime = Date.now();

app.get("/health", (req, res) => {
  const uptimeMs = Date.now() - startTime;
  const uptimeSec = Math.floor(uptimeMs / 1000);

  res.json({
    nama: "Christina Tan",
    nrp: "5025241060",
    status: "UP",
    timestamp: new Date().toISOString(),
    uptime: `${uptimeSec} seconds`
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
