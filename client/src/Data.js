import React, { useState } from 'react'
import { gql, useQuery, useLazyQuery, useMutation } from '@apollo/client';


const QUERY_All_USERS = gql`
    query GetAllUsers{
        users{
            name
            id
            username
        }
    }
`;

const QUERY_All_MOVIES = gql`
    query GetAllMovies{
        movies{
            name
            id
            yearofPublication
            isInTheaters
        }
    }
`;


const GET_MOVIE_NAME = gql`
    query GetMovieByName($name:String!){
        movie(name:$name){
            name
            id
            yearofPublication
            isInTheaters
        }

    }

`;

const CREATE_USER_MUTATION = gql`
    mutation CreateUser($input:CreateUserInput!){
        createUser(input:$input){
            name
            id
        }
    
    
    }

`


function Data() {
    const [moviename, setmoviename] = useState('');
    const [name, setname] = useState('');
    const [username, setusername] = useState('');
    const [age, setage] = useState('');
    const [nationality, setnationality] = useState('');
    const { data, loading, error, refetch } = useQuery(QUERY_All_USERS);
    const { data: movieData, loading: movieLoading, error: movieError } = useQuery(QUERY_All_MOVIES);
    const [fetchmovie, { data: movieresult }] = useLazyQuery(GET_MOVIE_NAME)
    const [createUser] = useMutation(CREATE_USER_MUTATION);

    // if(data){
    //     console.log("eeeeee",data)
    // }

    if (loading) {
        return <h1>Data in loading.....</h1>
    }
    if (error) {
        return <h1>Something Went Wrong</h1>
    }

    // if(movieData){
    //     console.log("ffffffffff",movieData)
    // }

    if (movieresult) {
        console.log("ssssssssss", movieresult)
    }

    return (
        <div>
            {/* create User */}

            <div>
                <input type="text" placeholder='enter name' onChange={(e) => setname(e.target.value)} />
                <input type="text" placeholder='enter username' onChange={(e) => setusername(e.target.value)} />
                <input type="number" placeholder='enter age' onChange={(e) => setage(e.target.value)} />
                <input type="text" placeholder='nationality' onChange={(e) => setnationality(e.target.value)} />
                <button onClick={() => {
                    createUser({variables: {
                            input: {
                                name,
                                username,
                                age: Number(age),
                                nationality
                            }
                        }})
                        refetch()
                }}>Submit</button>
            </div>




            {/* users */}
            {
                data && data.users.map((user) => (
                    <div key={user.id}>
                        <h1><span>Name:</span>{user.name}</h1>
                        <h3><span>Username:</span>{user.username}</h3>
                    </div>
                ))

            }
            {/* movies */}



            {
                movieData && movieData.movies.map((movie) => (
                    <div key={movie.id}>
                        <h1><span>Name:</span>{movie.name}</h1>
                        <h3><span>Year:</span>{movie.yearofPublication}</h3>
                        <h3><span>InTheater:</span>{movie.isInTheaters}</h3>
                    </div>
                ))
            }

            {/* find single movie */}

            <input type="text" placeholder='enter movie name' onChange={(e) => setmoviename(e.target.value)} />
            <button onClick={() => { fetchmovie({ variables: { name: moviename } }) }}>GetMovieName</button>

            <div>
                {movieresult && <h1>{movieresult.movie.name}</h1>}
                {movieresult && <h1>{movieresult.movie.yearofPublication}</h1>}
            </div>

        </div>
    )
}

export default Data