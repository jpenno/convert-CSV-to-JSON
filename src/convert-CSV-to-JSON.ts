import fs from "fs";
const getValueNames = (file: string) => {
  let names: Array<string> = [];
  let name = "";

  for (const char of file) {
    if (char === "\r" || char === "\n") {
      names.push(name);
      name = "";
      break;
    }
    if (char != ",") {
      name += char;
    } else {
      names.push(name);
      name = "";
    }
  }
  return names;
};

const readFile = (path: string) => {
  const file = fs.readFileSync(path).toString();
  const names = getValueNames(file);
  console.log(names);
};

export { getValueNames, readFile };
