import './Section2.scss';
import { useState, useEffect } from 'react';
import cardData from '../../../data/Card';

const Section2: React.FC = () => {
  const [priceRange, setPriceRange] = useState(1230);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [topFilter, setTopFilter] = useState<'all' | 'new' | 'sale'>('all');
  const cardsPerPage = 2;

  useEffect(() => {
    console.log('Render triggered - State:', { topFilter, selectedCategory, currentPage, priceRange });
  }, [topFilter, selectedCategory, currentPage, priceRange]);

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    setPriceRange(value);
  };

  const handleFilter = () => {
    setCurrentPage(1);
  };

  const handleCategoryClick = (e: React.MouseEvent<HTMLAnchorElement>, category: string) => {
    e.preventDefault();
    setSelectedCategory(category);
    setTopFilter('all');
    setCurrentPage(1);
  };

  const handleTopFilterClick = (e: React.MouseEvent<HTMLAnchorElement>, filter: 'all' | 'new' | 'sale') => {
    e.preventDefault();
    setTopFilter(filter);
    setSelectedCategory(null);
    setPriceRange(1230);
    setCurrentPage(1);
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
  const totalPages = Math.ceil(filteredCards.length / cardsPerPage);
  if (topFilter !== 'all' || selectedCategory) {
    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;
    currentCards = filteredCards.slice(indexOfFirstCard, indexOfLastCard);
  }

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

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
              max="1230"
              value={priceRange}
              onChange={handlePriceChange}
              className="section2-box2__cont-input"
            />
            <p className="section2-box2__cont-price">
              Price: <span className="section2-box2__cont-price--span">$39 - ${priceRange}</span>
            </p>
            <button className="section2-box2__cont-btn button" onClick={handleFilter}>
              Filter
            </button>
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
              <div key={item.id} className="card">
                <img src={item.image} alt={item.title} />
                <h3 className="card__title">{item.title}</h3>
                <p className="card__price">${item.price}</p>
                <button className="card__btn button">Add to Cart</button>
              </div>
            ))
          ) : (
            <p>No cards available for the selected filter.</p>
          )}
        </div>
        {(topFilter !== 'all' || selectedCategory) && totalPages > 1 && (
          <div className="section2-container2__pagination">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                onClick={() => paginate(i + 1)}
                className="section2-container2__pagination-button"
                disabled={currentPage === i + 1}
              >
                {i + 1}
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Section2;
