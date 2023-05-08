const express = require('express');
const app = express();

const port = 3000;
const base = `${__dirname}/public`;

app.use(express.static('public'));


app.get('/', function (req, res) {
    res.sendFile(`${base}/welcome.html`);
});

app.get('/ht', (req, res) => {
    res.sendFile(`${base}/ht.html`);
});

app.get('/register-device', (req, res) => {
    res.sendFile(`${base}/register-device.html`);
});

app.get('/101', (req, res) => {
    res.sendFile(`${base}/101.html`);
});

app.get('/102', (req, res) => {
    res.sendFile(`${base}/102.html`);
});

app.get('/103', (req, res) => {
    res.sendFile(`${base}/103.html`);
});

app.get('/104', (req, res) => {
    res.sendFile(`${base}/104.html`);
});

app.get('/105', (req, res) => {
    res.sendFile(`${base}/105.html`);
});

app.get('/106', (req, res) => {
    res.sendFile(`${base}/106.html`);
});

app.get('/html', (req, res) => {
    res.sendFile(`${base}/html.html`);
});

app.get('/html1', (req, res) => {
    res.sendFile(`${base}/html1.html`);
});

app.get('/html2', (req, res) => {
    res.sendFile(`${base}/html2.html`);
});

app.get('/Phtml', (req, res) => {
    res.sendFile(`${base}/Phtml.html`);
});

app.get('/register', (req, res) => {
    res.sendFile(`${base}/register.html`);
});

app.get('/rhtml', (req, res) => {
    res.sendFile(`${base}/rhtml.html`);
});

app.get('*', (req, res) => {
    res.sendFile(`${base}/404.html`);
});

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});