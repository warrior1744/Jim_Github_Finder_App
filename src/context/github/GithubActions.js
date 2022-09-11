import axios from 'axios'
const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

const github = axios.create({
    baseURL: GITHUB_URL,
    headers: {Authorization: `token ${GITHUB_TOKEN}` }
})

//Get Search users API request //https://api.github.com/search/users?q=warrior17
export const searchUsers = async (text) => {

    const params = new URLSearchParams({q: text})
    console.log(params.toString())
    const response = await github.get(`/search/users?${params}`)
    console.log(response.data)
    return response.data.items
}



    //Get User Profile and Repos https://github.com/user
export const getUserAndRepos = async (login) => {
    const params = new URLSearchParams({
        sort: 'created',
        per_page: 10
    })

    const [user, repos] = await Promise.all([
        github.get(`/users/${login}`),
        github.get(`/users/${login}/repos?${params}`)
    ])

    console.log([user, repos])
    return {user: user.data, repos: repos.data}
}