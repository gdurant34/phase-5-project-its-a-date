class Activity < ApplicationRecord
    belongs_to :user
    belongs_to :relationship
    has_many :dayt_activities
    has_many :dayts, through: :dayt_activities
end
