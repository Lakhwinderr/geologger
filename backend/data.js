// Inside your /api/sites route in server.js

const features =  [
  {
    type: "Feature",
    geometry: { type: "Point", coordinates: [77.2090, 28.6139] },
    properties: { id: 1, siteName: "Delhi Ridge - Quartzite Outcrop", rockType: "Quartzite", status: "Active" }
  },
  {
    type: "Feature",
    geometry: { type: "Point", coordinates: [75.7873, 26.9124] },
    properties: { id: 2, siteName: "Aravalli Fault Zone", rockType: "Schist & Gneiss", status: "Monitoring" }
  },
  {
    type: "Feature",
    geometry: { type: "Point", coordinates: [72.8777, 19.0760] },
    properties: { id: 3, siteName: "Mumbai Coastal Shelf", rockType: "Basalt", status: "Inactive" }
  }
]


module.exports = features;