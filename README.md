## usersテーブル
|Column|Type|Option|
|------|----|------|
|name|strings|index: true, null: false|
|email|strings|null: false, unique: true|
|password|strings|unique: true|
|password_confirmation|strings|

### Asociation
- has_many :messages
- has_many :members
- has_many :groups, through: :members

## messagesテーブル
|Column|Type|Option|
|------|----|------|
|bady|text|
|image|string|
|user_id|references|foreign_key: true|
|group_id|references|foreign_key: true|

### Asociation
- belongs_to :user
- belongs_to :group

## groupsテーブル
|Column|Type|Option|
|------|----|------|
|name|strings|index: true, null: false|
### Asociation

- has_many :messages
- has_many :mebmers
- belongs_to :users, through: :members

## membersテーブル
|Column|Type|Option|
|------|----|------|
|user_id|integer|index: true, null: false, foreign_key: true|
|group_id|integer|index: true, null: false, foreign_key: true|

### Asociation
- belongs_to :group
- belongs_to :user