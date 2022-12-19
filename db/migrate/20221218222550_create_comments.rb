class CreateComments < ActiveRecord::Migration[6.1]
  def change
    create_table :comments do |t|
      t.belongs_to :dayt
      t.belongs_to :user
      t.text :comment_field

      t.timestamps
    end
  end
end
