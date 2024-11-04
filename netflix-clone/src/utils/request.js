const API_KEY = process.REACT_APP_API_KEY;
const request = {
    fetchTreading: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOrginal:`/discover/tv?api_key = ${API_KEY}&with_network=21`,
    fetchTopReatedMovies:`/movie/top_rated?api_key = ${API_KEY}&language=en-US&page=1`,
    fetchActionMovies:`/discover/movie?api_key = ${API_KEY}&with_geners=28`,
    fetchComedyMovies:`/discover/movie?api_key = ${API_KEY}&with_geners=35`,
    fetchHorrorMovies:`/discover/movie?api_key = ${API_KEY}&with_geners=27`,
    fetchRomanticMovies:`/discover/movie?api_key = ${API_KEY}&with_geners=10749`,
    fetchDocumentaries:`/discover/movie?api_key = ${API_KEY}&with_geners=99`,
    fetchTvShow:`tv/popular?api_key=${API_KEY}&language=en-US&page=1`
};
export default request;