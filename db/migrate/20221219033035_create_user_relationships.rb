class CreateUserRelationships < ActiveRecord::Migration[6.1]
  def change
    create_table :user_relationships do |t|
      t.belongs_to :user
      t.belongs_to :relationship

      t.timestamps
    end
  end
end
