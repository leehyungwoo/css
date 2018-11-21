$(document).ready(function(){

	//변수h태그에 브라우저의 높이값을 저장
	var ht=$(window).height();
	//브라우저의 높이값을 section의 높이값으로 지정
	$("section").height(ht);

	//브라우저가 리사이즈 될 때마다 브라우저와 section의 높이값을 갱신
	$(window).on("resize",function(){
		var ht=$(window).height();
		$("section").height(ht);
	});
	//각각의 section에서 마우스를 움직이면 //function안의 (event)매개변수불러옴
	$("section").on("mousemove",function(e){
		//변수 posX에 마우스 커서의 X축 위치 저장
		var posX= e.pageX;
		//변수 posY에 마우스 커서의 Y축 위치 저장
		var posY= e.pageY;

		//첫번째 박스의 이미지 위치값을 마우스 커서의 위치값과 연동
		$(".p1").css({"right":160-(posY/30),"top":20-(posX/30)});

		//두번째 박스의 이미지 위치값을 마우스 커서의 위치값과 연동
		$(".p2").css({"right":180-(posX/30),"top":10-(posY/100)});

		//세번째 박스의 이미지 위치값을 마우스 커서의 위치값과 연동
		$(".p3").css({"right":165-(posX/60),"top":20-(posY/100)});
		// $(".p32").css({"right":110+(posX/20),"bottom":-270+(posY/20)});
		// $(".p33").css({"right":-70+(posX/20),"bottom":-130+(posY/20)});

		//네번째 박스으 ㅣ이미지 위치값을 마우스 커서의 위치값과 연동
		$(".p4").css({"right":160-(posX/30),"top":30-(posY/100)});
	});
	//메뉴버튼 클릭시
	$("#menu li").on("click",function(e){
		e.preventDefault();
		//변수 ht에 브라우저의 높이값 저장
		var ht=$(window).height();
		//변수 i에 현재 클릭한 li의 순서값을 저장
		var i=$(this).index();
		//브라우저의 높이값*박스의 순서값은 현재 박스의 스크롤 위치저장
		var nowTop=i*ht;
		//해당 스크롤 위치값으로 문서를 이동
		$("html,body").stop().animate({"scrollTop":nowTop},1400);
	});

	$(window).on("scroll",function(){
		//변수ht에 현재 브라우저의 넓이값 저장
		var ht=$(window).height();
		//변수 scroll에 현재 문서가 스크롤된 거리 저장
		var scroll=$(window).scrollTop();

		for(var i=0; i<5; i++){
			if(scroll>=ht*i&&scroll<ht*(i+1)){
				$("#menu li").removeClass();
				$("#menu li").eq(i).addClass("on");
			};
		}
	//section위에서 마우스 휠을 움직이면
	$("section").on("mousewheel",function(event,delta){
		//마우스 휠을 올렸을때
		if(delta>0){
			//변수 prev에 현재 휠을 움직인 section에서 이전 section의 offset
			var prev=$(this).prev().offset().top;

			$("html,body").stop().animate({"scrollTop":prev},1400,"easeInOutCubic");
		//마우스 휠을 내렸을때
		}else if(delta<0){
			//변수 next에 현재 휠을 움직인 sectio에서 다음 section의 offset
			var next=$(this).next().offset().top;
			//문서 전체를 next에 저장된 위치로 이동
			$("html,body").stop().animate({"scrollTop":next},1400,"easeInOutCubic");
			}
		});
	});
});