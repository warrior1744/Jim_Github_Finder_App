import { createContext, useState, useReducer } from "react";
import githubReducer from "./GithubReducer";

const GithubContext = createContext()


export const GithubProvider = ({children}) => {

    const initialState = {
        users: [],
        user: {},
        repos: [],
        loading: false
    }

    const [state, dispatch] = useReducer(githubReducer, initialState)


    // //Get initial users (testing purposes)
    // const fetchUsers = async () => {
    //     const requestOptions = {
    //         headers: {
    //             Authorization: `token ${GITHUB_TOKEN}`,
    //         }
    //     }
    //     const response = await fetch(`${GITHUB_URL}/users`, requestOptions)
    //     const data = await response.json()
    //     console.log(data)
    //     dispatch({
    //         type: 'GET_USERS_TEST',
    //         payload: data,
    //     })
    // }


    /* These functions are moved to GithubActions.js */
    // //Get Search users API request //https://api.github.com/search/users?q=warrior17
    // const searchUsers = async (text) => {
    //     setLoading()
    //     const requestOptions = {
    //         headers: {
    //             Authorization: `token ${GITHUB_TOKEN}`,
    //         }
    //     }
    //     const params = new URLSearchParams({q: text})
    //     console.log(params.toString())
    //     const response = await fetch(`${GITHUB_URL}/search/users?${params}`, requestOptions)
    //     const {items} = await response.json() //we only need the items from the data
    //     console.log(items)
    //     dispatch({
    //         type: 'GET_USERS',
    //         payload: items,
    //     })
    // }

    // //Get User Profile https://github.com/user
    // const getUser = async (login) => {
    //     setLoading()
    //     const requestOptions = {}
    //     const response = await fetch(`${GITHUB_URL}/users/${login}`, requestOptions)
    //     if(response.status === 404){
    //         window.location = '/notfound'
    //     }
    //     const data = await response.json()
    //     console.log(data)
    //     dispatch({
    //         type: 'GET_USER',
    //         payload: data
    //     })
    // }

    // //Get User Repos
    // const getUserRepos = async (login) => {
    //     setLoading()

    //     const params = new URLSearchParams({
    //         sort: 'created',
    //         per_page: 10
    //     })

    //     const requestOptions = {
    //         headers: {
    //             Authorization: `token ${GITHUB_TOKEN}`,
    //         }
    //     }
    //     const response = await fetch(`${GITHUB_URL}/users/${login}/repos?${params}`, requestOptions)

    //     const data = await response.json()
    //     console.log(data)
    //     dispatch({
    //         type: 'GET_REPOS',
    //         payload: data,
    //     })

    // }

    // //Clear users from state
    // const clearUsers = async() => {
    //     dispatch({
    //         type: 'CLEAR_USERS',
    //     })
    // }

    //set loading action to true, put this on top of the function to make it run until the call stack is finished
    // const setLoading = () => dispatch({type: 'SET_LOADING'})

    return <GithubContext.Provider value={{
        ...state,
        dispatch,
    }}>
        {children}
    </GithubContext.Provider>

}

export default GithubContext
