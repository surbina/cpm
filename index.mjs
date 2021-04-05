// import { table, table2 } from "./graph";
import { table } from "./wbs.mjs";

// console.log({ table });

// console.log("TABLE", table.getList());
const n73 = table.getCriticalPath("8");
// const n72 = n73.predecessors[0];
// const n71 = n72.predecessors[0];

// console.log("73: ", n73);
// console.log("72: ", n72);
// console.log("71: ", n71);

const printData = { data: getTable(n73) };

console.log(JSON.stringify(printData));

function getTable(lastNode) {
  const visited = {};
  const queue = [lastNode];
  const output = [];

  while (queue.length > 0) {
    // Buscar proxima actividad
    let currentActivity = queue.shift(); // saco del ppio
    while (visited[currentActivity.id] && queue.length > 0) {
      currentActivity = queue.shift(); // saco del ppio
    }
    if (currentActivity) {
      visited[currentActivity.id] = true;
    }

    if (currentActivity) {
      if (
        currentActivity.predecessors &&
        currentActivity.predecessors.length > 0
      ) {
        queue.push.apply(queue, currentActivity.predecessors); // agrego al final
      }

      output.unshift({
        ...currentActivity,
        predecessors: currentActivity.predecessors.map(({ id }) => id),
      });
    }
  }

  return output;
}
