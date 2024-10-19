import React, { useState } from 'react';
import './App.css';
import userImg from './assets/elon.png';
import { FaChevronDown,FaSearch } from "react-icons/fa";

const App = () => {
  const [searchText, setSearchText] = useState("");
  const [selected, setSelected] = useState("All");
  return (
    <div className='dashboard-container'>
      <header>
        <div className="search-field">
          <FaSearch/>
          <input
            className='search-student'
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder='Search student' />
        </div>
        <div className="user-icon">
          <img src={userImg} alt="user-profile" />
          <p>Suman Roy <span><FaChevronDown /></span></p>
        </div>
      </header>
      <section>
        <div className="student-card-wrapper">
          <div className="student-card-container">
            <h2>Students</h2>
            <div className="container-options">
              <a id={selected === "All" && "selected"} 
              onClick={()=>setSelected("All")}
              href="#">All</a>
              <a id={selected === "Active" && "selected"} 
              onClick={()=>setSelected("Active")}
              href="#">Active</a>
              <a id={selected === "Inactive" && "selected"} 
              onClick={()=>setSelected("Inactive")}
              href="#">Inactive</a>
            </div>
          </div>
          <div className="card-flexbox">
            
          </div>
        </div>
      </section>
    </div>
  )
}

export default App;