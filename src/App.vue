<script>
// importa componenti
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";

// importa axios
import axios from "axios";

// importa store
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
			let myApiMovie = store.apiMovie;

			let myApiSeries = store.apiSeries;

			// let mySelect = store.apiGenre;

			if (store.searchMovie !== "") {
				myApiMovie += `&query=${store.searchMovie}`;
			}
			axios.get(myApiMovie).then((res) => {
				console.log(res.data.results);
				store.getMovie = res.data.results;
			});

			if (store.searchTvSeries !== "") {
				myApiSeries += `&query=${store.searchMovie}`;
			}
			axios.get(myApiSeries).then((res) => {
				console.log(res.data.results);
				store.getTvSeries = res.data.results;
			});
			store.searchMovie = "";
		},
		// bonus seleziona genere
		// getGenre() {
		// 	let mySelect = store.apiGenre;
		// 	axios.get(mySelect).then((res) => {
		// 		console.log(res.data.genres);
		// 		store.getGenre = res.data.genres;
		// 	});
		// },
	},
	// created() {
	// 	this.getGenre();
	// },
};
</script>

<template>
	<AppHeader @search="getMovie" />
	<AppMain />
</template>

<style lang="scss">
@use "../styles/partials/variables" as *;
@use "../styles/general.scss" as *;
</style>
