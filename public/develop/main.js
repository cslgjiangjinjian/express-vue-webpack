import Vue from 'vue'
import VueRouter from 'vue-router'

//依赖一个 *.vue组件
import App from './components/App'
import ComMain from './components/Main.vue' 
Vue.use(VueRouter);
	
Vue.config.debug = true;

var Index = Vue.extend({})
 //挂载Vue 根实例
// new Vue({
//  	el:'#index',
//  	components:{
//  		//在配置中包含依赖的组件
//  		app:App
//  	}
//  })

var router = new VueRouter()
router.map({
	'/':{
    	component:App
    },
    '/main': {
        component: ComMain
    }
})
// router.redirect({//定义全局的重定向规则。全局的重定向会在匹配当前路径之前执行。
//     '*':"/App"//重定向任意未匹配路径到/index
// });

router.start(Index, '#index')