<template>
<v-app><v-content>
<v-container>

	<h1>Access</h1>

	<v-card class="mx-auto -mab" max-width="800">
		<!-- <v-img src="@/assets/map.png" class="white--text"></v-img> -->

		<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.8021482888657!2d139.78186892981404!3d35.6818734039999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188945268f33a9%3A0x22ce0ae5706b8f27!2z44CSMTAzLTAwMTQg5p2x5Lqs6YO95Lit5aSu5Yy65pel5pys5qmL6JuO5q6755S677yR5LiB55uu77yS77yV4oiS77yUIOaXpeacrOapi-aghOODk-ODqzXpmo4!5e0!3m2!1sja!2sjp!4v1548378512507" frameborder="0" class="ifmap" allowfullscreen></iframe>

		<v-card-text>
			<p>東京都中央区日本橋蛎殻町1-25-4 日本橋栄ビル5階</p>
			<dt>
				<dd class="trafficZ">東京メトロ　半蔵門線　水天宮前駅　3、4 出口 徒歩3分</dd>
				<dd class="trafficTH">東京メトロ　東西線・日比谷線　茅場町駅　4a 出口 徒歩4分</dd>
			</dt>
			
		</v-card-text>
	</v-card>

</v-container>
</v-content></v-app>
</template>

<style>
	.ifmap{
		width:100%; height:400px
	}

	.trafficAdd, .trafficZ, .trafficTH{
		position: relative;
		margin: 0;
		padding: 0 0 0 40px;
	}

	.trafficZ::before {
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		margin: auto;
		content: "";
		width: 15px;
		height: 15px;
		-webkit-border-radius: 50%;
		border-radius: 50%;
		border: 3px solid #A671B9;
	}

	.trafficTH::before {
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		margin: auto;
		content: "";
		width: 15px;
		height: 15px;
		-webkit-border-radius: 50%;
		border-radius: 50%;
		border: 3px solid #1994D4;
	}

	.trafficTH::after {
		position: absolute;
		top: 0;
		bottom: 0;
		left: 18px;
		margin: auto;
		content: "";
		width: 15px;
		height: 15px;
		-webkit-border-radius: 50%;
		border-radius: 50%;
		border: 3px solid #8B9EA9;
	}

	dt{
		border-top:solid 1px #CCC;
		padding-top:10px;
	}
</style>
