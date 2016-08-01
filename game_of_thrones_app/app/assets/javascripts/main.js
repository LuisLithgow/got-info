$(document).ready(function() {
  console.log("FULLY LOADED!!!")

  // Get Fire and Ice API data
  $(".api-data").on('click',function getApiData(event){
    event.preventDefault();
    let $fireIceContainer = $(".fire-ice-container")

    let userInput = $(".user-input").val()
    let url = "http://www.anapioficeandfire.com/api/characters?name=" + userInput
    $.get(url )
      // console.log(userInput)
      .done( function(info){
        // console.log(info)
        info.map( (data)=>{
          // renderData(data)
          console.log(data)
          let $li         = $('<li>')
          let $ul         = $('<ul>')
          let $div        = $('<div>')
          let $addBtn  =$('<button>').attr({
            "data-url":'/got'+data.id}).addClass("add-btn btn btn-default").text("Add character " + data.name)

          let $name =$('<li>').html("Name : " +data.name)
          let $gender =$('<li>').html("Gender : " +data.gender)
          let $born = $('<li>').html("Born : " +data.born)
          let $died =$('<li>').html("Died : " +data.died)
          let $titles =$('<li>').html("Titles : " +data.titles)
          let $aliases =$('<li>').html("Aliases : " +data.aliases)
          let $allegiances =$('<li>').html("Allegiances : " +data.allegiances)
          let $father =$('<li>').html("Father : " +data.father)
          let $mother =$('<li>').html("Mother : " +data.mother)
          let $spouse =$('<li>').html("Spouse : " +data.spouse)
          let $playedBy =$('<li>').html("Played By : " +data.playedBy)

          $ul.append($name, $gender, $born, $died,$titles, $aliases, $allegiances, $father, $mother, $spouse,$playedBy)
          $ul.append($born)
          $div.append($ul)
          $div.append($addBtn)
          $fireIceContainer.append($div)

          $(".add-btn").on("click", createCharacter);
        })
      })
      .fail((error)=> {
        console.log(error, " error")
      })
      }
    )



// GETing data from my psql database
  $(".db-data").click(function getDBData(event) {
    event.preventDefault();

    let $dbContainer = $(".db-container")

    $.getJSON("/got")
      .done(function(info) {
        info.map((data)=> {
          // console.log(data)


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
            let $aliases =$('<li>').html("Aliases : " +data.aliases)
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
            $(".delete-btn").on("click", deleteItem);

          })
        })
        .fail(function(error) {
        console.log(error, " error")
        })
      }
    )


  // POST data
  function createCharacter(event) {
    event.preventDefault();

    let $children = $(event.target).children() ;
    let data = {
      name: $children.eq(0).val(),
      gender: $children.eq(1).val(),
      born: $children.eq(2).val(),
      died: $children.eq(3).val(),
      titles: $children.eq(4).val(),
      allegiances: $children.eq(5).val(),
      aliases: $children.eq(6).val(),
      father: $children.eq(7).val(),
      mother: $children.eq(8).val(),
      spuse: $children.eq(9).val(),
      playedBy: $children.eq(10).val()
    }
    $.post('/got', data)
      .done( (response)=> {
        console.log(response)
      })
      .fail( (error)=> {
        console.log(error)
      })
  }

  $('.create-form').submit(createCharacter);


  // DELETE from db
  function deleteItem(e){
    // e.stopPropagation()
    console.log("Deletion clicked")
    let url = $(e.target).attr('data-url');
    $.ajax({
      url: url,
      method: 'delete'
      })
     .done(function(){
       console.log(arguments);
       $(e.target).parent().remove();
     })
  }



  $(".btn-modal").on("click", function charList() {
    let $ul =$(".char-list")

    let data = [
      "Daenerys Targaryen",
      "Tyrion Lannister",
      "Sansa Stark",
      "Arya Stark",
      "Stannis Baratheon",
      "Jon Snow",
      "Cersei Lannister",
      "Jamie Lannister",
      "Petyr Baelish",
      "Jorah Mormont",
      "Theon Greyjoy",
      "Bran Stark",
      " Joffrey Baratheon",
      "Robb Stark",
      "Ned Stark",
      "Robert Baratheon",
      "Viserys Targaryen",
      "Tywin Lannister",
      "Khal Drogo"
    ];

    data.map(function(char) {
      console.log(char)
      let $character=$('<li>').html(char)

      $ul.append($character)
    })

  } )




})
