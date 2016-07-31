$(document).ready(function() {
  console.log("FULLY LOADED!!!")


  function getData(){
  console.log("hello")
    $.getJSON("/info")
      .done( function(info){
        // console.log(info)
        info.forEach( function(data){
          renderData(data)
          console.log(data)
        })
      })
  }

  function renderData( data ) {
    let $divinfo = $('.info')
    // $container.append( $album );
}









})
