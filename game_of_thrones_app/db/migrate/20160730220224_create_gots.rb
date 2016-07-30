class CreateGots < ActiveRecord::Migration[5.0]
  def change
    create_table :gots do |t|
      t.string :name
      t.string :gender
      t.string :born
      t.string :died
      t.text :titles
      t.text :aliases
      t.string :father
      t.string :mother
      t.string :spouse
      t.string :allegiances
      t.string :playedBy

      t.timestamps
    end
  end
end
