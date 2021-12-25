const fs = require("fs");

const handleData = (page, lang, website) => {
  const data = fs.readFileSync(
    "./JSON/" + website + "/" + lang + "/" + page + ".json",
    "utf8"
  );

  return data;
};
exports.handleData = handleData;

const updateJSON = (page, lang, data, website) => {
  fs.writeFile(
    "./JSON/" + website + "/" + lang + "/" + page + ".json",
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

const getPageList = (lang, website) => {
  let pages;
  let langs;
  try {
    pages = fs.readdirSync("./JSON/" + website + "/" + lang);
    langs = fs.readdirSync("./JSON/" + website);
    let temp1 = [];
    let temp2 = [];
    for (let i of pages) {
      temp1.push(i.split(".")[0]);
    }
    for (let i of langs) {
      temp2.push(i.split(".")[0]);
    }
    return { pages: temp1, langs: temp2 };
  } catch (err) {
    console.log("Could not get list", err);
  }
};

exports.getPageList = getPageList;

const getLangList = (website) => {
  let files;
  try {
    files = fs.readdirSync("./JSON/" + website);
    let temp = [];
    for (let i of files) {
      temp.push(i.split(".")[0]);
    }
    return temp;
  } catch (err) {
    console.log("Could not get list", err);
  }
};

exports.getLangList = getLangList;
