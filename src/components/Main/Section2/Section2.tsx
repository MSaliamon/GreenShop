import './Section2.scss';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import cardData from '../../../data/Card';

const Section2: React.FC = () => {
  const [priceRange, setPriceRange] = useState(200);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [topFilter, setTopFilter] = useState<'all' | 'new' | 'sale'>('all');

  useEffect(() => {
    console.log('Render triggered - State:', { topFilter, selectedCategory, priceRange });
  }, [topFilter, selectedCategory, priceRange]);

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    setPriceRange(value);
  };

  const handleCategoryClick = (e: React.MouseEvent<HTMLAnchorElement>, category: string) => {
    e.preventDefault();
    setSelectedCategory(category);
    setTopFilter('all');
  };

  const handleTopFilterClick = (e: React.MouseEvent<HTMLAnchorElement>, filter: 'all' | 'new' | 'sale') => {
    e.preventDefault();
    setTopFilter(filter);
    setSelectedCategory(null);
    setPriceRange(200);
  };

  let filteredCards = cardData.filter((item) => item.price <= priceRange);
  if (topFilter === 'new') {
    filteredCards = filteredCards.slice(0, 4);
  } else if (topFilter === 'sale') {
    filteredCards = filteredCards.filter((item) => item.sale === true);
  }
  if (selectedCategory) {
    filteredCards = filteredCards.filter((item) => item.category === selectedCategory);
  }
  let currentCards = filteredCards;

  return (
    <section className="section2">
      <div className="section2-container1">
        <div className="section2-box1">
          <p className="section2-box1__title">Categories</p>
          <ul className="section2-box1__list">
            {['House Plants', 'Potter Plants', 'Seeds', 'Big Plants', 'Succulents', 'Terrariums', 'Gardening', 'Accessories'].map((category) => (
              <li key={category} className="section2-box1__item">
                <a
                  href="#"
                  className="section2-box1__link"
                  onClick={(e) => handleCategoryClick(e, category)}
                >
                  {category}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="section2-box2">
          <p className="section2-box2__text">Price Range</p>
          <div className="section2-box2__cont">
            <input
              type="range"
              min="39"
              max="200"
              value={priceRange}
              onChange={handlePriceChange}
              className="section2-box2__cont-input"
            />
            <p className="section2-box2__cont-price">
              Price: <span className="section2-box2__cont-price--span">$39 - ${priceRange}</span>
            </p>
          </div>
        </div>
      </div>

      <div className="section2-container2">
        <ul className="section2-container2__list">
          <li className="section2-container2__item">
            <a
              href="#"
              className={`section2-container2__link ${topFilter === 'all' ? 'active' : ''}`}
              onClick={(e) => handleTopFilterClick(e, 'all')}
            >
              All Plants
            </a>
          </li>
          <li className="section2-container2__item">
            <a
              href="#"
              className={`section2-container2__link ${topFilter === 'new' ? 'active' : ''}`}
              onClick={(e) => handleTopFilterClick(e, 'new')}
            >
              New Arrivals
            </a>
          </li>
          <li className="section2-container2__item">
            <a
              href="#"
              className={`section2-container2__link ${topFilter === 'sale' ? 'active' : ''}`}
              onClick={(e) => handleTopFilterClick(e, 'sale')}
            >
              Sale
            </a>
          </li>
        </ul>

        <div className="section2-container2__box">
          {currentCards.length > 0 ? (
            currentCards.map((item) => (
              <Link to={`/product/${item.id}`} key={item.id} className="card">
                <img src={item.image} alt={item.title} />
                <h3 className="card__title">{item.title}</h3>
                <p className="card__price">${item.price}</p>
              </Link>
            ))
          ) : (
            <p>No cards available for the selected filter.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Section2;

