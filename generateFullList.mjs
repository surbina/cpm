import { table } from "./data.mjs";

function printCSV(list) {
  console.log(
    "Id,Duracion,Predecedores,Tiempo de inicio temprano,Tiempo de inicio tardio,Tiempo de finalizacion temprano,Tiempo de finalizacion tardio,Holgura,Es parte del camino critico?"
  );
  list.forEach(
    ({ id, duration, est, lst, eet, let: leet, predecessors, h }) => {
      console.log(
        [
          id,
          duration,
          predecessors.map(({ id }) => id).join(";"),
          est,
          lst,
          eet,
          leet,
          h,
          h == 0,
        ].join(",")
      );
    }
  );
}

printCSV(Object.values(table.getList()));
