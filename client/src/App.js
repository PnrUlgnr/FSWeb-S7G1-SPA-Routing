import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Switch ,Route } from "react-router-dom";
  
import KaydedilenlerListesi from './Filmler/KaydedilenlerListesi';
import FilmListesi from './Filmler/FilmListesi';
import Film from './Filmler/Film';

export default function App () {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const FilmleriAl = () => {
      axios
        .get('http://localhost:5001/api/filmler') // Burayı Postman'le çalışın
        .then(response => {
          console.log(response)
          setMovieList(response.data)
          // Bu kısmı log statementlarıyla çalışın
          // ve burdan gelen response'u 'movieList' e aktarın
        })
        .catch(error => {
          console.error('Sunucu Hatası', error);
        });
    }
    FilmleriAl();
  }, []);

  const KaydedilenlerListesineEkle = movie => {
    let film=saved.find(item=>item.id==movie.id)
    if(!film){
      setSaved([...saved,movie])
    }

    
    
    // Burası esnek. Aynı filmin birden fazla kez "saved" e eklenmesini engelleyin
  };

  return (

    <div>
      <KaydedilenlerListesi list={saved} />

      <Switch>

        <Route exact path="/">
          <FilmListesi movies = {movieList}/>
        </Route>
        <Route path="/filmler/:id">
          <Film click={KaydedilenlerListesineEkle}/>

        </Route>
      </Switch>

      
      
    </div>
  );
}
