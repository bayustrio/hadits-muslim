import React, { useEffect, useState } from "react";
import axios from "axios";
import "./hadits.css";
import { BsArrowDownShort } from "react-icons/bs";
// import slug from "./HaditSlug";
import { Spin } from "antd";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDataSlug } from "../../React-redux/Redux-action/Action";
import NotFound from "./NotFound";
import { Input, Space } from "antd";

const Hadits = () => {
  const Slug = useSelector((state) => state.slug);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [slide, setSlide] = useState(false);
  const [id, setId] = useState("");
  const [search, setSearch] = useState("");
  const [key, setKey] = useState("");

  const { Search } = Input;

  useEffect(() => {
    dataBase();
  }, []);

  const dataBase = () => {
    let API = `https://hadis-api-id.vercel.app/hadith`;
    axios
      .get(API)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
        setLoading(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleClick = (slug) => {
    console.log(slug, " << INDEX HADITS");
    dispatch(getDataSlug(slug));
  };

  const handleSlide = (idx) => {
    setSlide(!slide);
    setId(idx);
    console.log(idx);
  };

  // SEARCH HADITS
  const handleSearch = (e) => {
    let key = e.target.value;
    console.log(search, "< SEARCH");
    setSearch(key);
    let Data = data.filter((item) => {
      return item.name.toLowerCase().includes(search.toLowerCase());
    });

    if (key === "") {
      dataBase();
    }
    if ((key === data.length) === 0 || (key === data.length) === 0) {
      return <NotFound />;
    } else {
      setData(Data);
    }
  };

  return (
    <section>
      <div>
        {/* SEARCH INPUT VALUE */}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Search
            placeholder="Masukan hadits yang anda cari"
            value={search}
            onChange={handleSearch}
            style={{ width: "300px" }}
          />
        </div>
        {console.log(key,'<key')}
        {/* === END SEARCH INPUT VALUE === */}
        {key.length === data.length === 0 && <NotFound />}

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
