import fs from "fs";
const getValueNames = (file: string) => {
  let names: Array<string> = [];
  let name = "";
  const addName = () => {
    names.push(name);
    name = "";
  };
  for (const char of file) {
    if (char === "\r" || char === "\n") {
      addName();
      break;
    }
    if (char != ",") {
      name += char;
    } else addName();
  }
  return names;
};

const readFile = (path: string) => {
  const file = fs.readFileSync(path).toString();
  const names = getValueNames(file);
  console.log(names);
};

export { getValueNames, readFile };