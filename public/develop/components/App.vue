<template>
	<div class="app" id="app">
		<com-header></com-header>
		<com-main></com-main>
		<com-footer></com-footer>
	</div>
</template>

<script>
	import ComHeader from './Header.vue'
	import ComFooter from './Footer.vue'
	import ComMain from './Main.vue'

	export default {
		components:{
			ComHeader,
			ComFooter,
			ComMain
		}
	}
</script>