const baseUrl = 'https://blogs-api1.p.rapidapi.com/get-blogs' // base url for the API

const options = { 
    method: 'GET',
    headers: {
        'x-rapidapi-key':'d6e41aabe5msh6cfe839bc04e30bp126b15jsnea04727e0332',
		'x-rapidapi-host': 'blogs-api1.p.rapidapi.com'
    }
}   // the configuration for the API request

export const getPost = async (params) => {
    const response = await fetch(`${baseUrl}/?q=${params}`, options)  
    const data = await response.json();
    console.log(response) 
    console.log(data)  
    
    return data

} // the main function to fetch the data from the API





