import { table } from "./data.mjs";

function printCSV(list) {
  // console.log(list);
  console.log(
    "Id,Duration,Earliest Start Time,Latest Start Time,Earliest End Time,Latest End Time,Predecessors,Holgura,Es Camino Critico?"
  );
  list.forEach(
    ({ id, duration, est, lst, eet, let: leet, predecessors, h }) => {
      console.log(
        `${id},${duration},${est},${lst},${eet},${leet},${predecessors
          .map(({ id }) => id)
          .join(";")},${h},${h == 0}`
      );
    }
  );
}

printCSV(Object.values(table.getList()));
