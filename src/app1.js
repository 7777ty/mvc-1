import "./app1.css"
import $ from "jQuery"
const n = localStorage.getItem('n');
$("span").html(n || 100);

$(".add").click(function () {
    let n = parseFloat($("span").html());
    n += 1;
    localStorage.setItem('n', n);
    $("span").html(n);
})
$(".reduce").click(function () {
    let n = parseFloat($("span").html());
    n -= 1;
    localStorage.setItem('n', n);
    $("span").html(n);
})
$(".multiply").click(function () {
    let n = parseFloat($("span").html());
    n *= 2;
    localStorage.setItem('n', n);
    $("span").html(n);
})
$(".divide").click(function () {
    let n = parseFloat($("span").html());
    n /= 2;
    localStorage.setItem('n', n);
    $("span").html(n);
})