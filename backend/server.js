const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// Paths to JSON files
const eventsFilePath = path.join(__dirname, 'events.json');
const specialsFilePath = path.join(__dirname, 'specials.json');
const suggestionsFilePath = path.join(__dirname, 'suggestions.json');

// Get events
app.get('/api/events', (req, res) => {
  fs.readFile(eventsFilePath, (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to read events data' });
    }
    const events = JSON.parse(data);
    res.json(events);
  });
});

// Save events
app.post('/api/events', (req, res) => {
  const events = req.body;
  fs.writeFile(eventsFilePath, JSON.stringify(events, null, 2), (err) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to save events data' });
    }
    res.json({ message: 'Events data saved successfully' });
  });
});

// Get specials
app.get('/api/specials', (req, res) => {
  fs.readFile(specialsFilePath, (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to read specials data' });
    }
    const specials = JSON.parse(data);
    res.json(specials);
  });
});

// Save specials
app.post('/api/specials', (req, res) => {
  const specials = req.body;
  fs.writeFile(specialsFilePath, JSON.stringify(specials, null, 2), (err) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to save specials data' });
    }
    res.json({ message: 'Specials data saved successfully' });
  });
});

// Get suggestions
app.get('/api/suggestions', (req, res) => {
  fs.readFile(suggestionsFilePath, (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to read suggestions data' });
    }
    const suggestions = JSON.parse(data);
    res.json(suggestions);
  });
});

// Save suggestions
app.post('/api/suggestions', (req, res) => {
  const suggestions = req.body;
  fs.writeFile(suggestionsFilePath, JSON.stringify(suggestions, null, 2), (err) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to save suggestions data' });
    }
    res.json({ message: 'Suggestions data saved successfully' });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
