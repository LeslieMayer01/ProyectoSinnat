const app = require('./app/app');
const port = 2000;

app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
}); 