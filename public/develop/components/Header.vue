<style type="text/css">
	.header{width: 100%;height: 30px;background-color: #222;color: #fff;}
</style>
<template>
	<header class="header">
		{{head}}
	</header>
</template>
<script type="text/javascript">
	export default {
		data(){
			return {
				head:'this is header'
			}
		}
	}
</script>