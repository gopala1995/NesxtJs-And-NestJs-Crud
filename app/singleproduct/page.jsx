import React, { useContext, useState } from "react";
import Navbar from "../navbar/page";
import { SearchContext } from "../context/dataprovider";

const SignleProduct = () => {
  // const [data, setData] = useState("");
  const { search } = useContext(SearchContext);
  console.log("Input data in signle", search);

  return (
    <div>
      <Navbar />
    </div>
  );
};

export default SignleProduct;
