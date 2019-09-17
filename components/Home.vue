<template>
<v-app>
	
	<v-content>
		<v-container fluid class="fill-height">
			<v-row>
				<v-col cols="12" align="center">
					<p><img src="@/assets/logo.svg" style="width:270px" /></p>
					<div v-show='timecard_show'>
						{{ staff }}
						<p><v-btn x-large color="secondary" dark v-on:click="onwork" v-show="onwork_show" transition="scroll-x-transition">出社</v-btn></p>
						<p><v-btn x-large color="secondary" dark v-on:click="offwork" v-show="offwork_show" transition="scroll-x-transition">退社</v-btn></p>
						
						<v-row justify="center">
							<v-col cols="12" sm="5" align="center">
								<template>
									<v-simple-table>
										<thead>
											<tr>
												<th class="text-left">date</th>
												<th class="text-left">on</th>
												<th class="text-left">off</th>
											</tr>
										</thead>
										<tbody>
											<tr v-for="item in oneweek" :class="{ active: item.isactive }">
												<td>{{ item.dt_jp }}</td>
												<td>{{ item.onwork }}</td>
												<td>{{ item.offwork }}</td>
											</tr>
										</tbody>
									</v-simple-table>
								</template>
							</v-col>
						</v-row>
					</div>
				</v-col>
			</v-row>
		</v-container>
	</v-content>

	<div class="text-center">
		<v-bottom-sheet v-model="sheet">
			<v-sheet class="text-center" height="200px">
				<v-btn class="mt-6" text color="red" @click="sheet = !sheet">close</v-btn>
				<div class="py-3">{{ message }}</div>
			</v-sheet>
		</v-bottom-sheet>
	</div>

</v-app>
</template>


<style>
</style>




<script>
import axios from 'axios'	// 

	export default {
		data: () => ({
			message: '',
			staff: '',
			onwork_show: false,
			offwork_show: false,
			timecard_show: false,
			oneweek: [],
			weeknum: '0123456'[new Date().getDay()],
			api: 'http://localhost/_timecard/api.php',
			sheet: false,
		}),
		methods:{
			created: () => {
				console.log('* -> created')
			},

			// -- 出社
			onwork: function(){
				axios.get(this.api + '?staff=' + this.staff + '&task=onwork')
				.then(response => {
					console.log(response.data)
					this.onwork_show  = false
					this.offwork_show = true
					this.oneweek[this.weeknum].onwork = response.data;
					this.message = 'good morning!'
					this.sheet = true
				}).catch(error => {
					console.log(error)
				})

			},

			// -- 退社
			offwork: function(){
				axios.get(this.api + '?staff=' + this.staff + '&task=offwork')
				.then(response => {
					this.offwork_show = false
					this.oneweek[this.weeknum].offwork = response.data;
					this.message = 'goodbye! see you!'
					this.sheet = true
				}).catch(error => {
					console.log(error)
				})
			},

			window:onload = () => {
				console.log('* -> window:onload')
			},

		},
		mounted(){
			console.log('* -> mounted')

			// -- 引数の取得
			this.staff = this.getUrlParam('staff')
			if (this.staff == 'undefined') this.staff = ''

			if (!this.staff){
				// -- cookie取得
				this.staff = this.get_cookie('staff')
			}else{
				document.cookie = 'staff=' + this.staff + ';max-age=31536000'
			}

			// -- ホスト判別
			let host = location.hostname
			if (host == 'localhost'){
				this.api = 'http://localhost/_timecard/api.php'
			}else if (host == 'chaordic.jp'){
				this.api = 'https://chaordic.jp/dist/_timecard/api.php'
			}

			// -- 初回JSONの取得
			if (this.staff){
				this.timecard_show = true
				axios.get(this.api + '?staff=' + this.staff)
				.then(response => {
					let _api  = response.data // 返却: response.data
					let today = this.get_today();

					const ip = _api.info.REMOTE_ADDR;
					console.log('ip --> ' + ip);

					if (ip == '::1' || ip == '60.32.131.98'){

						// カレンダー作成
						this.oneweek = this.get_Week()
						for (let i=0; i<=6; i++){
							let _day = this.json_search(_api.timecard, 'workdate', this.oneweek[i].dt, '')
							this.oneweek[i] = Object.assign(this.oneweek[i], _day[0]);
						}

						// console.log(this.oneweek)

						// 今日の出勤状況
						if (this.oneweek[this.weeknum].onwork){
							this.onwork_show = false
							if (this.oneweek[this.weeknum].offwork){
								this.offwork_show = false
							}else{
								this.offwork_show = true
							}
						}else{
							this.onwork_show = true
							this.offwork_show = false
						}

					}else{
						this.timecard_show = false
					}
					
				}).catch(error => {
					console.log(error)
				})
			}
		},
	}

</script>