<template>
<v-app><v-content>
<v-container>

	<h1>Service</h1>

	<article>
		<v-row class="mb-10" no-gutters>
			<v-col cols="12" sm="6">
				<h2>ウェブコンテンツ制作</h2>
			</v-col>
			<v-col cols="12" sm="6" class="text-right">
				 <v-chip class="ma-1 caption" label color="corpChips" dark>運用</v-chip>
				 <v-chip class="ma-1 caption" label color="corpChips" dark>コンサルティング</v-chip>
				 <v-chip class="ma-1 caption" label color="corpChips" dark>制作</v-chip>
				 <v-chip class="ma-1 caption" label color="corpChips" dark>企画</v-chip>
			</v-col>
		</v-row>
		<h3 class="mb-10">各種ウェブサイトの企画設計から開発構築まで</h3>
		<p class="mb-10">ウェブサイト立ち上げ、あるいは既存サイトのリニューアルやコンテンツ追加など、幅広くお客様のご要望をうかがい、目標を達成するために効果的な企画やデザインをご提案いたします。</p>

		<v-row fluid justify="center">
			<v-col cols="6" sm="3">
				<v-card class="pa-4 corpColor1--text caption" outlined tile align="center" color="corpColor2">
					コーポレートサイト
				</v-card>
			</v-col>
			<v-col cols="6" sm="3">
				<v-card class="pa-4 corpColor1--text caption" outlined tile align="center" color="corpColor2">
					キャンペーンサイト
				</v-card>
			</v-col>
			<v-col cols="6" sm="3">
				<v-card class="pa-4 corpColor1--text caption" outlined tile align="center" color="corpColor2" >
					ショッピングサイト
				</v-card>
			</v-col>
			<v-col cols="6" sm="3">
				<v-card class="pa-4 corpColor1--text caption" outlined tile align="center" color="corpColor2">
					CMSサイト構築
				</v-card>
			</v-col>
		</v-row>

	</article>

	<article>
		<v-row class="mb-10" no-gutters>
			<v-col cols="12" sm="6">
				<h2>ウェブアプリケーション制作</h2>
			</v-col>
			<v-col cols="12" sm="6" class="text-right">
				 <v-chip class="ma-1 caption" label color="corpChips" dark caption>企画</v-chip>
				 <v-chip class="ma-1 caption" label color="corpChips" dark caption>開発</v-chip>
				 <v-chip class="ma-1 caption" label color="corpChips" dark caption>コンサルティング</v-chip>
				 <v-chip class="ma-1 caption" label color="corpChips" dark caption>サポート</v-chip>
			</v-col>
		</v-row>
		<h3 class="mb-10">何でもできる大きなアプリケーションよりも運営と管理が容易な小さなアプリケーションを<br/>
		<span class="body-2">PHP／javaScript／DataBase／各種フレームワーク</span></h3>
		<p class="mb-10">本当に使用したい機能だけに特化した、運営と管理が容易なアプリケーションを独自に開発することで、様々な要望に迅速に対応することを可能とし、お客様やユーザにとって本当に便利なサービスの提供が可能となります。</p>

		<v-row fluid justify="center">
			<v-col cols="6" sm="3">
				<v-card class="pa-4 corpColor1--text caption" outlined tile align="center" color="corpColor2">
					お問い合わせ
				</v-card>
			</v-col>
			<v-col cols="6" sm="3">
				<v-card class="pa-4 corpColor1--text caption" outlined tile align="center" color="corpColor2">
					登録フォーム
				</v-card>
			</v-col>
			<v-col cols="6" sm="3">
				<v-card class="pa-4 corpColor1--text caption" outlined tile align="center" color="corpColor2" >
					メールフォーム
				</v-card>
			</v-col>
			<v-col cols="6" sm="3">
				<v-card class="pa-4 corpColor1--text body-2" outlined tile align="center" color="corpColor2">
					商品管理
				</v-card>
			</v-col>

			<v-col cols="6" sm="3">
				<v-card class="pa-4 corpColor1--text body-2" outlined tile align="center" color="corpColor2">
					検索システム
				</v-card>
			</v-col>

			<v-col cols="6" sm="3">
				<v-card class="pa-4 corpColor1--text body-2" outlined tile align="center" color="corpColor2">
					更新システム
				</v-card>
			</v-col>

			<v-col cols="6" sm="3">
				<v-card class="pa-4 corpColor1--text body-2" outlined tile align="center" color="corpColor2">
					会員ページ構築
				</v-card>
			</v-col>
		</v-row>

	</article>

</v-container>
</v-content></v-app>
</template>

<style>
	article{
		width:100%;
		max-width:800px;
		margin:0 auto;
		border-top:solid 1px #ccc;
		padding:40px 0 40px 0;
	}

</style>
