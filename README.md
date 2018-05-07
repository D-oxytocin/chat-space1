## usersテーブル
|Column|Type|Option|
|------|----|------|
|name|strings|null: false|
|email|strings|
|password|strings|unique: true|
|password_confirmation|strings|
|timestamps|

### Asociation
- has_many :messages
- has_many :menbers
- has_many :groups through: :menbers

## messagesテーブル
|Column|Type|Option|
|------|----|------|
|bady|text|
|image|string|
|user_id|references|
|group_id|references|
|timestamps|

### Asociation
- belongs_to :user
- belongs_to :group

## groupsテーブル
|Column|Type|Option|
|------|----|------|
|group_name|strings|null: false|
### Asociation

- has_many :messages
- has_many :menbers
- belongs_to :users through: :menbers

## menbersテーブル
|Column|Type|Option|
|------|----|------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Asociation
- belongs_to :group
- belongs_to :user