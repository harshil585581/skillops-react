import { useInfiniteQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { useMemo } from "react";

const LIMIT = 12;

const fetchRecipes = async ({ pageParam = 0, queryKey, signal }) => {
  const [, searchTerm] = queryKey;

  const url = searchTerm
    ? `https://dummyjson.com/recipes/search?q=${searchTerm}&limit=${LIMIT}&skip=${pageParam}`
    : `https://dummyjson.com/recipes?limit=${LIMIT}&skip=${pageParam}`;

  const res = await fetch(url, { signal });
  return res.json();
};

export const useRestaurants = () => {
  const searchTerm = useSelector((state) => state.restaurants.searchTerm);

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
  } = useInfiniteQuery({
    queryKey: ["restaurants", searchTerm],
    queryFn: fetchRecipes,
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      const nextSkip = lastPage.skip + LIMIT;
      return nextSkip < lastPage.total ? nextSkip : undefined;
    },
  });

  const filteredList = useMemo(() => {
    if (!data) return [];

    return data.pages.flatMap((page) => page.recipes);
  }, [data]);

  return {
    filteredList,
    isLoading,
    isError,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  };
};