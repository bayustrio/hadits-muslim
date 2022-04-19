import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API } from "../../Api/Api";
import "./hadits.css";
import { Pagination } from "antd";

const HaditSlug = () => {
  // const slug = useSelector((state) => state.slug);
  const [paginations, setPaginations] = useState(1);
  const data = useSelector((state) => state.dataSlug);
  // const [data, setData] = useState([]);
  const dispatch = useDispatch();

  const scoolTOP = () => {
    window.scrollTo(0, 0)
  }
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
      .get(`${API}hadith/${slug}?page=${paginations}`)
      .then((res) => {
        console.log(res.data);
        const data = res.data;
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
      // scoolTOP();
  }, [paginations]);

  return (
    <>
      <div className="slug">
        <h1 style={{color:'#fff', textAlign:'center'}}>HADITS {data.name}</h1>
        {/* <h3</h3> */}
        {data.items?.map((item, idx) => (
          <div key={idx} className="card">
            <div className="section-slug">
              <div className="text-hadit-slug">
                <h2>{item.number}</h2>
                <h1>{item.arab}</h1>
                <p>{item.id}</p>
              </div>
            </div>
          </div>
        ))}
        <div style={{width:'100%',height:'80px', textAlign:'right'}}>
      <Pagination
        onChange={onShowSizeChange}
        defaultCurrent={1}
        total={data.pagination?.totalPages}
      />
      </div>
      </div>
    </>
  );
};

export default HaditSlug;
