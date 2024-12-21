import { FiArrowUpRight, FiShoppingBag } from "react-icons/fi";

export default function Table(props) {
    // function tableHeader(header, index) {
    //   if (header.includes("name") || header.includes("date") || header.includes("order")) {
    //     return (
    //       <th className="text-start p-1" onClick={(e) => props.onClick(header)} key={index}>
    //         {header}
    //       </th>
    //     );
    //   }
    // }
  
    function tableRow(row, indexRow) {
      return <TableRow 
      name={row.name}
      date={row.date}
      time={row.time}
      order={row.order}
      commision={row.commision}/>
    }
  
    return (
        <div className="col-span-12 p-4 rounded border border-stone-300 m-3">
            <div className="mb-4 flex items-center justify-between">
        <h3 className="flex items-center gap-1.5 text-3xl font-bold">
            Orders
        </h3>\
        </div>
      <table className="w-full table-auto border border-stone-300 lg:grid-cols-4 md:justify-between lg:justify-between">
        <TableHead data={props} onClick={(e) => props.onClick(e)}/>
        {/* <thead>{Object.keys(props.data[0]).map((header, indexHeader) => tableHeader(header, indexHeader))}</thead> */}
        {props.data.map((row, indexRow) => tableRow(row, indexRow))}
      </table>
      {/* <div>
        <button onClick={goOnPrevPage}>Prev</button>
        <button onClick={goOnNextPage}>Next</button>
      </div> */}
      </div>
    );
  }
  const TableHead = (props) => {
    return (
      <thead>
        <tr className="text-md font-normal text-stone-500 bg-slate-200 h-20 justify-between">
          <th className="text-start p-1" onClick={() => props.onClick('name')}>Product</th>
          <th className="text-start p-1" onClick={() => props.onClick('date')}>Date</th>
          <th className="text-start p-1" onClick={() => props.onClick('time')}>Time Spent</th>
          <th className="text-start p-1" onClick={() => props.onClick('order')}>OrderValue</th>
          <th className="text-start p-1" onClick={() => props.onClick('commision')}>Commision</th>
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
        <>      <tr className={order % 2 ? "bg-stone-100 text-sm" : "text-sm"}>
        <td className="flex text-lg text-left font-serif">
            <FiShoppingBag /> {name}
        </td>
        <td className="text-lg text-left font-serif">{date}</td>
        <td className="text-lg text-left font-serif">{time}</td>
        <td className="text-lg text-left font-serif">{order}</td>
        <td className="text-lg text-left font-serif">${commision}</td>
        <a
            href="#"
            className="flex items-center gap-1 text-stone-500 text-lg"
          >
            view Chat <FiArrowUpRight />
          </a>
      </tr>
      {/* <div className="flex items-center gap-2">
      <IconButton {...getItemProps(1)}>1</IconButton>
      <IconButton {...getItemProps(2)}>2</IconButton>
      <IconButton {...getItemProps(3)}>3</IconButton>
      <IconButton {...getItemProps(4)}>4</IconButton>
      <IconButton {...getItemProps(5)}>5</IconButton>
    </div> */}
    </>
    );
  };