class CreateActivities < ActiveRecord::Migration[6.1]
  def change
    create_table :activities do |t|
      t.string :title
      t.string :category
      t.string :location
      t.text :description
      t.string :image
      t.integer :est_price
      t.belongs_to :user
      t.belongs_to :relationship

      t.timestamps
    end
  end
end
