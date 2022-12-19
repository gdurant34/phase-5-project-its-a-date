class CreateDayts < ActiveRecord::Migration[6.1]
  def change
    create_table :dayts do |t|
      t.string :time
      t.string :location
      t.boolean :confirmed
      t.string :category
      t.belongs_to :user
      t.belongs_to :relationship

      t.timestamps
    end
  end
end
