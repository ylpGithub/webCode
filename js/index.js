/**
 * Created by Administrator on 2017/3/23.
 */
$(function(){

    var imgStr = ['img/lb/back_01.jpg','img/lb/back_02.jpg','img/lb/back_03.jpg','img/lb/back_04.jpg'];
    $creatSwiper(imgStr);

    var parts = ['img/hzs/bh.jpg','img/hzs/cj.jpg','img/hzs/gx.jpg','img/hzs/zs.jpg','img/hzs/zt.jpg','img/hzs/zx.jpg'];
    $creatPartners(parts);

    //获取数据方法：
    //第一种：普通获取json中的数据
    $.getJSON("json/index.json",function(data){
        $creatProduct(data);
    });

    //第二种：获取xml文件
    //function getXmlData(){
    //    var xmldoc=loadXML();
    //    var elements = xmldoc.getElementsByTagName("item");
    //    var datas = [];
    //    for (var i = 0; i < elements.length; i++) {
    //        var cpmc = elements[i].getElementsByTagName("cpmc")[0].firstChild.nodeValue;
    //        var cpms = elements[i].getElementsByTagName("cpms")[0].firstChild.nodeValue;
    //        var jsonData = {"cpmc":cpmc,"cpms":cpms};
    //        datas.push(jsonData);
    //    }
    //    $creatProduct(datas);
    //}
    //getXmlData();


    //第三种：使用ajax获取json文件中的数据
    //$.ajax({
    //    type:"GET",
    //    url:"json/index.json",
    //    dataType:"json",
    //    success:function(data){
    //        $creatProduct(data);
    //    },
    //    error: function () {
    //        alert("Ajax请求数据失败!");
    //    },
    //    async:false
    //});

    //第四种：使用ajax获取xml文件中的数据
    //$.ajax({
    //    type:"GET",
    //    url:"xml/index.xml",
    //    dataType:"xml",
    //    success:function(data){
    //        var elements = data.getElementsByTagName("item");
    //        var datas = [];
    //        for (var i = 0; i < elements.length; i++) {
    //            var cpmc = elements[i].getElementsByTagName("cpmc")[0].firstChild.nodeValue;
    //            var cpms = elements[i].getElementsByTagName("cpms")[0].firstChild.nodeValue;
    //            var jsonData = {"cpmc":cpmc,"cpms":cpms};
    //            datas.push(jsonData);
    //        }
    //        $creatProduct(datas);
    //    },
    //    error: function () {
    //        alert("Ajax请求数据失败!");
    //    },
    //    async:false
    //});

    //第五种：使用php获取数据库中的数据
    /*$.get('php/index.php',function(data) { //此处data是php的返回值
        var data1 = JSON.parse(data);
        $creatProduct(data1);
    });*/

})

//轮播图
function $creatSwiper(swiperImg){
    var innhtml = '';
    var bulletInnhtml = '';

    for(var i = 0;i<swiperImg.length;i++){
        if(i==0){
            innhtml+= '<div class="swiper-slide swiper-slide-active" data-swiper-slide-index="'+i+'"><img class="swiper-img" src="'+swiperImg[i]+'"/> </div>';
            bulletInnhtml+='<span class="swiper-pagination-bullet swiper-pagination-bullet-active"></span>';
        }else{
            innhtml+= '<div class="swiper-slide" data-swiper-slide-index="'+i+'"><img class="swiper-img" src="'+swiperImg[i]+'"/> </div>';
            bulletInnhtml+='<span class="swiper-pagination-bullet"></span>';
        }
    }
    $('.swiper-wrapper').append(innhtml);
    $('.swiper-pagination').append(bulletInnhtml);
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        slidesPerView: 1,
        paginationClickable: true,
        spaceBetween: 0,
        initialSlide : 0,
        autoplay: 5000,
        loop: true,
        autoplayDisableOnInteraction: false
    });
}

//创建产品列表
function $creatProduct(products){
    var innhtmls='';
    $(products).each(function(){
        innhtmls+= '<li><h2>'+this.cpmc+'</h2><div><p>'+this.cpms+'</p></div></li>';
    });
    $('.product-list').append(innhtmls);
}

//合作伙伴展示列表
function $creatPartners(parts){
    var innhtml1='';
    for(var i=0;i<parts.length;i++){
        innhtml1+='<li><img src="'+parts[i]+'">';
    }
    $('.partners').append(innhtml1);
}

function loadXML(){
    var xmlDoc;
    if (window.XMLHttpRequest)
    {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp=new XMLHttpRequest();
    }
    else
    {// code for IE6, IE5
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.open("GET","xml/index.xml",false);
    xmlhttp.send();
    xmlDoc=xmlhttp.responseXML;
    return xmlDoc;
}