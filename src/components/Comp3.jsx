import React from 'react'
import "./Comp3.css";
const Comp3 = () => {
  return (
    <div className='card-container'>
      <div className="card">
        <h3>Logo</h3>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <ul>
          <li>
            <img src="https://cdn.icon-icons.com/icons2/2714/PNG/512/instagram_logo_thin_icon_171701.png" alt="img" style={{width:"40px", height:"40px"}}/>
          </li>
          <li>
            <img src="https://cdn-icons-png.flaticon.com/512/733/733635.png" alt="img" style={{width:"40px", height:"40px"}}/>
          </li>
          </ul>
      </div>
      <div className="card2">
      <div className="left">
        <h2>header</h2>
        <h2>Footer</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A assumenda sint adipisci! Tempore dolor facere quaerat aut ipsam porro culpa.</p>
      </div>
      <div className="right">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVTUaQh9ok73ldty8iDLEmqZ1V05peg5Yk8Q&usqp=CAU" alt="img" />
        </div>
      </div>
      <div className="footer">
        <div className='item'>
          <h2>Block Header</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam accusamus consectetur quis, fuga quasi consequuntur </p>
        </div>
        <div className='item'>
          <h2>Block Header</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam accusamus consectetur quis, fuga quasi consequuntur </p>
        </div>
        <div className='item'>
          <h2>Block Header</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam accusamus consectetur quis, fuga quasi consequuntur </p>
        </div>
      </div>
    </div>
   
  )
}

export default Comp3