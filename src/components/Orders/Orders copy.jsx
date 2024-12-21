import React, { useEffect, useState } from "react";
import { FiArrowUpRight, FiDollarSign, FiMoreHorizontal, FiShoppingBag } from "react-icons/fi";
import Table from "./Table";
import Pagination from "./Pagination";

const dataSource = [  
  { "name":"Car Decorator", "date":"Aug 2nd", "time":"2h", "order":2, "commision":"20"},
  { "name":"Apple Phone", "date":"Aug 2nd", "time":"2h", "order":2, "commision":"10"},
  { "name":"Samsung Smart mobile", "date":"Aug 2nd", "time":"2h", "order":4, "commision":"10"},
  { "name":"Samsung smart phone", "date":"Aug 2nd", "time":"2h", "order":2, "commision":"30"},
  { "name":"product 5", "date":"Aug 2nd", "time":"2h", "order":3, "commision":"50"},   
  { "name":"product 1", "date":"Aug 2nd", "time":"2h", "order":2, "commision":"60"},
  { "name":"product 1", "date":"Aug 2nd", "time":"2h", "order":10, "commision":"10"},
  { "name":"product 1", "date":"Aug 2nd", "time":"2h", "order":8, "commision":"100"},
  { "name":"Car Decorator", "date":"Aug 2nd", "time":"2h", "order":2, "commision":"20"},
  { "name":"Apple Phone", "date":"Aug 2nd", "time":"2h", "order":2, "commision":"10"},
  { "name":"Samsung Smart mobile", "date":"Aug 2nd", "time":"2h", "order":4, "commision":"10"},
  { "name":"Samsung smart phone", "date":"Aug 2nd", "time":"2h", "order":2, "commision":"30"},
  { "name":"product 5", "date":"Aug 2nd", "time":"2h", "order":3, "commision":"50"},   
  { "name":"product 1", "date":"Aug 2nd", "time":"2h", "order":2, "commision":"60"},
  { "name":"product 1", "date":"Aug 2nd", "time":"2h", "order":10, "commision":"10"},
  { "name":"product 16", "date":"Aug 2nd", "time":"2h", "order":8, "commision":"100"}
]

export const Orders1 = () => {
  const [data, setdata] = useState(dataSource);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(8);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = dataSource.slice(firstPostIndex, lastPostIndex);

  useEffect(() => {
    console.log(data);
  }, [data]);

  function handleHeaderClick(header) {
    const newdata = [...data].sort((a, b) => (a[header] > b[header] ? 1 : -1));
    setdata(newdata);
  }

  return (
    <div>
      <Table data={currentPosts} onClick={handleHeaderClick} />
      <Pagination
                totalPosts={dataSource.length}
                postsPerPage={postsPerPage}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
      />
    </div>
  );
};
