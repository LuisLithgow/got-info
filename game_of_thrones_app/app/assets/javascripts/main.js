$(document).ready(function() {
  console.log("FULLY LOADED!!!")


  $(".api-data").on('click',function getApiData(){
    let userInput = $(".user-input").val()
    let url = "http://www.anapioficeandfire.com/api/characters?name=" + userInput
    $.get(url )
      // console.log(userInput)
      .done( function(info){
        // console.log(info)
        info.forEach( function(data){
          renderData(data)
          console.log(data)
          })
        })
      .fail(function(error) {
        console.log(error, " error")
      })
      }
    )



// GETing data from my psql database
  $(".db-data").click(function getDBData() {

    let $dbContainer = $(".db-container")

    $.getJSON("/got")
      .done(function(info) {
        info.map((data)=> {
          console.log(data)

            let $li         = $('<li>')
            let $ul         = $('<ul>')
            let $div        = $('<div>')
            let $deleteBtn  =$('<button>').attr({
            "data-url":'/got/'+data.id}).addClass("delete-btn btn btn-default").text("Delete " + data.name)

           let $name =$('<li>').html("Name : " +data.name)
            let $gender =$('<li>').html("Gender : " +data.gender)
            let $born = $('<li>').html("Born : " +data.born)
            let $died =$('<li>').html("Died : " +data.died)
            let $titles =$('<li>').html("Titles : " +data.titles)
            let $aliases =$('<li>').html("ALiases : " +data.aliases)
            let $allegiances =$('<li>').html("Allegiances : " +data.allegiances)
            let $father =$('<li>').html("Father : " +data.father)
            let $mother =$('<li>').html("Mother : " +data.mother)
            let $spouse =$('<li>').html("Spouse : " +data.spouse)
            let $playedBy =$('<li>').html("Played By : " +data.playedBy)

            $ul.append($name, $gender, $born, $died,$titles, $aliases, $allegiances, $father, $mother, $spouse,$playedBy)
            $ul.append($born)
            $div.append($ul)
            $div.append($deleteBtn)
            $dbContainer.append($div)

          })
        })
        .fail(function(error) {
        console.log(error, " error")
        })
      }
    )








})
