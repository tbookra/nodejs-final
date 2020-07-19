const express = require("express");
const router = express.Router();

let dbprod = [
    {it: 'bread', pr: 5.5},
    {it: 'milk', pr: 6.5},
    {it: 'honey', pr: 14.6},
];
// to show product list
router.get("/", (req, res) => {
    res.json(dbprod.map((val) => val.it));
  });

  // adding new product
  router.put("/", (req, res) => {
  let it = false;
  for (let client of dbprod) {
    if (req.body.it && req.body.it == client.it) {
      it = true;
      break;
    }
  }
  if (it) {
    res.json({ err: "product already exist" });
  } else {
    dbprod = [...dbprod, { it: req.body.it, pr: req.body.pr }];
    res.json({ msg: "product added" });
  }
});

// updating product
router.post("/", (req, res) => {
    let it;
    for (let client of dbprod) {
      if (req.body.it && req.body.it == client.it) {
          console.log(req.body);
        it = client;
        break;
      }
    }
    if (it) {
        it.it = req.body.nit;
        it.pr = req.body.pr;
      res.json({ err: "product updated" });
    } else {
      
      res.json({ msg: "product do not exists!" });
    }
  });

// delete product

router.delete("/", (req, res) => {
    dbprod = dbprod.filter((item) => item.it != req.body.it);
    res.json({ msg: "product delete" });
  });


  module.exports = router;