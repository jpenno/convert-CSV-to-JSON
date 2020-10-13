import { getValueNames, getValues } from "../src/convert-CSV-to-JSON";
import fs from "fs";
const testFile1 = fs
  .readFileSync(__dirname + "/data/basic test data.csv")
  .toString();

test("should show csv value names", () => {
  const results = getValueNames(testFile1);
  const answer = ["name 1", "name 2", "name 3", "name 4", "name 5"];
  expect(results).toEqual(answer);
});

test("should show csv values", () => {
  const results = getValues(testFile1);
  const answer = [
    "1",
    "1",
    "1",
    "1",
    "1",
    "2",
    "2",
    "2",
    "2",
    "2",
    "3",
    "3",
    "3",
    "3",
    "3",
  ];
  expect(results).toEqual(answer);
});
