# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


puts "Deleting Users/Relationships/Dayts/Activities data..."
User.destroy_all
Relationship.destroy_all
Dayt.destroy_all
Activity.destroy_all
UserRelationship.destroy_all
DaytActivity.destroy_all


puts "Seeding users..."
# test users have same password
user1 = User.create(first_name: 'Caitlin', last_name: 'Smith', user_name: 'csmith', age: 23, email: 'csmith@me.com')
user2 = User.create(first_name: 'Daniel', last_name: 'Jones', user_name: 'djones', age: 35, email: 'djones@gmail.com')
user3 = User.create(first_name: 'Ann', last_name: 'Williams', user_name: 'awilliams', age: 28, email: 'awilliams@gmail.com')

puts "Seeding relationships..."
relationship1 = Relationship.create(relationship_type:'Romantic', name: 'Joshua', email: 'jmclean@gmail.com')
relationship2 = Relationship.create(relationship_type:'Friend', name: 'Julia', email: 'jsmith@gmail.com')
relationship3 = Relationship.create(relationship_type:'Mother', name:'Jayme', email: 'jdurant@gmail.com')

puts "Seeding dayts..."
dayt1 = Dayt.create(time: '5pm', location: '101 Broadway St. Seattle WA 98133', confirmed: true, category: 'Movie', user: user2 , relationship: relationship1)
dayt2 = Dayt.create(time: '7pm', location: '11 Midway St. Seattle WA 98132', confirmed: true, category: 'Dance', user: user1, relationship: relationship3)
dayt3 = Dayt.create(time: '4pm', location: '101 Louis St. Seattle WA 98412', confirmed: false, category: 'Walk', user: user3, relationship: relationship2)

puts "Seeding activies..."
activity1 = Activity.create(title: 'Horse back riding', category: 'Active', location: '333 Main St Dallas, TX 76223', description: 'This is a place you can pay to ride a horse for 2 hours', image: 'https://t.ly/m-pu', est_price: 35, user: user2, relationship: relationship2)
activity2 = Activity.create(title: 'Skatig along the waterfront', category: 'Active', location: '333 Boarderline St Seattle, WA 76223', description: 'Skate along the waterfront', image: 'https://t.ly/EyEr', est_price: 0, user: user3, relationship: relationship1)
activity3 = Activity.create(title: 'Dinner at Sushi', category: 'Dinner', location: '333 Main St New York, NY 12542', description: '5 course sushi dinner', image: 'https://t.ly/Vpls', est_price: 125, user: user1, relationship: relationship2)

puts "Seeding userRelationships..."
userRelationship1 = UserRelationship.create(user: user1, relationship: relationship2)
userRelationship2 = UserRelationship.create(user: user3, relationship: relationship1)
userRelationship3 = UserRelationship.create(user: user1, relationship: relationship3)

puts "Seeding daytActivities..."
daytActivity1 = DaytActivity.create(dayt: dayt3, activity: activity2)
daytActivity2 = DaytActivity.create(dayt: dayt2, activity: activity1)
daytActivity3 = DaytActivity.create(dayt: dayt1, activity: activity3)

puts "Seeding Comment..."
comment1 = Comment.create(dayt: dayt3, user: user1, comment_field: 'This looks like so much fun!!!')
comment2 = Comment.create(dayt: dayt1, user: user3, comment_field: '100% IN!!')
comment3 = Comment.create(dayt: dayt3, user: user3, comment_field: 'WOW! What a great idea')
comment4 = Comment.create(dayt: dayt2, user: user1, comment_field: 'This looks fun, could we try a different time?')
comment5 = Comment.create(dayt: dayt2, user: user2, comment_field: 'Yeah, but that I also want to do the horse backriding. Can we do both that day?')
comment6 = Comment.create(dayt: dayt3, user: user1, comment_field: 'This looks fun!!!')

