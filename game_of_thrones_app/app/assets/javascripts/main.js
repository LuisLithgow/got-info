$(document).ready(function() {
  console.log("FULLY LOADED!!!")


  $(".api-data").click(function getApiData(){

    let userInput =
    $.get("http://www.anapioficeandfire.com/api/characters?name=#")
      .done( function(info){
        // console.log(info)
        info.forEach( function(data){
          renderData(data)
          console.log(data)
          })
        })
      }
    )


  function renderData( data ) {
    let $divinfo = $('.info')
    // $container.append( $album );
}

  $(".db-data").click(function getDBData() {
    $.getJSON("/got")
      .done(function(info) {
        info.forEach(function(data) {
          console.log(data)
        })
      })
    }
  )








})
