const key = '95a7106426e81971fa8a996756dc0f19';

const req_URLS = {
    requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US$page=1`,
    requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US$page=1`,
    requestTrending: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=2`,
    requestHorror: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=horror&page=2&include_adult=false`,
    requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=2`,
}

export default req_URLS