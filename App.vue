<template>

	<v-app id="keep">

		<!-- * head bar * -->
		<v-app-bar app clipped-left color="primary">
			<v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
			<span class="title ml-3 mr-5" @click="router_to('/')">
				Chaordic&nbsp;<span class="font-weight-light">Design
			</span></span>
			<div class="flex-grow-1"></div>
		</v-app-bar>

		<!-- * navi * -->
		<v-navigation-drawer
			v-model="drawer"
			app
			clipped
			color="grey lighten-4"
		>
			<v-list
				dense
				class="grey lighten-4"
			>
				ddd
				<v-list-item @click="router_to('./service')">
					<v-list-item-action><v-icon>add</v-icon></v-list-item-action>
					<v-list-item-content>
						<v-list-item-title class="grey--text">
							Service
						</v-list-item-title>
					</v-list-item-content>
				</v-list-item>

				<v-list-item @click="router_to('./works')">
					<v-list-item-action><v-icon>add</v-icon></v-list-item-action>
					<v-list-item-content>
						<v-list-item-title class="grey--text">
							Works
						</v-list-item-title>
					</v-list-item-content>
				</v-list-item>

				<v-list-item @click="router_to('./company')">
					<v-list-item-action><v-icon>add</v-icon></v-list-item-action>
					<v-list-item-content>
						<v-list-item-title class="grey--text">
							Company
						</v-list-item-title>
					</v-list-item-content>
				</v-list-item>

				<v-list-item @click="router_to('./access')">
					<v-list-item-action><v-icon>add</v-icon></v-list-item-action>
					<v-list-item-content>
						<v-list-item-title class="grey--text">
							Access
						</v-list-item-title>
					</v-list-item-content>
				</v-list-item>

				<v-list-item @click="router_to('./contact')">
					<v-list-item-action><v-icon>add</v-icon></v-list-item-action>
					<v-list-item-content>
						<v-list-item-title class="grey--text">
							Contacts
						</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
			</v-list>
		</v-navigation-drawer>

		<!-- * contents * -->
		<transition>
			<router-view/>
		</transition>

	</v-app>

</template>



<script>
	export default{
		props:{
			source: String
		},
		data: () => ({
			drawer: null
		}),
		methods:{
			router_to (path){
			  this.$router.push({ path: path })
			}
		}
	}
</script>

<style>
	#keep .v-navigation-drawer__border {
		display: none
	}

	/*
	 * 共通
	 */
	.-mab{ margin-bottom:70px }
	h1{
		text-align:center;
		margin-top: 70px;
		margin-bottom:70px;
		font-size: 40px;
		font-weight: 300;
		color: #999;
	}

	h2{
		font-size: 26px;
		font-weight: 300;
	}

	h3{
		font-size: 20px;
		font-weight: 300;
	}

	/*
	 * ページ遷移のトランジション
	 */
	.v-enter{			transform: translate(-150px, 0); opacity: 0; }
	.v-enter-to{		opacity: 1; }
	.v-enter-active{	transition: all 1s 0s ease; }
	.v-leave{			transform: translate(0, 0); opacity: 1; }
	.v-leave-to{		transform: translate(150px, 0);　opacity: 0; }
	.v-leave-active{	transition: all .5s 0s ease; }
</style>

