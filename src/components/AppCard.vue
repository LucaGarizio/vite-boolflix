<script>
import { store } from "../store";

export default {
	name: "AppCard",
	props: {
		info: Object,
		myImg: String,
	},
	data() {
		return {
			store,
			languageFlags: {
				it: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Flag_of_Italy.svg/400px-Flag_of_Italy.svg.png",
				es: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Spain.svg/400px-Flag_of_Spain.svg.png",
				fr: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/396px-Flag_of_France.svg.png",
				en: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_the_United_Kingdom_%283-5%29.svg/400px-Flag_of_the_United_Kingdom_%283-5%29.svg.png",
			},
			movieNotFound: {
				error:
					"https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-1932.jpg",
			},
		};
	},
};
</script>

<template>
	<div class="img-container">
		<img
			:src="movieNotFound.error"
			alt=""
			class="poster"
			v-if="info.poster_path === null || info.poster_path === ''"
		/>
		<img v-else class="poster" :src="myImg + info.poster_path" alt="" />

		<div class="info-container">
			<h3>Titolo Film: {{ info.title || info.name }}</h3>
			<h3>Titolo Originale: {{ info.original_title || info.original_name }}</h3>
			<img
				class="flags"
				:src="
					languageFlags[info.original_language]
						? languageFlags[info.original_language]
						: 'https://iiwiki.us/mediawiki/images/d/d2/SUFlag28Stars.svg'
				"
				:alt="info.original_language"
			/>
			<h3>
				Vote rating:
				{{ Math.ceil(info.vote_average / 2).toFixed(1) }}
			</h3>
			<p>Overview: {{ info.overview }}</p>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.poster {
	display: block;
}

.info-container {
	display: none;
}

.img-container:hover .poster {
	display: none;
}

.img-container:hover .info-container {
	display: block;
	text-align: left;
	padding: 10px 10px 0;
	background-color: #000;
	color: #fff;

	h3,
	p {
		margin: 10px 0;
	}
}
.img-container {
	margin: 20px 0;

	.poster {
		width: 342px;
		height: 500px;
	}
}

h2 {
	text-transform: uppercase;
	font-size: 30px;
}

.img-container,
.info-container {
	width: 342px;
	height: 500px;
	img {
		border: 1px solid #ddd;
	}
}
.flags {
	width: 40px;
}
</style>
