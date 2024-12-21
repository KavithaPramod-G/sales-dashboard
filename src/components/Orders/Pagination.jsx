import React from "react";

const Pagination = ({
    totalPosts,
    postsPerPage,
    setCurrentPage,
    currentPage,
}) => {
    let pages = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pages.push(i);
    }

    return (
        <div className='flex mt-1 justify-end'>
            {pages.map((page, index) => {
                return (
                    <button
                        key={index}
                        onClick={() => setCurrentPage(page)}
                        className={`border w-10 h-30 ${page == currentPage ? "active bg-teal-200 font-bold" : ""}`}>
                        {page}
                    </button>
                );
            })}
        </div>
    );
};

export default Pagination;

