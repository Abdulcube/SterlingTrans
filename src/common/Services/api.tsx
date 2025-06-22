import { useState } from "react";

export const useGetRequest = () => {
  const [data, setData] = useState({});
  const fetchData = () => {
    fetch(`${process.env.REACT_APP_API_BASE_URL}/api/hello`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((resData) => {
        setData(resData.message);
      });
  };
  return {
    data,
    fetchData,
  };
};
