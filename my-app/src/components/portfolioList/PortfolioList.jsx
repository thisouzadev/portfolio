/* eslint-disable require-jsdoc */
import React from "react";
import "./portfolioList.scss";
import PropTypes from "prop-types";

function PortfolioList({ id, title, active, setSelected }) {
  return (
    <li
      className={active ? "portfolioList active" : "portfolioList"}
      onClick={() => setSelected(id)}
    >
      {title}
    </li>
  );
}

PortfolioList.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  setSelected: PropTypes.func.isRequired,
};

export default PortfolioList;
