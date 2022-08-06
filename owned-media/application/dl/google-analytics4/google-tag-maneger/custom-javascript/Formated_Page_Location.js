function(){
  /* 除外対象のクエリパラメータを定義 */
  var excludeTargetQueryParams = [
    '任意のパラメータを記述',
    '任意のパラメータを記述',
    '任意のパラメータを記述'
  ];
  
  var pageProtocol = location.protocol;
  var pageHostName = location.host;
  var pagePath = location.pathname;
  var pageQuery = location.search;
  var excludedQueryString = "";
  if(typeof pageQuery !== 'undefined' && pageQuery !== ""){
    var queryParams = pageQuery.slice(1).split("&");
    for(var i = 0; i < queryParams.length; i++) {
      var queryParam = queryParams[i].split("=");
      if(queryParam.length < 2){
        excludedQueryString += queryParam;
      }
      var queryKey = queryParam[0];
      var queryValue = queryParam[1];
      if(excludeTargetQueryParams.indexOf(queryKey) !== -1){
        continue;
      }
      if(excludedQueryString !== ""){
        excludedQueryString += "&";
      } else {
        excludedQueryString += "?";
      }
      if(typeof queryValue == 'undefined'){
        queryValue = "";
      }
      excludedQueryString += queryKey + "=" + queryValue;
    }
  }
  return pageProtocol + "//" + pageHostName + pagePath + excludedQueryString;
}