import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API } from "../../Api/Api";
import "./hadits.css";
import { Pagination, Spin } from "antd";

const HaditSlug = () => {
  const [paginations, setPaginations] = useState(1);
  const data = useSelector((state) => state.dataSlug);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const scoolTOP = () => {
    window.scrollTo(0, 0);
  };
  const onShowSizeChange = (current) => {
    console.log(current, "<< TERPANGGIL");
    setPaginations(current);
    scoolTOP();
    //  SCROOL =  window.scroll(0)
  };

  // const SCROOL = window.scrollTo(0)
  useEffect(() => {
    let slug = window.location.pathname.split("/")[2];

    axios
      .get(`${API}hadith/${slug}?page=${paginations}&limit=10`)
      .then((res) => {
        console.log(res.data);
        const data = res.data;
        setLoading(true);
        // const scrool = window.scrollTo(0)
        // setData(data);
        dispatch({
          type: "DATA_SLUG",
          payload: {
            data: data,
          },
        });
      })
      .catch((err) => console.log(err));
  }, [paginations]);

  return (
    <>{
      loading ? (

      <div className="slug">
      <h1 style={{ color: "#fff", textAlign: "center" }}>
        HADITS {data.name}
      </h1>
      {data.items?.map((item, idx) => (
        <div key={idx} className="card">
          <div className="section-slug">
            <div className="text-hadit-slug">
              <h2>{item.number}.</h2>
              <h1>{item.arab}</h1>
              <p>{item.id}</p>
            </div>
          </div>
        </div>
      ))}
      <div style={{ width: "100%", height: "80px", textAlign: "right" }}>
        <Pagination
          onChange={onShowSizeChange}
          defaultCurrent={1}
          total={data.pagination?.totalPages}
        />
      </div>
    </div>
      ):
      <div className="loading">
        <Spin size="large"/>
        <h2>Loading...</h2>
        </div>
    }
    </>
  );
};

export default HaditSlug;
