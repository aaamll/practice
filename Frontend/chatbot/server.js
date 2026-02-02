import { createApp } from './src/app.js';

const port = 4000;

createApp().then(app => {
    app.listen(port, () =>
        console.log(`Server running at http://localhost:${port}`)
    );
}).catch(err => {
    console.error('Failed to start app:', err);
});
