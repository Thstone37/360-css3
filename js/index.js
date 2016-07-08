/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-07-08 19:25:54
 * @version $Id$
 */
$(function(){
	$("#fullpage").fullpage({
		sectionsColor:['#0da5d6','#2AB561', '#DE8910', '#16BA9D', '#0DA5D6'],
		afterLoad:function(afterlink,index){
            $(".section").removeClass("current");
             setTimeout(function(){
                   $(".section").eq(index-1).addClass("current");
                                },100);
		}
	});
})
