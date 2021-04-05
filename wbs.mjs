import { Activity, ActivityList } from "./cpm.mjs";

export const table = new ActivityList();

const data = [
  /* Iteracion 0 */
  { id: "1", duration: 26 },
  { id: "2", predecessors: ["3", "5"], duration: 8 },
  { id: "3", predecessors: ["1"], duration: 10 },
  { id: "4", predecessors: ["1"], duration: 16 },
  { id: "5", predecessors: ["4"], duration: 16 },
  { id: "6", predecessors: ["5"], duration: 8 },
  { id: "7", predecessors: ["6"], duration: 10 },
  { id: "8", predecessors: ["9", "10"], duration: 9 },
  { id: "9", predecessors: ["2", "6"], duration: 9 },
  { id: "10", predecessors: ["5"], duration: 8 },
  /* Iteracion 1 */
  { id: "11", predecessors: ["7", "8"], duration: 3 },
  { id: "12", predecessors: ["8"], duration: 3 },
  { id: "13", predecessors: ["11"], duration: 2 },
  { id: "14", predecessors: ["13"], duration: 16 },
  { id: "15", predecessors: ["14"], duration: 8 },
  { id: "16", predecessors: ["13"], duration: 16 },
  { id: "17", predecessors: ["16"], duration: 16 },
  { id: "18", predecessors: ["15", "17"], duration: 8 },
  { id: "19", predecessors: ["18"], duration: 8 },
  /* Iteracion 2 */
  { id: "20", predecessors: ["19"], duration: 3 },
  { id: "21", predecessors: ["19"], duration: 3 },
  { id: "22", predecessors: ["20"], duration: 2 },
  { id: "23", predecessors: ["22"], duration: 16 },
  { id: "24", predecessors: ["22"], duration: 16 },
  { id: "25", predecessors: ["22"], duration: 16 },
  { id: "26", predecessors: ["22"], duration: 16 },
  { id: "27", predecessors: ["23", "24", "25", "26"], duration: 8 },
  /* Iteracion 3 */
  { id: "128", predecessors: ["27"], duration: 3 },
  { id: "129", predecessors: ["27"], duration: 3 },
  { id: "130", predecessors: ["128"], duration: 2 },
  { id: "131", predecessors: ["130"], duration: 16 },
  { id: "132", predecessors: ["130"], duration: 16 },
  { id: "133", predecessors: ["130"], duration: 16 },
  { id: "134", predecessors: ["130"], duration: 16 },
  { id: "135", predecessors: ["131", "132", "133", "134"], duration: 8 },
  /* Iteracion 4 */
  { id: "28", predecessors: ["135"], duration: 2 },
  { id: "29", predecessors: ["135"], duration: 2 },
  { id: "30", predecessors: ["28"], duration: 2 },
  { id: "31", predecessors: ["30"], duration: 16 },
  { id: "32", predecessors: ["30"], duration: 16 },
  { id: "33", predecessors: ["30"], duration: 16 },
  { id: "34", predecessors: ["30"], duration: 16 },
  { id: "35", predecessors: ["31", "32", "33", "34"], duration: 10 },
  /* Iteracion 5 */
  { id: "36", predecessors: ["35"], duration: 3 },
  { id: "37", predecessors: ["35"], duration: 3 },
  { id: "38", predecessors: ["36"], duration: 3 },
  { id: "39", predecessors: ["38"], duration: 16 },
  { id: "40", predecessors: ["38"], duration: 16 },
  { id: "41", predecessors: ["38"], duration: 16 },
  { id: "42", predecessors: ["38"], duration: 16 },
  { id: "43", predecessors: ["39", "40", "41", "42"], duration: 10 },
  /* Iteracion 6 */
  { id: "44", predecessors: ["43"], duration: 3 },
  { id: "45", predecessors: ["43"], duration: 3 },
  { id: "46", predecessors: ["44"], duration: 3 },
  { id: "47", predecessors: ["46"], duration: 16 },
  { id: "48", predecessors: ["46"], duration: 16 },
  { id: "49", predecessors: ["46"], duration: 16 },
  { id: "50", predecessors: ["46"], duration: 16 },
  { id: "51", predecessors: ["47", "48", "49", "50"], duration: 10 },
  /* Iteracion 7 */
  { id: "52", predecessors: ["51"], duration: 3 },
  { id: "53", predecessors: ["51"], duration: 3 },
  { id: "54", predecessors: ["52"], duration: 2 },
  { id: "55", predecessors: ["54"], duration: 16 },
  { id: "56", predecessors: ["54"], duration: 16 },
  { id: "57", predecessors: ["54"], duration: 16 },
  { id: "58", predecessors: ["54"], duration: 16 },
  { id: "59", predecessors: ["55", "56", "57", "58"], duration: 8 },
  /* Iteracion 8 */
  { id: "60", predecessors: ["59"], duration: 3 },
  { id: "61", predecessors: ["59"], duration: 3 },
  { id: "62", predecessors: ["60"], duration: 2 },
  { id: "63", predecessors: ["62"], duration: 28 },
  { id: "64", predecessors: ["63"], duration: 28 },
  { id: "65", predecessors: ["64"], duration: 16 },
  /* Iteracion 9 */
  { id: "66", predecessors: ["65"], duration: 3 },
  { id: "67", predecessors: ["65"], duration: 3 },
  { id: "68", predecessors: ["66"], duration: 2 },
  { id: "69", predecessors: ["68"], duration: 18 },
  { id: "70", predecessors: ["68"], duration: 18 },
  { id: "71", predecessors: ["69", "70"], duration: 18 },
  { id: "72", predecessors: ["71"], duration: 18 },
  /* Iteracion 10 */
  { id: "73", predecessors: ["72"], duration: 4 },
];

data.forEach((activity) => {
  table.addActivity(new Activity(activity));
});
