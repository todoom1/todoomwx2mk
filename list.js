window["document"]['getElementById']("jl")['addEventListener']("click", function () {
    window['open'](atob("aHR0cHM6Ly90ZmFqbi5oY2p3ai5jb20vYXBwL3JlZ2lzdGVyLnBocD9zaXRlX2lkPTIwODEmdG9wSWQ9MzAwNjIzNiZzZWxmUGxhbklkPTI1NzgyMjk"), '_blank')
});
window["document"]['getElementById']("xsd")['addEventListener']("click", function () {
    window['open'](atob("aHR0cHM6Ly9kZXJlYXIuZm5icHN3LmNvbS9hcHAvcmVnaXN0ZXIucGhwP3NpdGVfaWQ9MTA1OSZ0b3BJZD0yMTg5OTk2JnNlbGZQbGFuSWQ9MTcwNDUyOQ"), '_blank')
});
window["document"]['getElementById']("st")['addEventListener']("click", function () {
    window['open'](atob("aHR0cHM6Ly9sZWp2YS50cHJzbWkuY29tL2FwcC9yZWdpc3Rlci5waHA/c2l0ZV9pZD0xMDU4JnRvcElkPTMwMzQ1MjImc2VsZlBsYW5JZD0yMzMxMzUw"), '_blank')
});
window["document"]['getElementById']("z8q")['addEventListener']("click", function () {
    window['open'](atob("aHR0cHM6Ly8xNDkuMzAuMjEwLjE0NDozNTM4NC8jL2xpbms/YWxsd2luPUVjaXdqODg3NTk0NDgmdj04MjY"), '_blank')
});
window["document"]['getElementById']("yh")['addEventListener']("click", function () {
    window['open'](atob("aHR0cHM6Ly9nZnZneC5qZ3F2amkuY29tL2FwcC9yZWdpc3Rlci5waHA/c2l0ZV9pZD04MDAmcHQ9Mzc4RjA4MzYtRjY2Qy1FRUIzLTdFQUMtOTNDQTg0ODhFMDdG"), '_blank')
});
window["document"]['getElementById']("cf")['addEventListener']("click", function () {
    window['open'](atob("aHR0cHM6Ly9wa2FqaW0uaGZqY2wuY29tL2FwcC9yZWdpc3Rlci5waHA/c2l0ZV9pZD0xMDMyJnB0PTQ2QUQxRDE3LTc5QzQtOThCQy1DMjVBLUFBNzI1Q0Q5OUI2OA"), '_blank')
});
window["document"]['getElementById']("ff")['addEventListener']("click", function () {
    window['open'](atob("aHR0cHM6Ly9sbmNxYy5qZ3F2amkuY29tL2FwcC9yZWdpc3Rlci5waHA/c2l0ZV9pZD0xMDUwJnRvcElkPTY3MjE3NjM0ODMyMjQ0MjImc2VsZlBsYW5JZD0xMzIxMDM"), '_blank')
});
window["document"]['getElementById']("df")['addEventListener']("click", function () {
    window['open'](atob("aHR0cHM6Ly9nZnZneC5qZ3F2amkuY29tL2FwcC9yZWdpc3Rlci5waHA/c2l0ZV9pZD0xMDMwJnRvcElkPTEzODA2DQ=="), '_blank')
});
window["document"]['getElementById']("jln")['innerHTML'] = ("君临国际");
window["document"]['getElementById']("xsdn")['innerHTML'] = ("新时代");
window["document"]['getElementById']("stn")['innerHTML'] = ("胜天国际");
window["document"]['getElementById']("z8qn")['innerHTML'] = ("28圈");
window["document"]['getElementById']("yhn")['innerHTML'] = ("壹号娱乐");
window["document"]['getElementById']("cfn")['innerHTML'] = ("超凡国际");
window["document"]['getElementById']("ffn")['innerHTML'] = ("非凡国际");
window["document"]['getElementById']("dfn")['innerHTML'] = ("巅峰国际");

window["document"]['getElementById']("3")['innerHTML'] = ("世界杯World Cup 2026™<br>官方合作广告商");
window["document"]['getElementById']("2")['innerHTML'] = ("🔥十年信誉平台<br>⚽世界杯官方投注平台");
window["document"]['getElementById']("1")['innerHTML'] = "11mk.MY";


function showPopupOnce(popupId = 'sw_loaded') {
  const key = `popup_${popupId}_shown`;
  
  if (localStorage.getItem(key)) {
    return; 
  }
  alert('欢迎访问11mk！');
  localStorage.setItem(key, Date.now().toString());
}
window.addEventListener('load', function() {
  showPopupOnce();
});
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js')
    .then(function(registration) {
      console.log('SW registered');
    });
}