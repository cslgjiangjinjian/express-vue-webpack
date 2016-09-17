<template>
	<div class="list">
		<com-header></com-header>
		<com-main></com-main>
		<div>list</div>
	</div>
</template>

<script>
	import ComHeader from './Header.vue'
	import ComMain from './Main.vue'
	export default {
		components:{
			ComHeader,
			ComMain
		}
	}
</script>