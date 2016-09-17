import Vue from 'vue'
//依赖一个 *.vue组件
import List from './components/List'
 
 //挂载Vue 根实例
 new Vue({
 	el:'#body',
 	components:{
 		//在配置中包含依赖的组件
 		app:List
 	}
 })
