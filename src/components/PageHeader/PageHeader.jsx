import './pageHeader.scss';
import React from 'react';
import bg from '../../assets/footer-bg.jpg';


export default function PageHeader(props) {
  return (
    <div className="page_header" style={{backgroundImage: `url(${bg})`}}>
            <h2>{props.children}</h2>
        </div>
  )
}
