import {reactive} from 'vue'

export const store = reactive ({
    getMovie: [],
    apiMovie: "https://api.themoviedb.org/3/search/movie?api_key=bb57367467b266b673545cd0384a5a51",
    searchMovie: "",
    // apiSeries: "https://api.themoviedb.org/3/search/tv?api_key=bb57367467b266b673545cd0384a5a51"
})