const fs = require("fs");

const handleData = (page, lang) => {
  const data = fs.readFileSync("./JSON/" + lang + "/" + page + ".json", "utf8");

  return data;
};
exports.handleData = handleData;

const updateJSON = (page, lang, data) => {
  fs.writeFile(
    "./JSON/" + lang + "/" + page + ".json",
    JSON.stringify(data),
    (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("done");
      }
    }
  );
};

exports.updateJSON = updateJSON;

const getPageList = (lang) => {
  let files;
  try {
    files = fs.readdirSync("./JSON/" + lang);
    let temp = [];
    for (let i of files) {
      temp.push(i.split(".")[0]);
    }
    return temp;
  } catch (err) {
    console.log("Could not get list", err);
  }
};

exports.getPageList = getPageList;
