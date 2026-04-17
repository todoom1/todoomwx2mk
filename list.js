(function() {
    var secretApps = [
{img: './png/hygj.jpg', name: '汇赢国际', xurl: 'aHR0cHM6Ly9uY2djYS50cHJzbWkuY29tL2FwcC9yZWdpc3Rlci5waHA/c2l0ZV9pZD0xMDYyJnRvcElkPTI0Njg1NSZzZWxmUGxhbklkPTI2NzAyMA=='},
{img: './png/c7.png', name: 'C7娱乐', xurl: 'Qzc6aHR0cHM6Ly8xMDMuMzkuMTguMjExOjc3ODgvIy9saW5rP2FsbHdpbj1oemwzZ2pVN0ROUjgyTVFpVlBjQlB3JTNEJTNE'},
{img: './png/jlgj.jpg', name: '君临国际', xurl: 'aHR0cHM6Ly90ZmFqbi5oY2p3ai5jb20vYXBwL3JlZ2lzdGVyLnBocD9zaXRlX2lkPTIwODEmdG9wSWQ9MzAwNjIzNiZzZWxmUGxhbklkPTI1NzgyMjk'},
{img: './png/xsd.jpg', name: '新时代', xurl: 'aHR0cHM6Ly9kZXJlYXIuZm5icHN3LmNvbS9hcHAvcmVnaXN0ZXIucGhwP3NpdGVfaWQ9MTA1OSZ0b3BJZD0yMTg5OTk2JnNlbGZQbGFuSWQ9MTcwNDUyOQ'},
{img: './png/yh.png', name: '壹号娱乐', xurl: 'aHR0cHM6Ly9nZnZneC5qZ3F2amkuY29tL2FwcC9yZWdpc3Rlci5waHA/c2l0ZV9pZD04MDAmcHQ9NzZDMkVDMDQtRDBCOS1DMDNDLTAxNEMtRUZFNTg2MDU4MjU3'},
{img: './png/stgj.jpg', name: '胜天国际', xurl: 'aHR0cHM6Ly9sZWp2YS50cHJzbWkuY29tL2FwcC9yZWdpc3Rlci5waHA/c2l0ZV9pZD0xMDU4JnRvcElkPTMwMzQ1MjImc2VsZlBsYW5JZD0yMzMxMzUw'},
{img: './svg/28q.svg', name: '28圈', xurl: 'aHR0cHM6Ly8xNDkuMzAuMjEwLjE0NDozNTM4NC8jL2xpbms/YWxsd2luPUVjaXdqODg3NTk0NDgmdj04MjY'},
{img: './png/cfgj.jpg', name: '超凡国际', xurl: 'aHR0cHM6Ly9wa2FqaW0uaGZqY2wuY29tL2FwcC9yZWdpc3Rlci5waHA/c2l0ZV9pZD0xMDMyJnB0PTQ2QUQxRDE3LTc5QzQtOThCQy1DMjVBLUFBNzI1Q0Q5OUI2OA'},
{img: './png/top1.png', name: 'TOP1体育', xurl: 'aHR0cHM6Ly9sbmNxYy5qZ3F2amkuY29tL2FwcC9yZWdpc3Rlci5waHA/c2l0ZV9pZD0xMDUxJnRvcElkPTUyNzQxOQ0='},
{img: './png/ffyl.jpg', name: '非凡国际', xurl: 'aHR0cHM6Ly9sbmNxYy5qZ3F2amkuY29tL2FwcC9yZWdpc3Rlci5waHA/c2l0ZV9pZD0xMDUwJnRvcElkPTY3MjE3NjM0ODMyMjQ0MjImc2VsZlBsYW5JZD0xMzIxMDM'},
{img: './png/dfgj.jpg', name: '巅峰国际', xurl: 'aHR0cHM6Ly9nZnZneC5qZ3F2amkuY29tL2FwcC9yZWdpc3Rlci5waHA/c2l0ZV9pZD0xMDMwJnRvcElkPTEzODA2DQ=='}
    ];

    var container = document.getElementById('xapes');
    if (!container) return;

    secretApps.forEach(function(app) {
        // 1. 创建元素
        var li = document.createElement('li');
        li.className = 'app-item'; // 只保留类名用于样式

        li.innerHTML = `
            <div class="app-icon"><img src="${app.img}"></div>
            <div class="app-name">${app.name}</div>
        `;

        li.onclick = function() {
            try {
                // 解码并跳转
                var targetUrl = atob(app.xurl.trim());
                window.open(targetUrl, '_blank');
            } catch (e) {
                console.error("解码失败:", e);
            }
        };

        // 4. 塞进容器
        container.appendChild(li);
    });
})();

window["document"]['getElementById']("3")['innerHTML'] = ("2026美加墨世界杯<br>-查看赛事赛程-");
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
