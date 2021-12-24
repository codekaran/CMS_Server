var express = require("express");
var router = express.Router();

const { handleData } = require("../modules/handleData");
const { updateJSON } = require("../modules/handleData");
const { getPageList } = require("../modules/handleData");

/* GET home page. */
router.get("/getData", function (req, res, next) {
  console.log(req.query.page);
  console.log(req.query.lang);
  try {
    let out = handleData(req.query.page, req.query.lang, req.query.website);
    // console.log(out);padding: 50x;
    res.status(200).json({ data: out });
  } catch (err) {
    console.log("Error in getting data", err);
  }
});

router.post("/updateData", function (req, res, next) {
  updateJSON(req.query.page, req.query.lang, req.body.data, req.query.website);
  res.status(200).json("Data updated");
});

router.get("/getPageList", async function (req, res, next) {
  let list = await getPageList(
    req.query.lang,
    req.query.website || "webfixxers"
  );
  console.log(list);
  res.status(200).json({ data: list });
});

module.exports = router;
