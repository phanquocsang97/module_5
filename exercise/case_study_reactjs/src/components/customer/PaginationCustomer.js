import React from "react";

export function PaginationCustomer({setPages,total,page}) {
    const totalPages = Math.ceil(total/5);
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
        pages.push(
            <button
                key={i}
                onClick={() => {setPages(i)}}>
                {i}
            </button>
        )
    }
    return (
        <div>
            <ul className="pagination pagination-lg" >
                {pages.map((item)=>
                    <li className={"page-item"}>{item}</li>
                )}
            </ul>
        </div>
    )
}