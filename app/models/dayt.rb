class Dayt < ApplicationRecord
    belongs_to :user 
    belongs_to :relationship
    has_many :dayt_activities
    has_many :activities, through: :dayt_activities
    has_many :comments
end
