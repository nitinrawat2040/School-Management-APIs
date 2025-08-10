const pool = require('../db');
const { haversineDistance } = require('../utils/distance');

function isValidLatLng(lat, lon) {
  if (typeof lat !== 'number' || typeof lon !== 'number') return false;
  if (Number.isNaN(lat) || Number.isNaN(lon)) return false;
  if (lat < -90 || lat > 90) return false;
  if (lon < -180 || lon > 180) return false;
  return true;
}

exports.addSchool = async (req, res) => {
  try {
    const { name, address, latitude, longitude } = req.body;

    // Basic validation
    if (!name || !address || latitude === undefined || longitude === undefined) {
      return res.status(400).json({ error: 'name, address, latitude and longitude are required' });
    }

    const lat = Number(latitude);
    const lon = Number(longitude);

    if (!isValidLatLng(lat, lon)) {
      return res.status(400).json({ error: 'latitude or longitude are invalid' });
    }

    const sql = 'INSERT INTO schools (name, address, latitude, longitude) VALUES (?, ?, ?, ?)';
    const [result] = await pool.execute(sql, [name, address, lat, lon]);

    const insertedId = result.insertId;
    const [rows] = await pool.execute('SELECT * FROM schools WHERE id = ?', [insertedId]);

    res.status(201).json({ message: 'School added', school: rows[0] });
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.listSchools = async (req, res) => {
  try {
    const { lat, lon } = req.query;
    if (lat === undefined || lon === undefined) {
      return res.status(400).json({ error: 'Query parameters lat and lon are required. Example: /listSchools?lat=28.7&lon=77.1' });
    }

    const userLat = Number(lat);
    const userLon = Number(lon);
    if (!isValidLatLng(userLat, userLon)) {
      return res.status(400).json({ error: 'lat or lon invalid' });
    }

    const [schools] = await pool.execute('SELECT * FROM schools');

    // compute distance for each
    const enriched = schools.map(s => {
      const distanceKm = haversineDistance(userLat, userLon, Number(s.latitude), Number(s.longitude));
      return { ...s, distance_km: Number(distanceKm.toFixed(3)) };
    });

    // sort by distance
    enriched.sort((a, b) => a.distance_km - b.distance_km);

    res.json({ count: enriched.length, schools: enriched });
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
};