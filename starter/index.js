const fs = require("fs");

const textIn = fs.readFileSync("./txt/input.txt", "utf-8");
console.log(textIn);

const intro = "My name is bibesh dhital";
fs.writeFileSync("./txt/output.txt", intro);
console.log("file created");
