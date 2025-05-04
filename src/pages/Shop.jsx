import React, { useEffect, useState } from "react";
import Spinner from "../components/Spinner"; 
import { Link } from "react-router-dom";
import axios from "axios";

export default function Shop() {
  const [alldata, setAlldata] = useState([]);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const response = await axios.get("/api/shops");
  //       setAlldata(response.data);
  //       setLoading(false);
  //     } catch (error) {
  //       console.error("Failed to fetch data", error);
  //       setLoading(false);
  //     }
  //   }

  //   fetchData();
  // }, []);

  const publishedData = alldata.filter((ab) => ab.status === "publish");

  const createdAtDate =
    alldata && alldata[0]?.createdAt ? new Date(alldata[0]?.createdAt) : null;

  const formateDate = (date) => {
    if (!date || isNaN(date)) {
      return "";
    }

    const options = {
      day: "numeric",
      month: "long",
      year: "numeric",
      hour12: true,
    };

    return new Intl.DateTimeFormat("en-US", options).format(date);
  };

  return (
    <>
      <div className="shoppage">
        <div className="shoppagetoptitle">
          <div className="container">
            <h3>SHOP ONLINE</h3>
            <h2>OUR PRODUCTS</h2>
          </div>
        </div>

        <div className="shopproducts">
          <div className="container">
            <div className="shopprocards">
              {loading ? (
                <Spinner />
              ) : (
                <>
                  {publishedData.map((pro) => {
                    return (
                      <Link
                        to={`/shop/${pro.slug}`}
                        key={pro._id}
                        className="spprocard"
                      >
                        <div className="spprocardimg">
                          <img src={pro.images[0]} alt={pro.title} />
                        </div>
                        <div className="spprocinfo">
                          <h2>{pro.title}</h2>
                          <h3>₹ {pro.price}</h3>
                          <div className="spprotags">
                            {pro.tags.map((tag) => {
                              return <span key={tag}>{tag}</span>;
                            })}
                          </div>
                          <p>{formateDate(createdAtDate)}</p>
                        </div>
                      </Link>
                    );
                  })}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
