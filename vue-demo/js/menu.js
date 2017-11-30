


new Vue({
	el:'#app',
	data:{},
	methods:{

	},
	mounted:function(){
	  layui.use(['element','layer','laypage'], function(){
	  var element = layui.element(); //导航的hover效果、二级菜单等功能，需要依赖element模块
	  var layer = layui.layer;
	  var laypage = layui.laypage
	  //监听导航点击
	  element.on('nav(demo)', function(elem){
	    //console.log(elem)
	    layer.msg(elem.text());
	  });


		//分页

	  laypage({
	    cont: 'demo7'
	    ,pages: 100
	    ,skip: true
	    ,first: false
	    ,last: false
	    ,jump: function(obj, first){
	      if(!first){
	        layer.msg('第 '+ obj.curr +' 页');
	      }
	    }
	  });
  
	});

	}
})

