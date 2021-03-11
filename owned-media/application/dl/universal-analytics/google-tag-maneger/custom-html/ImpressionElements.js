<script>
//監視ターゲット
var target = document.querySelector('監視対象をDOM指定');
var targetChild = document.querySelector('監視対象の子課題をDOM指定');
var targetCount = target.childElementCount;

//デバイス別に取得画像を分ける(レスポンシブデザインの場合は条件分岐不要)
if ((navigator.userAgent.indexOf('iPhone') > 0 && navigator.userAgent.indexOf('iPad') == -1) || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0){
  var targetImage = document.querySelector('画像タグのDOM指定');
} else {
  var targetImage = document.querySelector('画像タグのDOM指定');
}

var offsetY = targetImage.getBoundingClientRect().top;
var viewportHeight = getViewportHeight();
var style = targetImage.currentStyle || document.defaultView.getComputedStyle(targetImage, '');
var height = parseInt(style.height)/2;

if (0 < offsetY && offsetY + height < viewportHeight)
  isVisible = true;
else if (offsetY < 0 && Math.abs(offsetY) < height)
  isVisible = true;
else
  isVisible = false;

function getViewportHeight(){
  var height = window.innerHeight;
  if (!height) {
    var mode = document.compatMode;
    if (mode) {
      var domObject = mode == "CSS1Compat" ? document.documentElement : document.body;
      height = domObject.clientHeight;
    }
  }
  return height;
}

if(targetCount == 1){
  
  //エレメント要素が1つの場合
  if (isVisible) {
    //特定領域にtargetImageが表示
    dataLayer.push({'impressionImgSrc':targetImage.src,'impressionImgAlt':targetImage.alt,'event':'impressionEvent'});
    } else {
    // 特定領域にtargetImageが表示されていない
  }
}else{
  //エレメント要素が1つ以外の場合
  // オブザーバーの作成
  var observer = new MutationObserver(function() {
    // 変化が発生したときの処理を記述

    if (isVisible) {
      //特定領域にtargetImageが表示
     if ((navigator.userAgent.indexOf('iPhone') > 0 && navigator.userAgent.indexOf('iPad') == -1) || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0){
  var targetImage = document.querySelector('画像タグのDOM指定');
} else {
  var targetImage = document.querySelector('画像タグのDOM指定');
} dataLayer.push({'impressionImgSrc':targetImage.src,'impressionImgAlt':targetImage.alt,'event':'impressionEvent'});
      } else {
      // 特定領域にtargetImageが表示されていない
    }
  })

  // 監視の開始
  observer.observe(targetChild, {
    attributes: true,
    attributeFilter: ['tabindex']
  })
}
</script>