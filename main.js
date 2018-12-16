function initialize() {
    var map = new BMap.Map("container");
    //var point = new BMap.Point(121.491, 31.233);
    var navigationControl = new BMap.NavigationControl({
        // 靠左上角位置
        anchor: BMAP_ANCHOR_TOP_LEFT,
        // LARGE类型
        type: BMAP_NAVIGATION_CONTROL_LARGE,
        // 启用显示定位
        enableGeolocation: true
    });
    map.addControl(navigationControl);
    var points = [
        new BMap.Point(-2.349/*766*/, 53.465/*317*/) 
    ];
    for (let i = 0; i < points.length; i++) {
        var marker = new BMap.Marker(points[i]);
        map.addOverlay(marker);
        marker.addEventListener("click", route);
    }
    function route(){
        alert("works")
    };

    // var driving = new BMap.DrivingRoute(map, {
    //     renderOptions: {
    //         map: map,
    //         panel: "results",
    //         autoViewport: true
    //     }
    // });
    // driving.search("Manchester", "London");

    var start = "Tiananmen square";
	var end = "Baidu building";
	map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);
	//三种驾车策略：最少时间，最短距离，避开高速
	var routePolicy = [BMAP_DRIVING_POLICY_LEAST_TIME,BMAP_DRIVING_POLICY_LEAST_DISTANCE,BMAP_DRIVING_POLICY_AVOID_HIGHWAYS];
	$("#result").click(function(){
		map.clearOverlays(); 
		var i=$("#driving_way select").val();
		search(start,end,routePolicy[i]); 
		function search(start,end,route){ 
			var driving = new BMap.DrivingRoute(map, {renderOptions:{map: map, autoViewport: true},policy: route});
			driving.search(start,end);
		}
	});

    map.centerAndZoom(new BMap.Point(-2.349/*766*/, 53.465/*317*/), 11);
    map.enableScrollWheelZoom();
}

function loadScript() {
    var script = document.createElement("script");
    script.src = "https://api.map.baidu.com/api?v=2.0&ak=S3EPllWD7Z9ZfxknQ8QImWSopvsMUjMz&callback=initialize";
    document.body.appendChild(script);
}

window.onload = loadScript; 




