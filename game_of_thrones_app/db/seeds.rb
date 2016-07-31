# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Got.create(
  {
  :name=>"Lu Snow",
  :gender => "male",
  :born => "658 AC",
  :died => "",
  :titles => ["The Grand One","Sir Lu Snow", "The All Powerful-Sword-Wielding Wizard"],
  :aliases => "The Killer",
  :father => "LL",
  :mother => "AM",
  :spouse => "RL",
  :allegiances => ["FSC", "GA"],
  :playedBy => ""

  },
  {
  :name=>"Guillermo Lannister",
  :gender => "male",
  :born => "663 AC",
  :died => "",
  :titles => ["Sir Memo", "The King"],
  :aliases => ["The CCC", "The One: Cool, Calm and Colelctive"],
  :father => "LL",
  :mother => "Sl",
  :spouse => "",
  :allegiances => ["FS", "DG"],
  :playedBy => ""

  }

)

