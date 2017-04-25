/**
 * Created by Administrator on 2017/3/27.
 */
$(function(){

    //获取json中的数据
    $.get('../json/products.json').done(function(data){
        $createProduct(data);
    });

    //使用php获取数据库中的数据
    $.get('../php/products.php',function(data) { //此处data是php的返回值
        var data1 = JSON.parse(data);
        $createProduct(data1);
    });
})
function $createProduct(products){
    var innhtml='';
    $(products).each(function(){
        innhtml+='<li><a><div><img src="'+this.proimg+'"></div>' +
                '<div><span><b>'+this.protitle+'</b></span><br>' +
                '<p>'+this.prointro+'</p>' +
                '</div></a></li>';
    });
    $('.pro-intro').append(innhtml);

}