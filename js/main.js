var app = document.getElementById('app')

if(window.location.hostname.indexOf("editthispost.com") > -1) {
  var indexJsonSource = 'http://editthispost.com:9002/api/1/getText?apikey=b6fa274cc2b92cc4db05dfc787b0cb2372b4ce505ed6f852b93e677549e08760&padID=index'
}else{
  var indexJsonSource = './sampleIndex.json'
}


mainRoute.initRouter()
