import { printData } from "./data.mjs";

function printCSV(data) {
  console.log(
    "Id,Duration,Earliest Start Time,Latest Start Time,Earliest End Time,Latest End Time,Predecessors"
  );
  data.forEach(({ id, duration, est, lst, eet, let: leet, predecessors }) => {
    console.log(
      `${id},${duration},${est},${lst},${eet},${leet},${predecessors.join(";")}`
    );
  });
}

printCSV(printData.data);
