class DaytSerializer < ActiveModel::Serializer
  attributes :id, :time, :location, :confirmed, :category, :comments
  belongs_to :user
  belongs_to :relationship
  has_many :activities
  has_many :comments
  has_many :dayt_activities
end
