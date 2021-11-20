import { lightBlue } from "@mui/material/colors";
import React, { useContext } from "react";
import { clientContext } from "../contexts/ClientContext";

const Pagination = () => {
  const { totalPosts, postsPerPage, handlePage, currentPage } =
    useContext(clientContext);
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  // console.log(pageNumbers);
  return (
    <>
      <div className="pagination">
        <ul>
          {pageNumbers.map((item) => (
            <li key={item}>
              <button
                style={{
                  background: item === currentPage ? "red" : "lightblue",
                }}
                onClick={() => handlePage(item)}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Pagination;
