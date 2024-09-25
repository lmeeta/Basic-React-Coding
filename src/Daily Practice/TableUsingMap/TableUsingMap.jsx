import { useState } from "react";
import "./TableUsingMap.css";

function TableUsingMap() {
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const [tableNumber, setTableNumber] = useState("");

  return (
    <>
      <h1> Learn Table </h1>

      <p>
        Which table you want to learn :{" "}
        <input type="number" onChange={(e) => setTableNumber(e.target.value)} />
      </p>

      {tableNumber ? (
        <table className="table-primary">
          <thead>
            <tr>
              <th>Table of {tableNumber}</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => {
              return (
                <tr key={index}>
                  <td>
                    {` ${tableNumber} * ${item} = ${item * tableNumber}`}{" "}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        "Enter a table number"
      )}
    </>
  );
}

export default TableUsingMap;
