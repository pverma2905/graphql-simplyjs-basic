# query ExampleQuery {
#   users{
#     name
#     id
#     nationality
#     age
#     friends {
#       id
#       name
#     }
#     favouritemovies {
#       isInTheaters
#       name
#     }
#   }
# }

# query GetUser($userId:ID!) {
#   user(id:$userId) {
#     name
#   }
# }

# query getMovies {
#   movies {
#     name
#     isInTheaters
#     id
#     yearofPublication
#   }
# }

# mutation($input:createUserInput!){
#   createUser(input:$input){
#     name
#     id
#     username
#     nationality
#   }
# }

# mutation($input:createUserInput!){
#   createUser(input:$input){
#     name
#     id
#     username
#     nationality
#   }
# }

# mutation($input:UpdateUsernameInput!){
#   updateUsername(input:$input){
#     name
#     id
#     username
#     nationality
#   }
# }

# mutation($deleteUserId:ID!){
#   deleteUser(id: $deleteUserId) {
#     name
#   }
# }







// {
//   "input":{
//     "name":"simply",
//     "username":"simply123",
//     "age": 21
//   }
// }

// {
//   "input": {
//     "id":"1",
//     "newUsername":"zzzzzzzzz"
//   }  
// }

// {
//   "deleteUserId": "2"
// }