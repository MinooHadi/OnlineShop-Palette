import React, { useEffect, useState } from "react";
import { baseURL } from "../../../api/constant";

function Table(props) {
  const renderInSrc = props.renderInSrc ?? [];
  const iconThead = props.iconThead ?? [];
  const iconTd = props.iconTd ?? [];
  const editable = props.editable ?? [];


  function ePersian(price) {
    let n = parseFloat(price);
    if(isNaN(n)) {
        return '-'
    }
    return n.toLocaleString('fa-IR');
  }

  function createTd(data) {
    return props.td.map((item) => {
      return renderInSrc.includes(item) ? (
        <td className="p-5">
          <img src={`${baseURL}/files/${data[item]}`} className="w-20" />
        </td>
      ) : (
        <td className="p-5">
          <span
            contentEditable={editable.includes(item)}
            onInput={(e) => {
              let id = data.id;
              let prev = props.editions[id] ?? {};
              props.setEditions({
                ...props.editions,
                [id]: { ...prev, [item]: e.target.innerText },
              });
            }}
            onBlur={(e) => {
              e.target.innerText = ePersian(e.target.innerText)
            }}
          >
            {item instanceof Array ? data[item[0]][item[1]] : data[item]}
          </span>
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
          {iconThead.map((item) => (
            <td className="p-5"> {item} </td>
          ))}
        </tr>
      </thead>
      <tbody>
        {props.tbody.map((item) => {
          return (
            <tr>
              {createTd(item)}
              {iconTd.map((childItem) => (
                <td>
                  <div
                    className="flex justify-center items-center"
                    data-id={item.id}
                  >
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
