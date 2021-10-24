import React, { useState } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faSearch } from '@fortawesome/free-solid-svg-icons';
import { faStickyNote } from '@fortawesome/free-solid-svg-icons';

import img1 from './Images/img1.jpg';
import img2 from './Images/img2.jpg';

const getFilteredItems = (query, items) => {
  if (!query) {
    return items;
  }
  // return items.filter(song => song.name.includes(query))
}

function App() {
  const [query, setQuery] = useState('');
  const handleFormSubmit = async(e)=>{
    e.preventDefault()
    console.log("christabel")
  }
  const handleChange = async(e)=>{
    e.preventDefault()
    console.log(e.target.value)
  }
  // const filteredItems = getFilteredItems(query, items);
  return (
    <>
    <main>
      <div className="sidebar">
        <h2 className="logo">Bluecube</h2>
        <p className="side-btns">
        <FontAwesomeIcon icon={faStickyNote} /> Home
        </p>
        <p className="side-btns">
        <FontAwesomeIcon icon={faStickyNote} /> Home
        </p>
        <h5 className="side-header">SHARE</h5>
      <p className="side-btns">
        <i class="fa fa-bar-chart side-icon" aria-hidden="true"></i> Ranking
      </p>
      <p className="side-btns">
        <i class="fa fa-male side-icon" aria-hidden="true"></i>Party
      </p>
      <p className="side-btns">
        <i class="fa fa-university side-icon" aria-hidden="true"></i>Challenge
      </p>
      <p className="side-btns">
        <i class="fa fa-connectdevelop side-icon" aria-hidden="true"></i>Connect
      </p>
      <p className="side-btns">
        <i class="fa fa-users side-icon" aria-hidden="true"></i> Parade
      </p>
      <p className="side-btns">
        <i class="fa fa-users side-icon" aria-hidden="true"></i> Group
      </p>
      </div>
      <div className="mainbar">
      <div className="search">
      <form className="search__form" onSubmit={handleFormSubmit}>
      <FontAwesomeIcon className="search__icon" icon={faSearch} />
      <input className="search__input" name="search" type="text" placeholder="Find something..." onChange={e => {
        handleChange(e)
        setQuery(e.target.value)}} />
        <button className="search__button" type="submit">Search</button>
      </form>
      </div>
        <div className="dropdown-section">
        <p className="dropdown">
          World <FontAwesomeIcon icon={faChevronDown} />
        </p>
        <p className="dropdown">
          Following <FontAwesomeIcon icon={faChevronDown} />
        </p>
        <p className="dropdown">
          Popular <FontAwesomeIcon icon={faChevronDown} />
        </p>
        <p className="dropdown">
          Post <FontAwesomeIcon icon={faChevronDown} />
        </p>
        <p className="dropdown">
          Gender <FontAwesomeIcon icon={faChevronDown} />
        </p>
        <p className="dropdown">
          Location <FontAwesomeIcon icon={faChevronDown} />
        </p>
        <p className="dropdown">
          Profession <FontAwesomeIcon icon={faChevronDown} />
        </p>
      </div>
      
      </div>
    </main>

      {/* <main>
      <div className="sidebar">
      <h2 className="logo">bluecube</h2>
      <p class="side-btns">
        <i className="fa fa-home side-icon" aria-hidden="true"></i> Home
      </p>
      <p className="side-btns">
        <i className="fa fa-address-book side-icon" aria-hidden="true"></i> Message
      </p>
      <h5 className="side-header">SHARE</h5>
      <p class="side-btns">
        <i className="fa fa-bar-chart side-icon" aria-hidden="true"></i> Ranking
      </p>
      <p className="side-btns">
        <i className="fa fa-male side-icon" aria-hidden="true"></i>Party
      </p>
      <p className="side-btns">
        <i className="fa fa-university side-icon" aria-hidden="true"></i>Challenge
      </p>
      <p className="side-btns">
        <i className="fa fa-connectdevelop side-icon" aria-hidden="true"></i>Connect
      </p>
      <p className="side-btns">
        <i className="fa fa-users side-icon" aria-hidden="true"></i> Parade
      </p>
      <p className="side-btns">
        <i className="fa fa-users side-icon" aria-hidden="true"></i> Group
      </p>
      </div>

      <div className="mainbar">
      <input className="searchbar" type="text" placeholder="Find something..." onChange={e => setQuery(e.target.value)} />
        <button>Search</button>
        <div className="dropdown-section">
        <p className="dropdown">
          World <i className="fa fa-caret-down" aria-hidden="true"></i>
        </p>
        <p className="dropdown">
          Following <i className="fa fa-caret-down" aria-hidden="true"></i>
        </p>
        <p className="dropdown">
          Popular <i className="fa fa-caret-down" aria-hidden="true"></i>
        </p>
        <p className="dropdown">
          Post <i className="fa fa-caret-down" aria-hidden="true"></i>
        </p>
        <p className="dropdown">
          Gender <i className="fa fa-caret-down" aria-hidden="true"></i>
        </p>
        <p className="dropdown">
          Location <i className="fa fa-caret-down" aria-hidden="true"></i>
        </p>
        <p className="dropdown">
          Profession <i className="fa fa-caret-down" aria-hidden="true"></i>
        </p>
      </div>
      <div className="picture-grid-section">
        <div className="image-container">
          <img className="image-grid" src={img1} alt="img1" />
          <div className="image-text">
            <h2 className="image-name">Toyin, 16</h2>
            <p>
              <i className="fa fa-map-marker" aria-hidden="true"> </i> Abuja,
              Nigeria
            </p>
          </div>
        </div>
        <div className="image-container">
          <img className="image-grid" src={img2} alt="img2" />
          <div className="image-text">
            <h2 className="image-name">Toyin, 16</h2>
            <p>
              <i className="fa fa-map-marker" aria-hidden="true"> </i> Abuja,
              Nigeria
            </p>
          </div>
        </div>
        <div className="image-container">
          <img className="image-grid" src="./pictures/3.jpg" />
          <div className="image-text">
            <h2 className="image-name">Toyin, 16</h2>
            <p>
              <i className="fa fa-map-marker" aria-hidden="true"> </i> Abuja,
              Nigeria
            </p>
          </div>
        </div>
        <div className="image-container">
          <img className="image-grid" src="./pictures/4.jpg" />
          <div className="image-text">
            <h2 className="image-name">Toyin, 16</h2>
            <p>
              <i className="fa fa-map-marker" aria-hidden="true"> </i> Abuja,
              Nigeria
            </p>
          </div>
        </div>
        <div className="image-container">
          <img className="image-grid" src="./pictures/5.jpg" />
          <div className="image-text">
            <h2 className="image-name">Toyin, 16</h2>
            <p>
              <i className="fa fa-map-marker" aria-hidden="true"> </i> Abuja,
              Nigeria
            </p>
          </div>
        </div>
        <div className="image-container">
          <img className="image-grid" src="./pictures/6.jpg" />
          <div className="image-text">
            <h2 className="image-name">Toyin, 16</h2>
            <p>
              <i className="fa fa-map-marker" aria-hidden="true"> </i> Abuja,
              Nigeria
            </p>
          </div>
        </div>
        <div className="image-container">
          <img className="image-grid" src="./pictures/7.jpg" />
          <div className="image-text">
            <h2 className="image-name">Toyin, 16</h2>
            <p>
              <i className="fa fa-map-marker" aria-hidden="true"> </i> Abuja,
              Nigeria
            </p>
          </div>
        </div>
        <div className="image-container">
          <img className="image-grid" src="./pictures/8.jpg" />
          <div className="image-text">
            <h2 className="image-name">Toyin, 16</h2>
            <p>
              <i className="fa fa-map-marker" aria-hidden="true"> </i> Abuja,
              Nigeria
            </p>
          </div>
        </div>
        <div className="image-container">
          <img className="image-grid" src="./pictures/9.jpg" />
          <div className="image-text">
            <h2 className="image-name">Toyin, 16</h2>
            <p>
              <i className="fa fa-map-marker" aria-hidden="true"> </i> Abuja,
              Nigeria
            </p>
          </div>
        </div>
        <div className="image-container">
          <img className="image-grid" src="./pictures/10.jpg" />
          <div className="image-text">
            <h2 className="image-name">Toyin, 16</h2>
            <p>
              <i className="fa fa-map-marker" aria-hidden="true"> </i> Abuja,
              Nigeria
            </p>
          </div>
        </div>
      </div>
      </div>
  
      </main> */}
    </>
  );
}

export default App;
