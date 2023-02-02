import React, { useState, useEffect } from "react";
import axios from "axios";
import Clients from "./Clients";
import Pagination from "@mui/material/Pagination";
import "./Listing.css";

function Listing() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 3;
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);
  function handleChange(e, p) {
    setCurrentPage(p);
  }
  const lastIndex = currentPage * postsPerPage;
  const firstIndex = lastIndex - postsPerPage;
  const currentData = data.slice(firstIndex, lastIndex);
  return (
    <div className="container listing">
      <h1>Our Clients</h1>
      <Clients data={currentData} loading={loading} />
      <Pagination
        count={Math.ceil(data.length / postsPerPage)}
        page={currentPage}
        size="large"
        color="secondary"
        onChange={handleChange}
      />
    </div>
  );
}

export default Listing;
