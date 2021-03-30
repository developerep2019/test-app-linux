const express = require('express');
const app = express();

//Routers
const indexRouter = require('./routes/index.route');
const apiRouter = require('./routes/api.route');

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(express.static('public'));
app.use(indexRouter);
app.use('/api', apiRouter);

const port = process.env.PORT || 3000;

console.log(process.env.NODE_ENV);

app.listen(port, console.log(`Listening on port ${port}`));