import fs from "fs";
let endOfNames: number;
let names: Array<string> = [];
let values: Array<string> = [];

const getValueNames = (file: string) => {
  let name = "";
  let i = 0;
  const addName = () => {
    names.push(name);
    name = "";
  };
  for (const char of file) {
    i++;
    if (char === "\r" || char === "\n") {
      addName();
      break;
    }
    if (char != ",") {
      name += char;
    } else addName();
  }
  endOfNames = i + 1;
  return names;
};

const getValues = (file: string) => {
  if (!endOfNames) getValueNames(file);
  const test = file
    .slice(endOfNames)
    .replace(/\r?\n|\r/g, ",")
    .split(",");
  let newValue = "";
  let values: Array<string> = [];
  let inString = false;
  for (let i = 0; i < test.length; i++) {
    const element = test[i];
    if (element[0] === '"') {
      inString = true;
      newValue += element;
    } else if (element[element.length - 1] === '"') {
      inString = false;
      newValue += element;
      values.push(newValue);
      newValue = "";
    } else {
      if (inString) {
        newValue += element;
      } else values.push(element);
    }
  }
  console.log("values", values);
  return values;
};

const readFile = (path: string) => {
  const file = fs.readFileSync(path).toString();
  const names = getValueNames(file);
  const values = getValues(file);
};

export { getValueNames, readFile, getValues };
