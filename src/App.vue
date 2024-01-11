<script>
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";

import axios from "axios";
import { store } from "./store";

export default {
	components: {
		AppHeader,
		AppMain,
	},
	data() {
		return {
			store,
		};
	},
	methods: {
		getMovie() {
			let myApiM = store.apiMovie;

			let myApiS = store.apiSeries;
			if (store.searchMovie !== "") {
				myApiM += `&query=${store.searchMovie}`;
			}
			axios.get(myApiM).then((res) => {
				console.log(res.data.results);
				store.getMovie = res.data.results;
			});

			if (store.searchTvSeries !== "") {
				myApiS += `&query=${store.searchMovie}`;
			}
			axios.get(myApiS).then((res) => {
				console.log(res.data.results);
				store.getTvSeries = res.data.results;
			});
		},
	},
	created() {
		this.getMovie();
	},
};
</script>

<template>
	<AppHeader @search="getMovie" />
	<AppMain />
</template>

<style lang="scss">
@use "../styles/partials/variables" as *;
@use "../styles/general.scss" as *;

* {
	padding: 0;
	margin: 0;
	box-sizing: border-box;
}

// img {
// 	width: 100px;
// }
</style>
