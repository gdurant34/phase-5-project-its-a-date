class UserRelationship < ApplicationRecord
    belongs_to :user
    belongs_to :relationship
end
