<template>
<v-app><v-content>
<v-container>

	<h1>Works</h1>

	<template v-for="(item, i) in items">
		<v-hover v-slot:default="{ hover }" open-delay="200">
			<v-card class="mx-auto -mab" max-width="750" :elevation="hover ? 16 : 2">
				<v-img v-bind:src="item.img" class="white--text" height="350px">
				<v-card-title class="align-end fill-height"></v-card-title>
				</v-img>

				<v-card-text>
					<span>{{ item.text }}</span>
				</v-card-text>

				<v-card-actions>
					<v-btn text color="orange" @click="jump_to(item.url)">More</v-btn>
				</v-card-actions>

			</v-card>
		</v-hover>
	</template>

</v-container>
</v-content></v-app>
</template>

<script>
export default {
  props: {
    source: String
  },
  methods: {
    jump_to (path) {
      open(path, '_blank')
    }
  },
  data: () => ({
    items: [
      { img: require('@/assets/works-1.jpg'),
        url: 'https://www.tokyo-airport-bldg.co.jp/company/recruit/group/',
        text: 'Japan Airport Terminal Recruiting Information'
      },
      { img: require('@/assets/works-2.jpg'),
        url: 'https://recruit.kiraboshibank.co.jp/',
        text: 'Kiraboshi Bank Recruiting Information'
      },
      { img: require('@/assets/works-3.jpg'),
        url: 'https://lumine-recruit.jp/newgraduate/index.html',
        text: 'LUMINE Recruiting Information'
      },
      { img: require('@/assets/works-4.jpg'),
        url: 'https://lumine-recruit.jp/mate/index.html',
        text: 'LUMINE MATE Recruiting Information'
      },
      { img: require('@/assets/works-5.jpg'),
        url: 'http://interior.okamura.co.jp/home/',
        text: 'OKAMURA Small office and Home interior'
      },
      { img: require('@/assets/works-6.jpg'),
        url: 'http://o-design.okamura.jp/',
        text: 'Okamura o-design'
      },
      { img: require('@/assets/works-7.jpg'),
        url: 'http://www.okamura.co.jp/company/csr/acorn/',
        text: 'Okamura ACON'
      },
      { img: require('@/assets/works-8.jpg'),
        url: 'http://www.nittsushoji.co.jp/kigyou/recruit/',
        text: 'Nittsushoji Recruiting Information'
      },
      { img: require('@/assets/works-9.jpg'),
        url: 'http://www.nittsushoji.co.jp/kigyou/recruit/',
        text: 'Sawayaka Shinkin Recruiting Information'
      },
      { img: require('@/assets/works-10.jpg'),
        url: 'https://www.shibusawa.co.jp/newgrad/',
        text: 'Shibusawa Warehouse Recruiting Information'
      },
      { img: require('@/assets/works-11.jpg'),
        url: 'http://www.showeido.co.jp/',
        text: '正栄堂'
      },
      { img: require('@/assets/works-12.jpg'),
        url: 'http://www.jugyokaizen.com/',
        text: '授業改善支援サービス'
      },
      { img: require('@/assets/works-13.jpg'),
        url: 'https://www.visuamall.com/',
        text: 'visuamall'
      },
      { img: require('@/assets/works-14.jpg'),
        url: '',
        text: 'Global ICU'
      },
      { img: require('@/assets/works-15.jpg'),
        url: '',
        text: 'OB.OG. Session'
      },
      { img: require('@/assets/works-16.jpg'),
        url: '',
        text: 'Nippon Paint Holdings Recruiting Information'
      },
      { img: require('@/assets/works-17.jpg'),
        url: '',
        text: 'Tamatoshi 100th Anniversary'
      },
      { img: require('@/assets/works-18.jpg'),
        url: '',
        text: 'Biogen AVONEX Information'
      },
      { img: require('@/assets/works-19.jpg'),
        url: '',
        text: 'Biogen TYSABRI Information'
      },
      { img: require('@/assets/works-20.jpg'),
        url: '',
        text: 'GlaxoSmithKline GSK Vintage'
      },
      { img: require('@/assets/works-21.jpg'),
        url: '',
        text: 'Tata Consultancy Services Japan Recruiting Information'
      },
      { img: require('@/assets/works-22.jpg'),
        url: '',
        text: 'Humanage'
      },
      { img: require('@/assets/works-23.jpg'),
        url: '',
        text: 'Global Suzuki SX4'
      }
    ]
  })
}
</script>

<style>

</style>
