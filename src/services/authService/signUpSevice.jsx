import axios from 'axios'


export const signUpService=async(email, password, firstName, lastName)=> await axios.post('/api/auth/signup', {
email, password, firstName, lastName

})


