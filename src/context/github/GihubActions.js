const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN



//Get Search users API request //https://api.github.com/search/users?q=warrior17
export const searchUsers = async (text) => {

    const requestOptions = {
        headers: {
            Authorization: `token ${GITHUB_TOKEN}`,
        }
    }
    const params = new URLSearchParams({q: text})
    console.log(params.toString())
    const response = await fetch(`${GITHUB_URL}/search/users?${params}`, requestOptions)
    const {items} = await response.json() //we only need the items from the data
    console.log(items)
    return items
}