const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const features = require('./data.js');

app.get('/api/sites', (req, res) => {
    res.json({
        type: "FeatureCollection",
        features: features
    });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
})

