import React from "react";
import SearchBar from "../components/SearchBar";
import RestaurantList from "../components/RestaurantList";

const Home = () => {
  return (
    <main className="container" style={{ paddingBottom: "100px" }}>
      <h1 className="app-title">Swiggy Food</h1>
      <SearchBar />
      <RestaurantList />
    </main>
  );
};

export default Home;