import "./app2.css"
import $ from "jQuery"

$(".app2 .tabBar li").click(function (e) {
    const $li = $(e.currentTarget);
    const index = $li.index();
    console.log(index);
    $(".app2 .tabContent").children()
        .eq(index).removeClass("hidden")
        .siblings().addClass("hidden");
})