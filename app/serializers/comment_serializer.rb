class CommentSerializer < ActiveModel::Serializer
  attributes :id, :comment_field
  belongs_to :dayt
  belongs_to :user
end

