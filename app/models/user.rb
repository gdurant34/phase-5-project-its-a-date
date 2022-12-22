class User < ApplicationRecord
    has_many :user_relationships
    has_many :relationships, through: :user_relationships
    has_many :activities
    has_many :dayts
    has_many :comments
    validates :email, uniqueness: true
end
