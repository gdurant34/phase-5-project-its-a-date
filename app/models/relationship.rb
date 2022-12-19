class Relationship < ApplicationRecord
    has_many :user_relationships
    has_many :users, through: :user_relationships
    has_many :dayts
    has_many :activities
end
