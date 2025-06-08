// Minimal Express backend for CloudGuard Analytics
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Basic analytics endpoint
app.post('/api/analytics', (req, res) => {
  console.log('Analytics event:', req.body);
  res.json({ success: true });
});

// Health check
app.get('/', (req, res) => {
  res.send('CloudGuard Analytics API running');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
