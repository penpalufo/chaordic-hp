export default {
    methods: {

		/*
		 * JSONの検索
		 */
		json_search : (_json, key, word, flag) => {
			var _tmp = _json.filter(function(item, index){
				var skey = key.replace(/[^A-Za-z0-9_.]/g, '');
				// eval('var val = item.' + skey);
				var val = item[skey];
				if (!flag){
					if (val == word) return true;
				}else{
					if (val.indexOf(word) >= 0) return true;
				}
			});
			return _tmp;
		},

		/*
		 * URLのパラメータを取得
		 */
		getUrlParam : (arg) => {
			var _arg  = new Object;
			var pair = location.search.substring(1).split('&');
			for(var i=0;pair[i];i++) {
				var kv = pair[i].split('=');
				_arg[kv[0]]=kv[1];
			}

			if (arg) return decodeURIComponent(_arg[arg]);
			else 	 return decodeURIComponent(_arg);
		},

		/*
		 * 今日の日付
		 */
		get_today: (kugiri) => {
			if (!kugiri) kugiri = '-';
			let dt = new Date();
			let y  = dt.getFullYear();
			let m  = ("00" + (dt.getMonth()+1)).slice(-2);
			let d  = ("00" + dt.getDate()).slice(-2);
			let result = y + kugiri + m + kugiri + d;
			return result;
		},

		/*
		 * 今週
		 */
		get_Week: () => {
			let today 		= new Date();
			let this_year  	= today.getFullYear();
			let this_month 	= today.getMonth();
			let date 		= today.getDate();
			let day_num 	= today.getDay();
			let start_day 	= date - day_num;
			let end_day   	= start_day + 6;
			let day 		= new String('日月火水木金土');
			let _oneweek 	= []
			let active      = false

			for (let i=0; i<=6; i++){
				let dt 	 = new Date(this_year, this_month, start_day + i);
				let yyyy = dt.getFullYear();
				let mm   = ("00" + (dt.getMonth()+1)).slice(-2);
				let dd   = ("00" + dt.getDate()).slice(-2);
				let wk   = day.charAt(dt.getDay());
				active = false
				if (date == dd) active = true

				_oneweek[i] = {
					dt: yyyy + "-" + mm + "-" + dd,
					dt_jp: mm + "月" + dd + "日" + " (" + wk + ")",
					isactive: active
				}
			}

			return _oneweek
		},

		/*
		 * クッキーを取得
		 */
		get_cookie: (key) => {
			var cookies = document.cookie;
			var cookieItem = cookies.split(";");
			var cookieArray = new Array();

			for (var i = 0; i < cookieItem.length; i++) {
				cookieItem[i] = cookieItem[i].trim();
				var elem = cookieItem[i].split("=");
				cookieArray[elem[0]] = decodeURIComponent(elem[1]);
			}

			if (key){
				if (cookieArray[key] == 'undefined') cookieArray[key] = ''
				return cookieArray[key]
			}else{
				return cookieArray
			}
		}
	}
}