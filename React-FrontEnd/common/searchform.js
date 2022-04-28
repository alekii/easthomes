import React from "react";
import "../css/styles.css";
import PropertySearchForm from "../components/propertysearchform";

const MobileSearch = (props) => {
  const { searchform, toggleSearchForm } = props;
  return (
    <div
      className={
        searchform ? "propertysearchform searchformopen" : "propertysearchform"
      }
    >
      <PropertySearchForm
        toggleSearchForm={toggleSearchForm}
      ></PropertySearchForm>
    </div>
  );
};

export default MobileSearch;
