const app = require('./app');

const port = 8000;

app.listen(port, '165.22.109.71', () => {
    console.log(`App running on port ${port}...`);
});