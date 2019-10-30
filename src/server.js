import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Welcome to Express starter app');
});

app.listen(port, () => console.log(`App listening on port ${port}! => http://localhost:${port}/`));
