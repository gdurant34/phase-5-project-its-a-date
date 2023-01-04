# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_12_19_033035) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "activities", force: :cascade do |t|
    t.string "title"
    t.string "category"
    t.string "location"
    t.text "description"
    t.string "image"
    t.integer "est_price"
    t.bigint "user_id"
    t.bigint "relationship_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["relationship_id"], name: "index_activities_on_relationship_id"
    t.index ["user_id"], name: "index_activities_on_user_id"
  end

  create_table "comments", force: :cascade do |t|
    t.bigint "dayt_id"
    t.bigint "user_id"
    t.text "comment_field"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["dayt_id"], name: "index_comments_on_dayt_id"
    t.index ["user_id"], name: "index_comments_on_user_id"
  end

  create_table "dayt_activities", force: :cascade do |t|
    t.bigint "dayt_id"
    t.bigint "activity_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["activity_id"], name: "index_dayt_activities_on_activity_id"
    t.index ["dayt_id"], name: "index_dayt_activities_on_dayt_id"
  end

  create_table "dayts", force: :cascade do |t|
    t.string "time"
    t.string "location"
    t.boolean "confirmed"
    t.string "category"
    t.bigint "user_id"
    t.bigint "relationship_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["relationship_id"], name: "index_dayts_on_relationship_id"
    t.index ["user_id"], name: "index_dayts_on_user_id"
  end

  create_table "relationships", force: :cascade do |t|
    t.string "relationship_type"
    t.string "name"
    t.string "email"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "user_relationships", force: :cascade do |t|
    t.bigint "user_id"
    t.bigint "relationship_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["relationship_id"], name: "index_user_relationships_on_relationship_id"
    t.index ["user_id"], name: "index_user_relationships_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "user_name"
    t.integer "age"
    t.string "email"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

end
