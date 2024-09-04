// // Backend/routes/googlePhotos.js
// const express = require('express');
// const axios = require('axios');
// const router = express.Router();

// const API_KEY = 'AIzaSyDDvvR2LuW3ESOH6_oRj9Vuuo2fpyTCXU4';

// router.get('/photos', async (req, res) => {
//     try {
//         const response = await axios.get('https://photoslibrary.googleapis.com/v1/mediaItems', {
//             headers: {
//                 'Authorization': `Bearer ${API_KEY}`
//             }
//         });
//         res.json(response.data);
//     } catch (error) {
//         res.status(500).send('Error fetching photos');
//     }
// });

// module.exports = router;

const express = require('express');
const axios = require('axios');
const router = express.Router();

router.get('/photos', async (req, res) => {
    if (!req.isAuthenticated() || !req.user.token) {
        return res.status(401).send('User not authenticated');
    }

    const accessToken = req.user.token;

    try {
        const response = await axios.get('https://photoslibrary.googleapis.com/v1/mediaItems', {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        });
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching photos', error);
        res.status(500).send('Error fetching photos');
    }
});

module.exports = router;
