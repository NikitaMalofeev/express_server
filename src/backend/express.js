const app = require('express')();
const fs = require('fs');
const cors = require('cors');
const bodyParser = require('body-parser');

const { resolve } = require('node:path');

app.use(cors());
app.use(bodyParser.json());

app.listen(
    3001,
    () => console.log(`server is running on 3001`)
);

app.get('/api', (request, response) => {
    fs.readFile(resolve('..', 'express.json'), { encoding: 'utf8' }, (err, data) => {
        try {
            response.json(JSON.parse(data));
        } catch(e) {
            console.error(e);
        }
    });
});

app.post('/api', (request, response) => {
    fs.readFile(resolve('..', 'express.json'), { encoding: 'utf8' }, (err, data) => {
        // console.log(err, data);
        // console.log('body', request.body);
        try {
            const json = JSON.parse(data);
            json.additionalData = request.body.data;
            response.json(json);
        } catch(e) {
            console.error(e);
        }
    });
});

// if post get + post > html 






// получить информацию из инпута и отправить html