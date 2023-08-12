import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import req_URLS from '../req'

const Home = () => {
  return (
    <>
     <Main/>
     <Row rowId={'1'}  name={'UpComing'} fetchURL={req_URLS.requestUpcoming}/>
     <Row rowId={'2'}  name={'Popular'} fetchURL={req_URLS.requestPopular}/>
     <Row rowId={'3'}  name={'Trending'} fetchURL={req_URLS.requestTrending}/>
     <Row rowId={'4'}  name={'Top Rated'} fetchURL={req_URLS.requestTopRated}/>
     <Row  rowId={'5'} name={'Horror'} fetchURL={req_URLS.requestHorror}/>
    </>
  )
}

export default Home