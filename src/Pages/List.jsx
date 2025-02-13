import React from 'react';
import Row from './Row';
import requests from '../Utils/requests';

const List = () => {
  return (
    <>
      <div className=''>
      <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      {/* <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} /> */}
      <Row title="Top Series" fetchUrl={requests.fetchRomanceTVSeries}/>
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      </div>
    </>
  )
}

export default List