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
        <td className="p-5">
          {item instanceof Array ? data[item[0]][item[1]] : data[item]}
        </td>
      );
    });
  }

  return (
    <table className="mx-auto w-1/2 border-2 border-slate-600 text-center mt-56 vazir-medium ">
      <thead className="vazir-extraBold">
        <tr className="border-2 border-slate-600">
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
                props.iconTd.map((childItem) => (
                  <td>
                    <div className="flex justify-center items-center" data-id={item.id} onClick={props.onClick} >
                      {childItem}
                    </div>
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
