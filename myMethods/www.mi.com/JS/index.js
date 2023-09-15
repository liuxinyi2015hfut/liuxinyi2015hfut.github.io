// head begin
$(".cart").hover(function () {
	$(this).children(".shopCart").stop().slideToggle("fast");
});
$(".shopCartLoad span").each(function (index, item) {
	var time = 100 * index;
	setTimeout(function () {
		setInterval(function () {
			$(item).animate({height: "8px", marginBottom: "6px", opacity: 0.2}, 300).animate({
				height: "20px",
				marginBottom: 0,
				opacity: 0.7
			}, 300)
		}, 600);
	}, 100 * index)
});
$(".selectR").on("click", function () {
	$(".srBackground").fadeIn(150).siblings("#selectRegion").show(150).animate({top: "50%", opacity: 1}, 400);
});
$("#selectRegion .close").on("click", function () {
	$("#selectRegion").animate({
		top: "-100px",
		opacity: 0
	}, 400).hide(150).siblings(".srBackground").delay(400).fadeOut(150);
});
// head end

// Navigation begin
function navHideW() {
	var winW = document.body.clientWidth || document.documentElement.clientWidth;
	var bodyW = $(".nav").css("width");
	$(".navHide").css("width", function () {
		var val = winW < parseFloat(bodyW) ? bodyW : "100%";
		return val
	});
}

navHideW();
$(window).resize(navHideW);
$.ajax({
	url: "JSON/navHideData.json",
	type: "get",
	dataType: "json",
	success: function (data) {
		var navTemplate = $("#navTemplate").html();
		var navResult = ejs.render(navTemplate, {navHideData: data});
		$(".navHide").html(navResult)
		$(".navMenu>a:lt(7)").mouseover(function () {
			$($(this).attr("href")).show().siblings().hide();
		});
		$(".navHide ul").mouseover(function () {
			$(this).show().siblings().hide();
		});
		load();
	}
});
$(".navMenu").hover(function () {
	$(this).children(".navHide").stop().slideToggle(300);
});
$.ajax({
	url: "JSON/navSearchData.json",
	type: "get",
	dataType: "json",
	success: function (data) {
		var defaultWords = data.defaultWords;
		var hotWords = data.hotWords;
		var str = "";
		$(defaultWords).each(function (index, item) {
			str += "<li><a href='###'><span>" + item.Key + "</span><span class='keyWordNum'>约有" + item.Rst + "件</span></a></li>";
		});
		$(".defaultWords")[0].innerHTML = str;
		var strHot = "";
		$.each(hotWords, function (index, item) {
			strHot += "<a href='" + item.link + "'>" + item.title + "</a>"
		});
		$(".navSearch .hotWords").html(strHot);
	}
});
$(".navSearch form").hover(function () {
	$(this).children("input").toggleClass("searchHover")
});
$(".searchText").focusin(function () {
	$(this).siblings("input").andSelf().addClass("searchFocus");
	$(".keywordList").children(".defaultWords").andSelf().show();
}).focusout(function () {
	$(this).siblings("input").andSelf().removeClass("searchFocus");
	$(".keywordList").children(".defaultWords").andSelf().hide();
});
// Navigation end

//banner begin
(function () {
	var myBannerSwiper = new Swiper(".banner .swiper-container", {
		loop: true,
		effect: 'fade',
		fade: {
			crossFade: false
		},
		speed: 600,
		autoplay: 5000,
		autoplayDisableOnInteraction: false,
		simulateTouch: false,
		pagination: ".banner .swiper-pagination",
		paginationClickable: true,
		lazyLoading: true,
		lazyLoadingPrevNext: true,
		prevButton: '.banner .swiper-button-prev',
		nextButton: '.banner .swiper-button-next'
	});
})();
//banner end


//aside begin
(function () {
	var data = [
		{
			"title": "手机 电话卡",
			"href": "https://www.mi.com/buyphone/",
			"goods": [
				{
					"name": "\u5c0f\u7c736",
					"href": "\/\/www.mi.com\/mi6\/",
					"image": "\/\/c1.mifile.cn\/f\/i\/g\/2015\/cn-index\/xm6_80.png",
					"choose": [
						"选购", "\/\/item.mi.com\/product\/10000041.html"]
				},
				{
					"name": "\u5c0f\u7c73Max 2",
					"href": "\/\/www.mi.com\/max2\/",
					"image": "\/\/c1.mifile.cn\/f\/i\/g\/2015\/cn-index\/max2_80.jpg",
					"choose": [
						"选购", "\/\/item.mi.com\/product\/10000057.html"]
				},
				{
					"name": "\u5c0f\u7c73\u624b\u673a5c",
					"href": "\/\/www.mi.com\/mi5c\/",
					"image": "\/\/c1.mifile.cn\/f\/i\/g\/2015\/cn-index\/5c_80.png",
					"choose": [
						"选购", "\/\/item.mi.com\/buyphone\/mi5c"]
				},
				{
					"name": "\u5c0f\u7c73Note 2",
					"href": "\/\/www.mi.com\/minote2\/",
					"image": "\/\/c1.mifile.cn\/f\/i\/g\/2015\/xmNOTE2-80.jpg",
					"choose": [
						"选购", "\/\/item.mi.com\/buyphone\/minote2"]
				},
				{
					"name": "\u5c0f\u7c73MIX",
					"href": "\/\/www.mi.com\/mix\/",
					"image": "\/\/c1.mifile.cn\/f\/i\/g\/2015\/MIX-80.jpg",
					"choose": [
						"选购", "\/\/item.mi.com\/buyphone\/mix"]
				},
				{
					"name": "\u5c0f\u7c735s",
					"href": "\/\/www.mi.com\/mi5s",
					"image": "\/\/c1.mifile.cn\/f\/i\/g\/2015\/xm5S-80.jpg",
					"choose": [
						"选购", "\/\/item.mi.com\/buyphone\/mi5s"]
				},
				{
					"name": "\u5c0f\u7c735s Plus",
					"href": "\/\/www.mi.com\/mi5splus\/",
					"image": "\/\/c1.mifile.cn\/f\/i\/g\/2015\/xm5S-plus-80.jpg",
					"choose": [
						"选购", "\/\/item.mi.com\/buyphone\/mi5splus"]
				},
				{
					"name": "\u7ea2\u7c73Note 4X",
					"href": "\/\/www.mi.com\/redminote4x\/",
					"image": "\/\/c1.mifile.cn\/f\/i\/g\/2015\/cn-index\/hmn4x80.png",
					"choose": [
						"选购", "\/\/item.mi.com\/buyphone\/redminote4x"]
				},
				{
					"name": "\u7ea2\u7c734X",
					"href": "\/\/www.mi.com\/redmi4x\/",
					"image": "\/\/c1.mifile.cn\/f\/i\/g\/2015\/cn-index\/hm4x_80.png",
					"choose": [
						"选购", "\/\/item.mi.com\/buyphone\/redmi4x"]
				},
				{
					"name": "\u7ea2\u7c734",
					"href": "\/\/www.mi.com\/redmi4\/",
					"image": "\/\/c1.mifile.cn\/f\/i\/g\/2015\/hm4-80.jpg",
					"choose": [
						"选购", "\/\/item.mi.com\/buyphone\/redmi4"]
				},
				{
					"name": "\u7ea2\u7c734A",
					"href": "\/\/www.mi.com\/redmi4a\/",
					"image": "\/\/c1.mifile.cn\/f\/i\/g\/2015\/hm4A-80.jpg",
					"choose": [
						"选购", "\/\/item.mi.com\/product\/10000039.html"]
				},
				{
					"name": "\u5bf9\u6bd4\u624b\u673a",
					"href": "\/\/www.mi.com\/compare\/",
					"image": "\/\/c1.mifile.cn\/f\/i\/15\/goods\/sidebar\/compare.jpg"
				},
				{
					"name": "\u5c0f\u7c73\u79fb\u52a8 \u7535\u8bdd\u5361",
					"href": "\/\/www.mi.com\/mimobile\/",
					"image": "\/\/c1.mifile.cn\/f\/i\/15\/goods\/sidebar\/mimobile.jpg"
				},
				{
					"name": "\u79fb\u52a84G+\u4e13\u533a",
					"href": "\/\/www.mi.com\/xinpeijian\/",
					"image": "\/\/c1.mifile.cn\/f\/i\/g\/2015\/cn-index\/80.jpg"
				}
			]
		},
		{
			"title": "笔记本 平板",
			"href": "https://www.mi.com/mibookair/",
			"goods": [
				{
					"name": "\u7b14\u8bb0\u672c12.5\u82f1\u5bf8",
					"href": "\/\/www.mi.com\/mibookair-12\/",
					"image": "\/\/c1.mifile.cn\/f\/i\/g\/2015\/cn-index\/bijiben80.jpg",
					"choose": ["选购", "\/\/item.mi.com\/product\/10000032.html"]
				},
				{
					"name": "\u7b14\u8bb0\u672c13.3\u82f1\u5bf8",
					"href": "\/\/www.mi.com\/mibookair\/",
					"image": "\/\/c1.mifile.cn\/f\/i\/g\/2015\/cn-index\/bijiben80.jpg",
					"choose": ["选购", "\/\/item.mi.com\/product\/10000061.html"]
				},
				{
					"name": "\u5c0f\u7c73\u5e73\u677f3",
					"href": "\/\/www.mi.com\/mipad3\/",
					"image": "\/\/c1.mifile.cn\/f\/i\/g\/2015\/cn-index\/mipad3_80.jpg",
					"choose": ["选购", "\/\/item.mi.com\/product\/10000038.html"]
				},
				{
					"name": "USB-C\u7535\u6e90\u9002\u914d\u5668",
					"href": "\/\/item.mi.com\/1170700024.html",
					"image": "\/\/c1.mifile.cn\/f\/i\/g\/2015\/cn-index\/bjbcdq80.jpg"
				},
				{
					"name": "USB-C\u8f6c\u63a5\u5668",
					"href": "\/\/item.mi.com\/1163000011.html",
					"image": "\/\/c1.mifile.cn\/f\/i\/15\/goods\/sidebar\/usbzjqggg80.jpg"
				},
				{
					"name": "\u5c0f\u7c73\u7b14\u8bb0\u672c\u5185\u80c6\u5305",
					"href": "\/\/list.mi.com\/accessories\/tag?id=neidanbao",
					"image": "\/\/c1.mifile.cn\/f\/i\/g\/2015\/cn-index\/neidanbao80.jpg"
				},
				{
					"name": "\u60a6\u7c73\u673a\u68b0\u952e\u76d8",
					"href": "\/\/www.mi.com\/keyboard\/",
					"image": "\/\/c1.mifile.cn\/f\/i\/g\/2015\/cn-index\/ymjp80.jpg"
				},
				{
					"name": "\u5c0f\u7c73\u4fbf\u643a\u9f20\u6807",
					"href": "\/\/www.mi.com\/mouse\/",
					"image": "\/\/c1.mifile.cn\/f\/i\/g\/2015\/cn-index\/shubiao80.jpg"
				},
				{
					"name": "\u5c0f\u7c73\u65e0\u7ebf\u9f20\u6807",
					"href": "\/\/www.mi.com\/mouse-2\/",
					"image": "\/\/c1.mifile.cn\/f\/i\/g\/2015\/cn-index\/wxsb80.png"
				},
				{
					"name": "\u9f20\u6807\u57ab",
					"href": "\/\/list.mi.com\/59",
					"image": "\/\/c1.mifile.cn\/f\/i\/g\/2015\/cn-index\/xmsbd80.jpg"
				},
				{
					"name": "DisplayPort\u8f6c\u63a5\u5668",
					"href": "\/\/item.mi.com\/product\/5770.html",
					"image": "\/\/c1.mifile.cn\/f\/i\/g\/2015\/cn-index\/USBC80.jpg"
				}
			]
		},
		{
			"title": "电视 盒子",
			"href": "https://www.mi.com/buytv/",
			"goods": [
				{
					"name": "\u5c0f\u7c73\u7535\u89c64 49\u82f1\u5bf8",
					"href": "\/\/www.mi.com\/mitv4\/49\/",
					"image": "\/\/c1.mifile.cn\/f\/i\/g\/2015\/cn-index\/80xmds_49.jpg"
				},
				{
					"name": "\u5c0f\u7c73\u7535\u89c64 55\u82f1\u5bf8",
					"href": "\/\/www.mi.com\/mitv4\/55\/",
					"image": "\/\/c1.mifile.cn\/f\/i\/g\/2015\/cn-index\/80xmds_55.jpg"
				},
				{
					"name": "\u5c0f\u7c73\u7535\u89c64 65\u82f1\u5bf8",
					"href": "\/\/www.mi.com\/mitv4\/65\/",
					"image": "\/\/c1.mifile.cn\/f\/i\/g\/2015\/cn-index\/80xmds_65.jpg"
				},
				{
					"name": "\u5c0f\u7c73\u7535\u89c64A 43\u82f1\u5bf8",
					"href": "\/\/www.mi.com\/mitv4A\/43\/",
					"image": "\/\/c1.mifile.cn\/f\/i\/g\/2015\/cn-index\/xp80_43.jpg"
				},
				{
					"name": "\u5c0f\u7c73\u7535\u89c64A 49\u82f1\u5bf8",
					"href": "\/\/www.mi.com\/mitv4A\/49\/",
					"image": "\/\/c1.mifile.cn\/f\/i\/g\/2015\/cn-index\/xp80_49.jpg"
				},
				{
					"name": "\u5c0f\u7c73\u7535\u89c64A 55\u82f1\u5bf8",
					"href": "\/\/www.mi.com\/mitv4A\/55\/",
					"image": "\/\/c1.mifile.cn\/f\/i\/g\/2015\/cn-index\/xp80_55.jpg"
				},
				{
					"name": "\u5c0f\u7c73\u7535\u89c64A 65\u82f1\u5bf8",
					"href": "\/\/www.mi.com\/mitv4A\/65\/",
					"image": "\/\/c1.mifile.cn\/f\/i\/g\/2015\/cn-index\/xp80_65.jpg"
				},
				{
					"name": "\u5c0f\u7c73\u7535\u89c63s 48\u82f1\u5bf8",
					"href": "\/\/www.mi.com\/mitv3s\/48\/",
					"image": "\/\/c1.mifile.cn\/f\/i\/15\/goods\/sidebar\/mitv3s48.jpg"
				},
				{
					"name": "\u5c0f\u7c73\u7535\u89c63s 55\u82f1\u5bf8",
					"href": "\/\/www.mi.com\/mitv3s\/55\/",
					"image": "\/\/c1.mifile.cn\/f\/i\/g\/2015\/cn-index\/553s80.png"
				},
				{
					"name": "小米电视4 49英寸",
					"image": "img/aside/3/80xmds_49.jpg",
					"href": "https://www.mi.com/mitv4/49/"
				},
				{
					"name": "小米电视4 49英寸",
					"image": "img/aside/3/80xmds_49.jpg",
					"href": "https://www.mi.com/mitv4/49/"
				},
				{
					"name": "小米电视4 49英寸",
					"image": "img/aside/3/80xmds_49.jpg",
					"href": "https://www.mi.com/mitv4/49/"
				},
				{
					"name": "小米电视4 49英寸",
					"image": "img/aside/3/80xmds_49.jpg",
					"href": "https://www.mi.com/mitv4/49/"
				},
				{
					"name": "小米电视4 49英寸",
					"image": "img/aside/3/80xmds_49.jpg",
					"href": "https://www.mi.com/mitv4/49/"
				},
				{
					"name": "小米电视4 49英寸",
					"image": "img/aside/3/80xmds_49.jpg",
					"href": "https://www.mi.com/mitv4/49/"
				},
				{
					"name": "小米电视4 49英寸",
					"image": "img/aside/3/80xmds_49.jpg",
					"href": "https://www.mi.com/mitv4/49/"
				},
				{
					"name": "小米电视4 49英寸",
					"image": "img/aside/3/80xmds_49.jpg",
					"href": "https://www.mi.com/mitv4/49/"
				},
				{
					"name": "小米电视4 49英寸",
					"image": "img/aside/3/80xmds_49.jpg",
					"href": "https://www.mi.com/mitv4/49/"
				},
				{
					"name": "小米电视4 49英寸",
					"image": "img/aside/3/80xmds_49.jpg",
					"href": "https://www.mi.com/mitv4/49/"
				}
			]
		},
		{
			"title": "路由器 智能硬件",
			"href": "https://www.mi.com/smart/",
			"goods": [
				{
					"name": "九号平衡车",
					"image": "img/aside/4/phcplus80.jpg",
					"href": "https://search.mi.com/search_%E5%B9%B3%E8%A1%A1%E8%BD%A6"
				},
				{
					"name": "九号平衡车",
					"image": "img/aside/4/phcplus80.jpg",
					"href": "https://search.mi.com/search_%E5%B9%B3%E8%A1%A1%E8%BD%A6"
				},
				{
					"name": "九号平衡车",
					"image": "img/aside/4/phcplus80.jpg",
					"href": "https://search.mi.com/search_%E5%B9%B3%E8%A1%A1%E8%BD%A6"
				},
				{
					"name": "九号平衡车",
					"image": "img/aside/4/phcplus80.jpg",
					"href": "https://search.mi.com/search_%E5%B9%B3%E8%A1%A1%E8%BD%A6"
				},
				{
					"name": "九号平衡车",
					"image": "img/aside/4/phcplus80.jpg",
					"href": "https://search.mi.com/search_%E5%B9%B3%E8%A1%A1%E8%BD%A6"
				},
				{
					"name": "九号平衡车",
					"image": "img/aside/4/phcplus80.jpg",
					"href": "https://search.mi.com/search_%E5%B9%B3%E8%A1%A1%E8%BD%A6"
				},
				{
					"name": "九号平衡车",
					"image": "img/aside/4/phcplus80.jpg",
					"href": "https://search.mi.com/search_%E5%B9%B3%E8%A1%A1%E8%BD%A6"
				},
				{
					"name": "九号平衡车",
					"image": "img/aside/4/phcplus80.jpg",
					"href": "https://search.mi.com/search_%E5%B9%B3%E8%A1%A1%E8%BD%A6"
				},
				{
					"name": "九号平衡车",
					"image": "img/aside/4/phcplus80.jpg",
					"href": "https://search.mi.com/search_%E5%B9%B3%E8%A1%A1%E8%BD%A6"
				},
				{
					"name": "九号平衡车",
					"image": "img/aside/4/phcplus80.jpg",
					"href": "https://search.mi.com/search_%E5%B9%B3%E8%A1%A1%E8%BD%A6"
				},
				{
					"name": "九号平衡车",
					"image": "img/aside/4/phcplus80.jpg",
					"href": "https://search.mi.com/search_%E5%B9%B3%E8%A1%A1%E8%BD%A6"
				},
				{
					"name": "九号平衡车",
					"image": "img/aside/4/phcplus80.jpg",
					"href": "https://search.mi.com/search_%E5%B9%B3%E8%A1%A1%E8%BD%A6"
				},
				{
					"name": "九号平衡车",
					"image": "img/aside/4/phcplus80.jpg",
					"href": "https://search.mi.com/search_%E5%B9%B3%E8%A1%A1%E8%BD%A6"
				},
				{
					"name": "九号平衡车",
					"image": "img/aside/4/phcplus80.jpg",
					"href": "https://search.mi.com/search_%E5%B9%B3%E8%A1%A1%E8%BD%A6"
				},
				{
					"name": "九号平衡车",
					"image": "img/aside/4/phcplus80.jpg",
					"href": "https://search.mi.com/search_%E5%B9%B3%E8%A1%A1%E8%BD%A6"
				},
				{
					"name": "九号平衡车",
					"image": "img/aside/4/phcplus80.jpg",
					"href": "https://search.mi.com/search_%E5%B9%B3%E8%A1%A1%E8%BD%A6"
				},
				{
					"name": "九号平衡车",
					"image": "img/aside/4/phcplus80.jpg",
					"href": "https://search.mi.com/search_%E5%B9%B3%E8%A1%A1%E8%BD%A6"
				},
				{
					"name": "九号平衡车",
					"image": "img/aside/4/phcplus80.jpg",
					"href": "https://search.mi.com/search_%E5%B9%B3%E8%A1%A1%E8%BD%A6"
				},
				{
					"name": "九号平衡车",
					"image": "img/aside/4/phcplus80.jpg",
					"href": "https://search.mi.com/search_%E5%B9%B3%E8%A1%A1%E8%BD%A6"
				},
				{
					"name": "九号平衡车",
					"image": "img/aside/4/phcplus80.jpg",
					"href": "https://search.mi.com/search_%E5%B9%B3%E8%A1%A1%E8%BD%A6"
				},
				{
					"name": "九号平衡车",
					"image": "img/aside/4/phcplus80.jpg",
					"href": "https://search.mi.com/search_%E5%B9%B3%E8%A1%A1%E8%BD%A6"
				},
				{
					"name": "九号平衡车",
					"image": "img/aside/4/phcplus80.jpg",
					"href": "https://search.mi.com/search_%E5%B9%B3%E8%A1%A1%E8%BD%A6"
				},
				{
					"name": "九号平衡车",
					"image": "img/aside/4/phcplus80.jpg",
					"href": "https://search.mi.com/search_%E5%B9%B3%E8%A1%A1%E8%BD%A6"
				},
				{
					"name": "九号平衡车",
					"image": "img/aside/4/phcplus80.jpg",
					"href": "https://search.mi.com/search_%E5%B9%B3%E8%A1%A1%E8%BD%A6"
				}
			]
		},
		{
			"title": "移动电源 电池 插线板",
			"href": "https://list.mi.com/accessories/tag?id=dianyuancunchu",
			"goods": [
				{
					"name": "小米移动电源",
					"image": "img/aside/5/dianyuan280.jpg",
					"href": "https://www.mi.com/dianyuan/"
				},
				{
					"name": "小米移动电源",
					"image": "img/aside/5/dianyuan280.jpg",
					"href": "https://www.mi.com/dianyuan/"
				},
				{
					"name": "小米移动电源",
					"image": "img/aside/5/dianyuan280.jpg",
					"href": "https://www.mi.com/dianyuan/"
				},
				{
					"name": "小米移动电源",
					"image": "img/aside/5/dianyuan280.jpg",
					"href": "https://www.mi.com/dianyuan/"
				},
				{
					"name": "小米移动电源",
					"image": "img/aside/5/dianyuan280.jpg",
					"href": "https://www.mi.com/dianyuan/"
				},
				{
					"name": "小米移动电源",
					"image": "img/aside/5/dianyuan280.jpg",
					"href": "https://www.mi.com/dianyuan/"
				},
				{
					"name": "小米移动电源",
					"image": "img/aside/5/dianyuan280.jpg",
					"href": "https://www.mi.com/dianyuan/"
				}
			]
		},
		{
			"title": "耳机 音箱",
			"href": "https://list.mi.com/17",
			"goods": [
				{
					"name": "头戴式耳机轻松版",
					"image": "img/aside/6/tdsqs80.jpg",
					"href": "https://www.mi.com/headphone2/"
				},
				{
					"name": "头戴式耳机轻松版",
					"image": "img/aside/6/tdsqs80.jpg",
					"href": "https://www.mi.com/headphone2/"
				},
				{
					"name": "头戴式耳机轻松版",
					"image": "img/aside/6/tdsqs80.jpg",
					"href": "https://www.mi.com/headphone2/"
				},
				{
					"name": "头戴式耳机轻松版",
					"image": "img/aside/6/tdsqs80.jpg",
					"href": "https://www.mi.com/headphone2/"
				},
				{
					"name": "头戴式耳机轻松版",
					"image": "img/aside/6/tdsqs80.jpg",
					"href": "https://www.mi.com/headphone2/"
				},
				{
					"name": "头戴式耳机轻松版",
					"image": "img/aside/6/tdsqs80.jpg",
					"href": "https://www.mi.com/headphone2/"
				},
				{
					"name": "头戴式耳机轻松版",
					"image": "img/aside/6/tdsqs80.jpg",
					"href": "https://www.mi.com/headphone2/"
				},
				{
					"name": "头戴式耳机轻松版",
					"image": "img/aside/6/tdsqs80.jpg",
					"href": "https://www.mi.com/headphone2/"
				},
				{
					"name": "头戴式耳机轻松版",
					"image": "img/aside/6/tdsqs80.jpg",
					"href": "https://www.mi.com/headphone2/"
				},
				{
					"name": "头戴式耳机轻松版",
					"image": "img/aside/6/tdsqs80.jpg",
					"href": "https://www.mi.com/headphone2/"
				},
				{
					"name": "头戴式耳机轻松版",
					"image": "img/aside/6/tdsqs80.jpg",
					"href": "https://www.mi.com/headphone2/"
				},
				{
					"name": "头戴式耳机轻松版",
					"image": "img/aside/6/tdsqs80.jpg",
					"href": "https://www.mi.com/headphone2/"
				},
				{
					"name": "头戴式耳机轻松版",
					"image": "img/aside/6/tdsqs80.jpg",
					"href": "https://www.mi.com/headphone2/"
				},
				{
					"name": "头戴式耳机轻松版",
					"image": "img/aside/6/tdsqs80.jpg",
					"href": "https://www.mi.com/headphone2/"
				}
			]
		},
		{
			"title": "保护套 贴膜",
			"href": "https://list.mi.com/7",
			"goods": [
				{
					"name": "贴膜",
					"image": "img/aside/7/tiemo.jpg",
					"href": "https://list.mi.com/9"
				},
				{
					"name": "保护套/保护壳",
					"image": "img/aside/7/baohu.jpg",
					"href": "https://list.mi.com/8"
				}
			]
		},
		{
			"title": "线材 支架 存储卡",
			"href": "https://list.mi.com/1",
			"goods": [
				{
					"name": "线材",
					"image": "img/aside/8/xiancai.jpg",
					"href": "https://list.mi.com/16"
				},
				{
					"name": "自拍杆",
					"image": "img/aside/8/zipaigan.jpg",
					"href": "https://search.mi.com/search_%E8%87%AA%E6%8B%8D%E6%9D%86"
				},
				{
					"name": "手机支架",
					"image": "img/aside/8/zhijia.jpg",
					"href": "https://list.mi.com/5"
				},
				{
					"name": "存储卡",
					"image": "img/aside/8/cunchu.jpg",
					"href": "https://list.mi.com/27"
				}
			]
		},
		{
			"title": "箱包 服饰 鞋 眼镜",
			"href": "https://list.mi.com/134",
			"goods": [
				{
					"name": "箱包",
					"image": "img/aside/9/xiangbao-80.jpg",
					"href": "https://list.mi.com/23"
				},
				{
					"name": "90分旅行箱",
					"image": "img/aside/9/lvxingxiang.jpg",
					"href": "https://search.mi.com/search_%E6%97%85%E8%A1%8C%E7%AE%B1"
				},
				{
					"name": "服饰",
					"image": "img/aside/9/huise2-80.jpg",
					"href": "https://list.mi.com/22"
				},
				{
					"name": "米家运动鞋 智能版",
					"image": "img/aside/9/ydx80.jpg",
					"href": "https://search.mi.com/search_%E8%BF%90%E5%8A%A8%E9%9E%8B"
				},
				{
					"name": "TS 尼龙偏光太阳镜",
					"image": "img/aside/9/tyj80.jpg",
					"href": "https://www.mi.com/ts-sunglasses/"
				}
			]
		},
		{
			"title": "米兔 生活周边",
			"href": "https://list.mi.com/20",
			"goods": [
				{
					"name": "米兔玩偶",
					"image": "img/aside/10/mitu-80.jpg",
					"href": "http://mitu.mi.com/"
				},
				{
					"name": "生活周边",
					"image": "img/aside/10/zhoubian1.jpg",
					"href": "https://list.mi.com/24"
				},
				{
					"name": "《小米会刊》",
					"image": "img/aside/10/zazhi1021-80.jpg",
					"href": "https://www.mi.com/zazhi/index.html?1021"
				},
				{
					"name": "毛巾/浴巾",
					"image": "img/aside/10/mj80.jpg",
					"href": "https://search.mi.com/search_%E6%9C%80%E7%94%9F%E6%B4%BB"
				},
				{
					"name": "8H乳胶床品",
					"image": "img/aside/10/rjcd80.jpg",
					"href": "https://search.mi.com/search_%E4%B9%B3%E8%83%B6"
				}
			]
		}
	];
	var template = $("#asideTemplate").html();
	var result = ejs.render(template, {asideData: data});
	$(".asideList").html(result)
})();
$(".asideList").children().mouseenter(function () {
	$(this).children("div").show();
}).mouseleave(function () {
	$(this).children("div").hide();
});
$(".asideList li div").each(function () {
	var num = $(this).children().length;
	var width1 = 265;
	var width2 = 248;
	if (num === 4) {
		$(this).css("width", width2 * num + "px");
		$(this).children().css("width", width2 + "px")
	} else {
		$(this).css("width", width1 * num + "px");
		$(this).children().css("width", width1 + "px")
	}
});
//aside end

//star begin
$.ajax({
	url: "JSON/starData.json",
	type: "get",
	dataType: "json",
	success: function (data) {
		var str = "";
		var star = $("#starTemplate").html();
		var starStr = ejs.render(star, {starData: data})
		$(".star .swiper-wrapper").html(starStr);
		var myStarSwiper = new Swiper(".star .swiper-container", {
			loop: false,
			effect: 'slide',
			speed: 600,
			autoplay: 3000,
			autoplayDisableOnInteraction: false,
			simulateTouch: false,
			slidesPerView: 5,
			slidesPerGroup: 5,
			spaceBetween: 14,
			lazyLoading: true,
			lazyLoadingPrevNext: true,
			pagination: ".star .swiper-pagination",
			paginationClickable: true,
			bulletClass: "bullet",
			bulletActiveClass: "bullet-active",
			paginationBulletRender: function (index, className) {
				if ((index === 0)) {
					return '<span class="left icon_ ' + className + '"></span>';
				} else {
					return '<span class="right icon_ ' + className + '"></span>';
				}
			}
		});
		load()
	}
});
//star end

//main begin
$.ajax({
	url: "JSON/mainData.json",
	type: "get",
	dataType: "json",
	success: function (data) {
		var mainTemplate = $("#mainTemplate").html();
		var mainResult = ejs.render(mainTemplate, {mainData: data});
		$(".mainbg").html(mainResult);
		$(".mainTitle ul li").mouseover(function () {
			$(this).addClass("mainActive").siblings().removeClass("mainActive");
			var num = $.inArray(this, $(this).parent().children());
			$(this).parents(".main").find(".mainRight").children().eq(num).show().siblings().hide();
		});
		$(".mainTitle ul").each(function () {
			$(this).children().eq(0).trigger("mouseover")
		});
		$(".mainRight ul li").mouseover(function () {
			$(this).stop().animate({top: "-2px"}, 200).find(".mainAssessment").stop().animate({
				opacity: 1,
				bottom: 0
			}, 200)
		}).mouseleave(function () {
			$(this).stop().animate({top: 0}, 200).find(".mainAssessment").stop().animate({
				opacity: 0,
				bottom: "-75px"
			}, 200);
		});
		$(".mainLeft a").mouseover(function () {
			$(this).stop().animate({top: "-2px"}, 200)
		}).mouseleave(function () {
			$(this).stop().animate({top: 0}, 200)
		})
		load()
	}
});
//main end

//forYou begin
$.ajax({
	url: "JSON/forYouData.json",
	type: "get",
	dataType: "json",
	success: function (data) {
		var forYouTemplate = $("#forYouTemplate").html();
		var forYouResult = ejs.render(forYouTemplate, {forYouData: data});
		$(".forYouContent").html(forYouResult);
		var forYouSwiper = new Swiper(".forYou .swiper-container", {
			loop: false,
			effect: 'slide',
			speed: 600,
			simulateTouch: false,
			slidesPerView: 5,
			slidesPerGroup: 5,
			spaceBetween: 14,
			lazyLoading: true,
			lazyLoadingPrevNext: true,
			buttonDisabledClass: 'bullet-active',
			prevButton: '.forYou .left',
			nextButton: '.forYou .right'
		});
		load()
	}
});
//forYou end

//hotReview begin
$.ajax({
	url: "JSON/hotReviewData.json",
	type: "get",
	dataType: "json",
	success: function (data) {
		var hotReviewTemplate = $("#hotReviewTemplate").html();
		var hotReviewResult = ejs.render(hotReviewTemplate, {hotReviewData: data});
		$(".hotReviewContent").html(hotReviewResult);
		load()
	}
});
//hotReview end

//content begin
$.ajax({
	url: "JSON/contentData.json",
	type: "get",
	dataType: "json",
	success: function (data) {
		var contentTemplate = $("#contentTemplate").html();
		var contentStr = ejs.render(contentTemplate, {contentData: data});
		$(".conbg .contentMain").html(contentStr);
		var contentSwiper = new Swiper(".contentMain .swiper-container", {
			loop: false,
			effect: 'slide',
			speed: 600,
			simulateTouch: false,
			pagination: ".content .swiper-pagination",
			paginationClickable: true,
			lazyLoading: true,
			lazyLoadingPrevNext: true,
			prevButton: '.contentMain .left',
			nextButton: '.contentMain .right'
		});
		$(".conbg .content-more").hover(function () {
			$(this).css({backgroundColor: $(this).css("borderColor"), color: "#ffffff"})
		}, function () {
			$(this).css({backgroundColor: "#ffffff", color: $(this).css("borderColor")})
		})
		load()
	}
});
//content end

//video begin
$.ajax({
	url: "JSON/videoData.json",
	type: "get",
	dataType: "json",
	success: function (data) {
		var videoTemplate = $("#videoTemplate").html();
		var videoStr = ejs.render(videoTemplate, {videoData: data});
		$(".video .videoMain").html(videoStr);
		$(".videoImg,.videoPlay,.videoTitle a").on("click", function () {
			var myTitle = $(this).parents("li").find(".videoTitle a").html();
			$(".videoWin span").html(myTitle);
			var myVideo = $(this).parents("li").attr("vurl");
			var myImage = $(this).parents("li").attr("poster")
			$(".videoWin iframe").attr("src", "http://hd.mi.com/f/zt/hd/miplayer2/index.html" + "?vurl=" + myVideo + "&poster=" + myImage);
			$(".videoBackground").fadeIn(150).siblings(".videoWin").show(150).animate({top: "50%", opacity: 1}, 400);
		});
		$(".videoWin .close").on("click", function () {
			$(".videoWin iframe").attr("src", "http://hd.mi.com/f/zt/hd/miplayer2/index.html")
			$(".videoWin").animate({
				top: "-100px",
				opacity: 0
			}, 400).hide(150).siblings(".videoBackground").delay(400).fadeOut(150);
		});
		load()
	}
});
//video end

//images delayed load
function load() {
	var winTop = $(window).scrollTop() + $(window).height();
	$("img[setsrc]").each(function (index, item) {
		var imgTop = $(item).offset().top;
		if (imgTop < winTop) {
			var testImg = document.createElement("img");
			var trueAd = $(item).attr("setsrc");
			$(testImg).attr("src", trueAd).on("load", function () {
				$(item).attr("src", trueAd);
				$(item).removeAttr("setsrc");
			});
			testImg = null;
		}
	});
}

load();
$(window).scroll(function () {
	load();
});
