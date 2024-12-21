import React from "react";
import { FiArrowUpRight, FiDollarSign, FiMoreHorizontal, FiShoppingBag } from "react-icons/fi";


export const Orders = () => {
  return (
    <div className="col-span-12 p-4 rounded border border-stone-300 mt-6">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="flex items-center gap-1.5 text-3xl font-bold">
            Orders
        </h3>
        <button className="text-sm text-violet-500 hover:underline">
          See all
        </button>
      </div>
      <table className="w-full table-auto border border-stone-300 lg:grid-cols-4 md:justify-between lg:justify-between">
        <TableHead />

        <tbody>
          <TableRow
            name="product 1"
            date="Aug 2nd"
            time="2h"
            order={2}
            commision="$10"
          />
          <TableRow
            name="product 1"
            date="Aug 2nd"
            time="2h"
            order={5}
            commision="$10"
          />
          <TableRow
            name="product 1"
            date="Aug 2nd"
            time="2h"
            order={7}
            commision="$10"
          />
          <TableRow
            name="product 1"
            date="Aug 2nd"
            time="2h"
            order={2}
            commision="$10"
          />
          <TableRow
            name="product 1"
            date="Aug 2nd"
            time="2h"
            order={5}
            commision="$10"
          />
          <TableRow
            name="product 1"
            date="Aug 2nd"
            time="2h"
            order={10}
            commision="$10"
          />
        </tbody>
      </table>
    </div>
  );
};

const TableHead = () => {
  return (
    <thead>
      <tr className="text-md font-normal text-stone-500 bg-slate-200 h-20 justify-between">
        <th className="text-start p-1" onClick={() => setSortedField('name')}>Product</th>
        <th className="text-start p-1" onClick={() => setSortedField('name')}>Date</th>
        <th className="text-start p-1" onClick={() => setSortedField('name')}>Time Spent</th>
        <th className="text-start p-1" onClick={() => setSortedField('name')}>OrderValue</th>
        <th className="text-start p-1" onClick={() => setSortedField('name')}>Commision</th>
        <th className="w-8"></th>
      </tr>
    </thead>
  );
};

const TableRow = ({
  name,
  date,
  time,
  order,
  commision
}) => {
  return (
    <tr className={order % 2 ? "bg-stone-100 text-sm" : "text-sm"}>
      <td className="flex text-lg p-1 text-left">
          <FiShoppingBag /> {name}
      </td>
      <td className="text-lg p-1 text-left text-base">{date}</td>
      <td className="text-lg p-1 text-left">{time}</td>
      <td className="text-lg p-1 text-left">{order}</td>
      <td className="text-lg p-1 text-left">{commision}</td>
      <a
          href="#"
          className="flex items-center gap-1 text-stone-500 text-lg"
        >
          view Chat <FiArrowUpRight />
        </a>
    </tr>
  );
};
