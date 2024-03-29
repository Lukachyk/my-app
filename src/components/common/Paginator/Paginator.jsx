import React, { useState } from "react";
import styles from "./Paginator.module.css";
import { useEffect } from "react";
import cn from "classnames";

let Paginator = ({
  totalItemsCount,
  pageSize,
  currentPage,
  onPageChanged,
  portionSize = 11,
}) => {
  let pagesCount = Math.ceil(totalItemsCount / pageSize);

  let pages = [];
  for (let i = 0; i < pagesCount; i++) {
    pages.push(i);
  }

  let portionCount = Math.ceil(pagesCount / portionSize);
  let [portionNumber, setPortionNumber] = useState(1);
  let leftPortionNumber = (portionNumber - 1) * portionSize + 1;
  let rightPortionNumber = portionNumber * portionSize;
  useEffect(
    () => setPortionNumber(Math.ceil(currentPage / portionSize)),
    [currentPage]
  );
  return (
    <div className={styles.paginator}>
      {portionNumber > 1 && (
        <button
          onClick={() => {
            setPortionNumber(portionNumber - 1);
          }}
        >
          PREV
        </button>
      )}
      {pages
        .slice(leftPortionNumber, rightPortionNumber)
        // .filter((p) => (p) => leftPortionNumber && p <= rightPortionNumber)
        .map((p) => {
          return (
            <span
              className={cn(
                { [styles.selectedPage]: currentPage === p },
                styles.pageNumber
              )}
              key={p}
              onClick={(e) => {
                onPageChanged(p);
              }}
            >
              {p}
            </span>
          );
        })}
      {portionCount > portionNumber && (
        <button
          onClick={() => {
            setPortionNumber(portionNumber + 1);
          }}
        >
          NEXT
        </button>
      )}
    </div>
  );
};

export default Paginator;
