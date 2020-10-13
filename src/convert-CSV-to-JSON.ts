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
  if (!endOfNames || names.length === 0) getValueNames(file);

  let value = "";
  let tmpfile = file.replace(/\r?\n|\r/g, ",");
  for (let i = endOfNames - 1; i < tmpfile.length; i++) {
    if (tmpfile[i] === ",") {
      values.push(value);
      value = "";
    } else value += tmpfile[i];
  }
  values.push(value);
  return values;
};

const readFile = (path: string) => {
  const file = fs.readFileSync(path).toString();
  const names = getValueNames(file);
  const values = getValues(file);
};

export { getValueNames, readFile, getValues };
