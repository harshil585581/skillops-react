import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useWindowVirtualizer } from "@tanstack/react-virtual";
import { useRestaurants } from "../hooks/useRestaurants";
import { throttle } from "../utils/throttle";
import { useMemo } from "react";

const RestaurantList = () => {
  const [columns, setColumns] = useState(1);
  const {
    filteredList,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useRestaurants();

  useEffect(() => {
    const calculateColumns = () => {
      const width = window.innerWidth;
      const padding = width <= 768 ? 30 : 40;
      const containerWidth = Math.min(width, 1200) - padding;
      const cols = Math.floor((containerWidth + 32) / 312); // item (280) + gap (32)
      setColumns(Math.max(1, cols));
    };


    const throttledCalculate = throttle(calculateColumns, 200);

    calculateColumns();
    window.addEventListener("resize", throttledCalculate);
    return () => window.removeEventListener("resize", throttledCalculate);
  }, []);

  const rowCount = Math.ceil(filteredList.length / columns);

  const virtualizer = useWindowVirtualizer({
    count: rowCount,
    estimateSize: () => 400,
    overscan: 2,
  });

  const virtualItems = virtualizer.getVirtualItems();

  const throttledFetchNextPage = useMemo(
    () => throttle(fetchNextPage, 500),
    [fetchNextPage]
  );

  // Trigger fetchNextPage when the last row is visible
  useEffect(() => {
    if (virtualItems.length > 0) {
      const lastItem = virtualItems[virtualItems.length - 1];
      if (
        lastItem.index >= rowCount - 1 &&
        hasNextPage &&
        !isFetchingNextPage
      ) {
        throttledFetchNextPage();
      }
    }
  }, [
    virtualItems,
    rowCount,
    hasNextPage,
    isFetchingNextPage,
    throttledFetchNextPage,
  ]);

  if (isLoading) return <Shimmer />;

  return (
    <div
      style={{
        height: `${virtualizer.getTotalSize()}px`,
        width: "100%",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          transform: `translateY(${virtualItems[0]?.start ?? 0}px)`,
        }}
      >
        <div className="grid">
          {virtualItems.map((virtualRow) => {
            const startIndex = virtualRow.index * columns;
            const rowItems = filteredList.slice(startIndex, startIndex + columns);

            return (
              <React.Fragment key={virtualRow.key}>
                {rowItems.map((item) => (
                  <RestaurantCard key={item.id} data={item} />
                ))}
              </React.Fragment>
            );
          })}
        </div>
        {isFetchingNextPage && <div className="loading-more">Loading more...</div>}
      </div>
    </div>
  );
};

export default RestaurantList;