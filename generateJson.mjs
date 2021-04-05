import { printData } from "./data.mjs";

function printJSON(data) {
  console.log(JSON.stringify(printData, null, 2));
}

printJSON(printData);
