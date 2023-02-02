import React, { useState } from "react";

function Clients({ data, loading }) {
  const [descOpen, setDescOpen] = useState({});
  if (loading) {
    return <h2>Loading...</h2>;
  }
  function handleClick(event) {
    setDescOpen((prevValue) => {
      return {
        ...prevValue,
        [event.target.name]: !prevValue[event.target.name],
      };
    });
  }
  return (
    <>
      {data.map((post) => {
        return (
          <div key={post.id} className="card">
            <div className="row">
              <div className="col-md-4">
                <p>{post.company.name}</p>
              </div>
              <div className="col-md-3">
                <h6>CONTACT</h6>
                <p>{post.name}</p>
              </div>
              <div className="col-md-3">
                <h6>CITY</h6>
                <p>{post.address.city}</p>
              </div>
              <div className="col-md-2" style={{ textAlign: "right" }}>
                <button className="btn" name={post.id} onClick={handleClick}>
                  {descOpen[post.id] ? "Hide Details" : "View Details"}
                </button>
              </div>
            </div>
            {descOpen[post.id] && (
              <div className="card">
                <h6>Description</h6>
                <p>
                  {post.company.catchPhrase + " and " + post.company.bs + "."}
                </p>
                <div className="row">
                  <div className="col-sm-5">
                    <h6>Contact Person</h6>
                    <p>{post.name}</p>
                    <h6>Username</h6>
                    <p>{post.username}</p>
                    <h6>Email</h6>
                    <p>{post.email}</p>
                    <h6>Phone</h6>
                    <p>{post.phone}</p>
                  </div>
                  <div className="col-sm-7">
                    <h6>Address</h6>
                    <p>
                      {post.address.suite +
                        " " +
                        post.address.street +
                        " " +
                        post.address.city +
                        " " +
                        post.address.zipcode}
                    </p>
                    <h6>City</h6>
                    <p>{post.address.city}</p>
                    <h6>Zip Code</h6>
                    <p>{post.address.zipcode}</p>
                    <h6>Website</h6>
                    <p>{post.website}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </>
  );
}

export default Clients;
