const express = require("express");
const app = express();

app.use(express.json());

const oddnum = [];
const evennum = [0];
const primenum = [];
const fibonum = [0, 1];

var i = 0;

app.get("/numbers/fibonum/:n", (req, res) => {
  const n = req.params.n;

  for (i = 2; i <= n; i++) {
    fibonum[i] = fibonum[i - 1] + fibonum[i - 2];
  }
  res.json(fibonum);
});


app.get("/numbers/evennum/:n", (req, res) => {
  const n = req.params.n;
  //even
  for (i = 1; i <= n; i++) {
    if (i % 2 == 0) {
      evennum.push(i);
    }
  }
  res.send(evennum);
});

app.get("/numbers/oddnum/:n", (req, res) => {
  const n = req.params.n;
  //odd
  for (i = 1; i < n; i++) {
    if (i % 2 != 0) {
      oddnum.push(i);
    }
  }
  res.send(oddnum);
});

app.listen(3000);