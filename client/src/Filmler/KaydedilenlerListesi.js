import React from 'react';
import {useHistory } from 'react-router-dom';

export default function KaydedilenlerListesi(props) {
  const history= useHistory();
  function mainpage (){
    history.push("/")
  }
  return (
    <div className="saved-list">
      <h3>Kaydedilen Filmler:</h3>
      {props.list.map(movie => (
        <span className="saved-movie">{movie.title}</span>
      ))}
      
     <div className="home-button" onClick={()=>mainpage()}>Anasayfa</div>
     
    </div>
  );
}
