const {gql} = require('apollo-server');

const typeDefs = gql`

type User{
  id:ID!
  name:String!
  username:String!
  age:Int!
  nationality:Nationality
  friends:[User!]
  favouritemovies:[Movie]
}

enum Nationality{
  INDIA
  CHINA
  GERMANY
  CHILE
  BRAZIL
}




type Movie{
  id:ID!
  name:String!
  yearofPublication:Int!
  isInTheaters:Boolean!
}


type Query{
 users:[User!]!
 user(id:ID):User!
 movies:[Movie!]!
 movie(name:String):Movie!

}

input CreateUserInput{
  name:String!
  username:String!
  age:Int!
  nationality:Nationality=INDIA
}

input UpdateUsernameInput{
id:ID!
newUsername:String!
}

type Mutation{
  createUser(input:CreateUserInput!):User
  updateUsername(input:UpdateUsernameInput!):User
  deleteUser(id:ID!):User
}



`

module.exports ={typeDefs};