class Group < ApplicationRecord
  has_many :messages
  has_many :mebmers
  belongs_to :users, through: :members
  validates :name, presence: true
end
