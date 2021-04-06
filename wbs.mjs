import { Activity, ActivityList } from "./cpm.mjs";

function getId(originalId) {
  return parseInt(originalId) + 8;
}

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
  { id: "12", predecessors: ["7", "8"], duration: 3 },
  { id: "13", predecessors: ["11"], duration: 2 },
  { id: "14", predecessors: ["13"], duration: 16 },
  { id: "15", predecessors: ["14"], duration: 8 },
  { id: "16", predecessors: ["13"], duration: 16 },
  { id: "17", predecessors: ["16"], duration: 16 },
  { id: "18", predecessors: ["15", "17"], duration: 8 },
  { id: "19", predecessors: ["18"], duration: 8 },
  /* Iteracion 2 */
  { id: "20", predecessors: ["12", "19"], duration: 3 },
  { id: "21", predecessors: ["12", "19"], duration: 3 },
  { id: "22", predecessors: ["20"], duration: 2 },
  { id: "23", predecessors: ["22"], duration: 16 },
  { id: "24", predecessors: ["22"], duration: 16 },
  { id: "25", predecessors: ["22"], duration: 16 },
  { id: "26", predecessors: ["22"], duration: 16 },
  { id: "27", predecessors: ["23", "24", "25", "26"], duration: 8 },
  /* Iteracion 3 */
  { id: "28", predecessors: ["21", "27"], duration: 3 },
  { id: "29", predecessors: ["21", "27"], duration: 3 },
  { id: "30", predecessors: ["28"], duration: 2 },
  { id: "31", predecessors: ["30"], duration: 16 },
  { id: "32", predecessors: ["30"], duration: 16 },
  { id: "33", predecessors: ["30"], duration: 16 },
  { id: "34", predecessors: ["30"], duration: 16 },
  { id: "35", predecessors: ["31", "32", "33", "34"], duration: 8 },
  /* Iteracion 4 */
  { id: getId("28"), predecessors: ["29", "35"], duration: 2 },
  { id: getId("29"), predecessors: ["29", "35"], duration: 2 },
  { id: getId("30"), predecessors: [getId("28")], duration: 2 },
  { id: getId("31"), predecessors: [getId("30")], duration: 16 },
  { id: getId("32"), predecessors: [getId("30")], duration: 16 },
  { id: getId("33"), predecessors: [getId("30")], duration: 16 },
  { id: getId("34"), predecessors: [getId("30")], duration: 16 },
  {
    id: getId("35"),
    predecessors: [getId("31"), getId("32"), getId("33"), getId("34")],
    duration: 10,
  },
  /* Iteracion 5 */
  { id: getId("36"), predecessors: [getId("29"), getId("35")], duration: 3 },
  { id: getId("37"), predecessors: [getId("29"), getId("35")], duration: 3 },
  { id: getId("38"), predecessors: [getId("36")], duration: 3 },
  { id: getId("39"), predecessors: [getId("38")], duration: 16 },
  { id: getId("40"), predecessors: [getId("38")], duration: 16 },
  { id: getId("41"), predecessors: [getId("38")], duration: 16 },
  { id: getId("42"), predecessors: [getId("38")], duration: 16 },
  {
    id: getId("43"),
    predecessors: [getId("39"), getId("40"), getId("41"), getId("42")],
    duration: 10,
  },
  /* Iteracion 6 */
  { id: getId("44"), predecessors: [getId("37"), getId("43")], duration: 3 },
  { id: getId("45"), predecessors: [getId("37"), getId("43")], duration: 3 },
  { id: getId("46"), predecessors: [getId("44")], duration: 3 },
  { id: getId("47"), predecessors: [getId("46")], duration: 16 },
  { id: getId("48"), predecessors: [getId("46")], duration: 16 },
  { id: getId("49"), predecessors: [getId("46")], duration: 16 },
  { id: getId("50"), predecessors: [getId("46")], duration: 16 },
  {
    id: getId("51"),
    predecessors: [getId("47"), getId("48"), getId("49"), getId("50")],
    duration: 10,
  },
  /* Iteracion 7 */
  { id: getId("52"), predecessors: [getId("45"), getId("51")], duration: 3 },
  { id: getId("53"), predecessors: [getId("45"), getId("51")], duration: 3 },
  { id: getId("54"), predecessors: [getId("52")], duration: 2 },
  { id: getId("55"), predecessors: [getId("54")], duration: 16 },
  { id: getId("56"), predecessors: [getId("54")], duration: 16 },
  { id: getId("57"), predecessors: [getId("54")], duration: 16 },
  { id: getId("58"), predecessors: [getId("54")], duration: 16 },
  {
    id: getId("59"),
    predecessors: [getId("55"), getId("56"), getId("57"), getId("58")],
    duration: 8,
  },
  /* Iteracion 8 */
  { id: getId("60"), predecessors: [getId("53"), getId("59")], duration: 3 },
  { id: getId("61"), predecessors: [getId("53"), getId("59")], duration: 3 },
  { id: getId("62"), predecessors: [getId("60")], duration: 2 },
  { id: getId("63"), predecessors: [getId("62")], duration: 28 },
  { id: getId("64"), predecessors: [getId("63")], duration: 28 },
  { id: getId("65"), predecessors: [getId("64")], duration: 16 },
  /* Iteracion 9 */
  { id: getId("66"), predecessors: [getId("61"), getId("65")], duration: 3 },
  { id: getId("67"), predecessors: [getId("61"), getId("65")], duration: 3 },
  { id: getId("68"), predecessors: [getId("66")], duration: 2 },
  { id: getId("69"), predecessors: [getId("68")], duration: 18 },
  { id: getId("70"), predecessors: [getId("68")], duration: 18 },
  { id: getId("71"), predecessors: [getId("69"), getId("70")], duration: 18 },
  { id: getId("72"), predecessors: [getId("71")], duration: 18 },
  /* Iteracion 10 */
  { id: getId("73"), predecessors: [getId("67"), getId("72")], duration: 4 },
];

data.forEach((activity) => {
  table.addActivity(new Activity(activity));
});
