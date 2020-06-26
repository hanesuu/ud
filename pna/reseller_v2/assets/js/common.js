$(document).ready(function(){
	/* gnb layout */
	$(".header").find(".btn-nav").click(function(){
	  $(this).parents(".top").next("nav").toggleClass("hide");
	  $(this).parents("#app").find(".wrap-content").toggleClass("wide");
	  $(this).parents("#app").find(".footer").toggleClass("wide");
	});	
	$(window).resize(function (){		
		if ($("body").width() < 768 ){
			$(".header").children("nav").addClass("hide");
			$("#app").find(".wrap-content").addClass("wide");
			$("#app").find(".footer").addClass("wide");
		}
	});

	/* gnb collpse */
	$(".depth2").hide();

	$(".depth1").children(".depth2").parent("li").addClass("add-arr");
	$(".depth1.add-arr").children("a").click(function(){
		$(this).parent(".add-arr").toggleClass("active").children(".depth2").slideToggle(200);
	});

	/* gnb each */
	//홈
	$(".mj1").find(".nav > ul > li:nth-child(1)").addClass("active").children(".depth2").show();
	$(".mj1").find(".top").children(".location").children(".menu1").text("홈").next().hide();

	//리셀러 관리
	$(".mj2").find(".nav > ul > li:nth-child(2)").addClass("active").children(".depth2").show().children("li:first-child").addClass("active");
	$(".mj2").find(".top").children(".location").children(".menu1").text("리셀러 관리").next().hide();
	$(".mj2-1").find(".nav > ul > li:nth-child(2)").addClass("active").children(".depth2").show().children("li:nth-child(2)").addClass("active");
	$(".mj2-1").find(".top").children(".location").children(".menu1").text("리셀러 관리");
	$(".mj2-1").find(".top").children(".location").children(".menu2").text("리셀러 등록");

	//판매점 관리
	$(".mjstore").find(".nav > ul > li:nth-child(3)").addClass("active").children(".depth2").show().children("li:first-child").addClass("active");
	$(".mjstore").find(".top").children(".location").children(".menu1").text("판매점 관리").next().hide();
	$(".mjstore-1").find(".nav > ul > li:nth-child(3)").addClass("active").children(".depth2").show().children("li:nth-child(2)").addClass("active");
	$(".mjstore-1").find(".top").children(".location").children(".menu1").text("판매점 관리");
	$(".mjstore-1").find(".top").children(".location").children(".menu2").text("판매점 등록");

	//결제 관리
    $(".mj3").find(".nav > ul > li:nth-child(4)").addClass("active");
    $(".mj3").find(".top").children(".location").children(".menu1").text("결제 관리");
    $(".mj3").find(".top").children(".location").children(".menu2").text("결제 현황");

	//유료 API 관리

	//정산 관리	
	$(".mjadjust").find(".nav > ul > li:nth-child(6)").addClass("active").children(".depth2").show().children("li:first-child").addClass("active");
	$(".mjadjust").find(".top").children(".location").children(".menu1").text("정산 관리");
	$(".mjadjust").find(".top").children(".location").children(".menu2").text("결제 마진 정산");
	$(".mjadjust-1").find(".nav > ul > li:nth-child(2)").addClass("active").children(".depth2").show().children("li:nth-child(2)").addClass("active");
	$(".mjadjust-1").find(".top").children(".location").children(".menu1").text("정산 관리");
	$(".mjadjust-1").find(".top").children(".location").children(".menu2").text("API 마진 정산");

    //이용안내
    $(".mj5-1").find(".nav > ul > li:nth-child(7)").addClass("active").children(".depth2").show().children("li:nth-child(1)").addClass("active");
    $(".mj5-1").find(".top").children(".location").children(".menu1").text("이용안내");
    $(".mj5-1").find(".top").children(".location").children(".menu2").text("영업/수익 안내");

    $(".mj5-4").find(".nav > ul > li:nth-child(7)").addClass("active").children(".depth2").show().children("li:nth-child(4)").addClass("active");
    $(".mj5-2").find(".top").children(".location").children(".menu1").text("이용안내");
    $(".mj5-2").find(".top").children(".location").children(".menu2").text("후불계약 안내");

    //설정
	$(".mj7-1").find(".nav > ul > li:nth-child(8)").addClass("active").children(".depth2").show();
	$(".mj7-1").find(".top").children(".location").children(".menu1").text("설정");
    $(".mj7-1").find(".top").children(".location").children(".menu2").text("계정정보");
	$(".mj7-2").find(".nav > ul > li:nth-child(8)").addClass("active").children(".depth2").show().children("li:nth-child(2)").addClass("active");
    $(".mj7-2").find(".top").children(".location").children(".menu1").text("설정");
    $(".mj7-2").find(".top").children(".location").children(".menu2").text("비밀번호 변경");
	$(".mj7-3").find(".nav > ul > li:nth-child(8)").addClass("active").children(".depth2").show().children("li:nth-child(3)").addClass("active");
    $(".mj7-3").find(".top").children(".location").children(".menu1").text("설정");
    $(".mj7-3").find(".top").children(".location").children(".menu2").text("기본 마진 설정");

    //고객센터
	$(".mj6-1").find(".nav > ul > li:nth-child(9)").addClass("active").children(".depth2").show();
	$(".mj6-1").find(".top").children(".location").children(".menu1").text("고객센터");
    $(".mj6-1").find(".top").children(".location").children(".menu2").text("공지사항");
	$(".mj6-2").find(".nav > ul > li:nth-child(9)").addClass("active").children(".depth2").show().children("li:nth-child(2)").addClass("active");
    $(".mj6-2").find(".top").children(".location").children(".menu1").text("고객센터");
    $(".mj6-2").find(".top").children(".location").children(".menu2").text("문의하기");
	$(".mj6-3").find(".nav > ul > li:nth-child(9)").addClass("active").children(".depth2").show().children("li:nth-child(2)").addClass("active");
    $(".mj6-3").find(".top").children(".location").children(".menu1").text("고객센터");
    $(".mj6-3").find(".top").children(".location").children(".menu2").text("자주 묻는 질문");

});