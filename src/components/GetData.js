import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../redux/actions/actions";

const GetData = () => {
  const dispatch = useDispatch();
  let dataa = useSelector((state) => state.dummyData);

  const get = () => {
    dispatch(getData());
  };

  // console.log(dataa);

  return (
    <div>
      <input type="button" onClick={() => get()} value="GET" />
      {dataa.map((dat) => (
        <p>{dat.name}</p>
      ))}
    </div>
  );
};

export default GetData;
