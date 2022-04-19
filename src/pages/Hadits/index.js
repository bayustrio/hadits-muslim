import React, { useEffect, useState } from "react";
import axios from "axios";
import "./hadits.css";
import { BsArrowDownShort } from "react-icons/bs";
// import slug from "./HaditSlug";
import { Spin } from "antd";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDataSlug } from "../../React-redux/Redux-action/Action";

const Hadits = () => {
  const Slug = useSelector((state) => state.slug);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [slide, setSlide] = useState(false);
  const [id, setId] = useState("");

  useEffect(() => {
    let API = "https://hadis-api-id.vercel.app/hadith/";
    axios.get(API).then((res) => {
      console.log(res.data);
      setData(res.data);
      setLoading(true);
    });
  }, []);

  const handleClick = (slug) => {
    console.log(slug, " << INDEX HADITS");
    dispatch(getDataSlug(slug));
  };

  const handleSlide = (idx) => {
    setSlide(!slide);
    setId(idx);
    console.log(idx);
  };

  return (
    <section>
      <div>
        {/* <h1>{Slug}</h1> */}
        {loading ? (
          data.map((item, idx) => (
            <div key={idx} className="section-hadits">
              <div className="text-perawi">
                <div className={slide ? "active" : "text-hadits"}>
                  <h2 onClick={() => handleClick(item.slug)}>
                    <Link
                      style={{ textDecoration: "none" }}
                      key={item.slug}
                      to={`/hadits/${item.slug}`}
                    >
                      {item.name}
                    </Link>
                  </h2>
                  {id === idx && <p key={idx}>Total Hadits: {item.total}</p>}
                </div>
                <div className="arrow" onClick={() => handleSlide(idx)}>
                  <p>
                    <BsArrowDownShort />
                  </p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div style={{ width: "100%", fontSize: "4rem" }}>
            <Spin style={{ width: "100%", fontSize: "10rem" }} size="large" />
            <h4 style={{ textAlign: "center" }}>Loading...</h4>
          </div>
        )}
      </div>
    </section>
  );
};

export default Hadits;
