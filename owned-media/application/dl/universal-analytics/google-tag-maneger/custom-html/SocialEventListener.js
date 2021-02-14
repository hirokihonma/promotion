<script>
//Facebook
if(typeof FB != 'undefined'){
  FB.Event.subscribe('edge.create', function(targetUrl) {    dataLayer.push({'socialNetwork':'facebook','socialAction':'like','socialTarget':targetUrl,'event':'socialEvent'});
  });
  FB.Event.subscribe('edge.remove', function(targetUrl) {  dataLayer.push({'socialNetwork':'facebook','socialAction':'unlike','socialTarget':targetUrl,'event':'socialEvent'});
  });
  FB.Event.subscribe('message.send', function(targetUrl) {
dataLayer.push({'socialNetwork':'facebook','socialAction':'share','socialTarget':targetUrl,'event':'socialEvent'});
});
}

//Twitter
if(typeof twttr != 'undefined'){
  twttr.ready(function (twttr) {
    twttr.events.bind('tweet', function (event) {
      dataLayer.push({'socialNetwork':'twitter','socialAction':'share','socialTarget':window.location.href,'event':'socialEvent'});
    });
  });
}

//LINE
if(typeof jQuery != 'undefined'){
    $(function(){
        $('a[href^="http://line.me/R/msg/"]').click(function(){
          dataLayer.push({'socialNetwork':'line','socialAction':'share','socialTarget':window.location.href,'event':'socialEvent'});
        });
    });
}
</script>