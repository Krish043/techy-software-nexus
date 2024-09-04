import React, { useEffect, useState } from 'react';

const Photos = () => {
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        // Load the Google APIs client library
        const loadPicker = () => {
            window.gapi.load('auth', { callback: onAuthApiLoad });
            window.gapi.load('picker', { callback: onPickerApiLoad });
        };

        const onAuthApiLoad = () => {
            console.log('Auth API loaded');
        };

        const onPickerApiLoad = () => {
            console.log('Picker API loaded');
        };

        loadPicker();
    }, []);

    const handleAuthResult = (authResult) => {
        if (authResult && !authResult.error) {
            createPicker(authResult.access_token);
        }
    };

    const createPicker = (accessToken) => {
        const picker = new window.google.picker.PickerBuilder()
            .addView(window.google.picker.ViewId.PHOTOS)
            .setOAuthToken(accessToken)
            .setDeveloperKey('AIzaSyDDvvR2LuW3ESOH6_oRj9Vuuo2fpyTCXU4')
            .setCallback(pickerCallback)
            .build();
        picker.setVisible(true);
    };

    const pickerCallback = (data) => {
        if (data.action === window.google.picker.Action.PICKED) {
            const selectedPhotos = data.docs.map(doc => doc.thumbnails[0].url);
            setPhotos(selectedPhotos);
        }
    };

    const handleButtonClick = () => {
        window.gapi.auth.authorize({
            client_id: '449532633043-r9ffolhj2jn3o49cms3fpn1f8s117r2f.apps.googleusercontent.com',
            scope: ['https://www.googleapis.com/auth/photoslibrary.readonly'],
            immediate: false
        }, handleAuthResult);
    };

    return (
        <div>
            <h1>Google Photos</h1>
            <button onClick={handleButtonClick}>Add Images</button>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {photos.map((photo, index) => (
                    <img key={index} src={photo} alt={`Selected ${index}`} style={{ width: '200px', margin: '10px' }} />
                ))}
            </div>
        </div>
    );
};

export default Photos;