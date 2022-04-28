import React from "react";
import "../css/styles.css";
import PropertyCard from "./PropertyCard";
import { searchProperty } from "../services/propertyService";
import SearchBar from "./SearchBar";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import styled from "styled-components";
import NoResultsFound from "./noresultsfound";

const SearchResults = () => {
  const { town, minprice, maxprice, bedrooms } = useParams();
  let [data, setData] = React.useState(null);
  let [searchTerm, setSearchTerm] = React.useState({
    town: null,
    minprice: null,
    maxprice: null,
    bedrooms: null,
  });
  let [IsDataReady, setIsDataReady] = React.useState(false);
  let [dataPresent, setDataPresent] = React.useState(false);

  let searchtermfromurl = {
    town: town,
    minprice: minprice,
    maxprice: maxprice,
    bedrooms: bedrooms,
  };
  React.useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const res = await searchProperty(searchtermfromurl);
    setSearchTerm(searchtermfromurl);
    setIsDataReady(true);
    if (res.data.count !== 0) {
      setData(res.data);
      setDataPresent(true);
    } else {
      setIsDataReady(true);
      setDataPresent(false);
    }
  }
  if (JSON.stringify(searchTerm) !== JSON.stringify(searchtermfromurl)) {
    fetchData();
  }
  if (IsDataReady === false) {
    return <NoResultsFound message={"Loading"} />;
  }
  if (dataPresent === false) {
    return <NoResultsFound message={"No Result Found"} />;
  }

  return (
    <Wrap>
      <div className="SearchBarArea">
        <SearchBar />
      </div>
      <Content>
        <h2>
          Showing {data.count} results for {town}{" "}
        </h2>
        <PropertyCard data={data.results}></PropertyCard>
      </Content>
    </Wrap>
  );
};

export default SearchResults;

const Wrap = styled.div`
  width: 100%;
  margin: 0 auto;
  margin-top: 70px;
  h2 {
    margin-bottom: 30px;
    margin-left: 20px;
    font-size: 18px;
  }

  @media (max-width: 500px) {
    h2 {
      margin-left: 9px;
      font-size: 15px;
    }
  }
`;
const Content = styled.div`
  padding-top: 120px;

  @media (max-width: 500px) {
    padding-top: 0;
  }
`;
