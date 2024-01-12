import {reactive} from 'vue'

export const store = reactive ({
    // chiamata film
    apiMovie: "https://api.themoviedb.org/3/search/movie?api_key=bb57367467b266b673545cd0384a5a51",
    getMovie: [],
    searchMovie: "",

    // chiamata serie tv
    apiSeries: "https://api.themoviedb.org/3/search/tv?api_key=bb57367467b266b673545cd0384a5a51",
    getTvSeries: [],

    // chiamata immmagini copertina
    apiImg: "https://image.tmdb.org/t/p/w342",

    // bonus chiamata genere film e serie tv
    // apiGenre: "https://api.themoviedb.org/3/genre/list?api_key=bb57367467b266b673545cd0384a5a51",
    // getGenre: [],
    // searchGenre: "",
})