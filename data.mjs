import { table } from "./wbs.mjs";

const lastNode = table.getCriticalPath("73");

export const printData = { data: convertToArray(lastNode) };

export { table };

function convertToArray(lastNode) {
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
