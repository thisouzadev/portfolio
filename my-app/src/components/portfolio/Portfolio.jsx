/* eslint-disable require-jsdoc */
import React, {useEffect, useState} from 'react';
import './portfolio.scss';
import PortfolioList from '../portfolioList/PortfolioList';
import {
  frontPortfolio,
  backPortfolio,
  pythonPortfolio,
} from '../../data';
function Portfolio() {
  const [selected, setSelected] = useState('front end');
  const [data, setData] = useState([]);
  const list = [
    {
      id: 'front end',
      title: 'front end',
    },
    {
      id: 'back end',
      title: 'back end',
    },
    {
      id: 'python',
      title: 'ciencia da computação',
    },
  ];

  useEffect(() => {
    switch (selected) {
      case 'front end':
        setData(frontPortfolio);
        break;
      case 'back end':
        setData(backPortfolio);
        break;
      case 'python':
        setData(pythonPortfolio);
        break;
      default:
        setData(frontPortfolio);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            key={item.id}
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((data) => (

          <div key={data.id} className="item" >
            <img
              src={data.img}
              alt=""
            />
            <h3>{data.title}</h3>
          </div>

        ))}
      </div>
    </div>
  );
}

export default Portfolio;
