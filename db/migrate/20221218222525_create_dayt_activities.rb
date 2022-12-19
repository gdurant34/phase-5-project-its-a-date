class CreateDaytActivities < ActiveRecord::Migration[6.1]
  def change
    create_table :dayt_activities do |t|
      t.belongs_to :dayt
      t.belongs_to :activity

      t.timestamps
    end
  end
end
