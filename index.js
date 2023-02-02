const fs = require("fs");

const zipCodeData = JSON.parse(
  fs.readFileSync("georef-germany-postleitzahl.json", "utf-8")
);

const newData = zipCodeData.map((data) => ({
  postalCode: data.fields.plz_code,
  postalName: data.fields.plz_name,
}));

fs.writeFileSync("newFile.json", JSON.stringify(newData));
ewee;
eweeew;
eweeew;
