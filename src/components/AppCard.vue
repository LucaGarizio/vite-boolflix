<script>
// importa store
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
		<!-- se non trova l'immagine di copertina allora mostra immagine 404 -->
		<img
			:src="movieNotFound.error"
			alt=""
			class="poster"
			v-if="info.poster_path === null || info.poster_path === ''"
		/>
		<!-- altrimenti mostra immagine copertina -->
		<img v-else class="poster" :src="myImg + info.poster_path" alt="" />

		<div class="info-container">
			<div class="title">
				<!-- stampa i titoli sia per i film che per le serie tv -->
				<h4>Titolo Film: {{ info.title || info.name }}</h4>
				<h4>
					Titolo Originale: {{ info.original_title || info.original_name }}
				</h4>
			</div>

			<!-- se trova trova la lingua carica la bandiera corrispondente altrimenti carica l'immagine della bandiera di default -->
			<img
				class="flags"
				:src="
					languageFlags[info.original_language]
						? languageFlags[info.original_language]
						: 'https://iiwiki.us/mediawiki/images/d/d2/SUFlag28Stars.svg'
				"
				:alt="info.original_language"
			/>
			<div class="rate">
				<!-- carica 5 stelle -->
				<div class="stars" v-for="star in 5">
					<i
						:class="[
							// aggiunge la classe di base della stella
							'fa-regular',
							'fa-star',
							// arrotonda il valore del della stringa del voto per eccessso dividilo  per 2 e non mettere nessun valore dopo la virgola

							// 	aggiungi la classe per colorare la stella in base al valore del numero della stringa
							star <= Math.ceil(info.vote_average / 2).toFixed(0)
								? 'fa-star-colored'
								: '',
						]"
					></i>
				</div>
			</div>
			<div class="overview">
				<!-- se non trova la descrizione allora scrivi -->
				<p v-if="info.overview === ''">Overview: Nothing to show</p>
				<!-- altimenti mostra la descrizione -->
				<p v-else>Overview: {{ info.overview }}</p>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.info-container {
	display: none;
}

.img-container:hover .poster {
	display: none;
}

.img-container:hover .info-container {
	display: block;
	text-align: left;
	padding: 12px 10px 0;
	background-color: #000;
	color: #fff;
	cursor: pointer;
}
.img-container {
	margin: 20px 0;

	.poster {
		width: 342px;
		height: 510px;
		display: block;
	}
}

h2 {
	text-transform: uppercase;
	font-size: 30px;
}

.img-container,
.info-container {
	width: 342px;
	height: 510px;
}
.flags {
	width: 40px;
	margin: 5px 0;
}
.rate {
	display: flex;
}
.stars {
	font-size: 20px;
}
.fa-star-colored {
	color: yellow;
}
</style>
