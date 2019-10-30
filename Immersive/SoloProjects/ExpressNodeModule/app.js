const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(`
  <html>
   <head>
     <title>Pappies and Kittens website</title>
   </head>
   <body>
     <h1>Pappies and Kittens</h1>
   </body>
  </html>
`);

  app.get('/puppies', (req, res) => {
    res.send(
      '<h1>Puppies!!!</h1><img src="https://samijs.com/wp-content/uploads/2011/02/samoyed-pappies-19.jpg" alt="puppies">'
    );
  });

  app.get('/kittens', (req, res) => {
    res.send(
      '<h1>Kittens!!!</h1><img src="https://cdn-image.travelandleisure.com/sites/default/files/1546878508/four-gray-kittens-PANTSKITTENS0119.jpg" alt="kittens">'
    );
  });
});

app.listen(1337, () => {
  console.log('Listening on port 1337');
});
