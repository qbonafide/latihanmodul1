import express from 'express';

const app = express();
const port = 3000;

const startTime = Date.now();

function formatUptime(seconds) {
  const days = Math.floor(seconds / 86400);
  const hours = Math.floor((seconds % 86400) / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;

  return `${days}d ${hours}h ${minutes}m ${secs}s`;
}

app.get("/health", (req, res) => {
  const uptimeMs = Date.now() - startTime;
  const uptimeSec = Math.floor(uptimeMs / 1000);

  res.json({
    nama: "Christina Tan",
    nrp: "5025241060",
    status: "UP",
    timestamp: new Date().toISOString(),
    uptime: formatUptime(uptimeSec)
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
