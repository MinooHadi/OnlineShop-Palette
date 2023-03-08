import React from "react";
import { baseURL } from "../../../api/constant";

function Table(props) {
  function createTd(data) {
    return props.td.map((item) => {
      return props.renderInSrc.includes(item) ? (
        <td className="p-5">
          <img src={`${baseURL}/files/${data[item]}`} className="w-20" />
        </td>
      ) : (
        <td className="p-5"> {data[item]} </td>
      );
    });
  }

  return (
    <table className="m-auto border-2 border-yellow-900 mt-10 text-center">
      <thead className="font-bold">
        <tr className="border-2 border-yellow-900">
          {props.thead.map((item) => (
            <td className="p-5">{item}</td>
          ))}
          {props.iconThead &&
            props.iconThead.map((item) => <td className="p-5"> {item} </td>)}
        </tr>
      </thead>
      <tbody>
        {props.tbody.map((item) => {
          return (
            <tr>
              {createTd(item)}
              {props.iconTd &&
                props.iconTd.map((item) => (
                  <td>
                    <div className="flex justify-center items-center">{item}</div>
                  </td>
                ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;
