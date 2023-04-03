import React from 'react';
import { Link } from "react-router-dom";
import Edit from '../img/edit.svg';
import Delete from '../img/delete.svg';
import Menu from '../components/Menu'
const Single = () => {
  return (
    <div className='single'>
      <div className='content'>
        <img src='https://images7.alphacoders.com/617/617537.jpg' alt=''/>
        <div className='user'>
          <img src='https://thumbs.dreamstime.com/b/male-icon-vector-user-person-profile-avatar-flat-color-glyph-pictogram-illustration-117610350.jpg' alt=''/>
        
        <div className='info'>
          <span>Gabriel</span>
          <p>Posted 2 days ago</p>
        </div>
        
        <div className='edit'>
          <Link to={`/write?edit=2`}>
          <img src={Edit} alt='' />
          </Link>
          <img src={Delete} alt='' />
      </div>
      </div>
      <h1>Ullamco velit ad sit deserunt quis occaecat aliqua.</h1>
      <p>Laborum elit dolor incididunt mollit aute tempor aliquip. Qui ea minim laborum dolore fugiat irure cillum. Elit consectetur exercitation occaecat qui aliqua in. Ipsum consequat reprehenderit nisi do cupidatat magna culpa exercitation duis voluptate est. Excepteur labore et ex non nisi nisi nostrud Lorem ipsum aliqua elit. Fugiat do irure veniam incididunt est enim anim culpa cillum elit aliqua aliqua et.
        <br />
        <br />
        <p> Laborum elit dolor incididunt mollit aute tempor aliquip. Qui ea minim laborum dolore fugiat irure cillum. Elit consectetur exercitation occaecat qui aliqua in. Ipsum consequat reprehenderit nisi do cupidatat magna culpa exercitation duis voluptate est. Excepteur labore et ex non nisi nisi nostrud Lorem ipsum aliqua elit. Fugiat do irure veniam incididunt est enim anim culpa cillum elit aliqua aliqua et. </p>
        <br />
      </p>
      </div>
      <Menu />
    </div>
  )
}

export default Single