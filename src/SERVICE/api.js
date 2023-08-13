import axios from 'axios';
const url="http://localhost:9000";

export const authenticateSignUp=async(data)=>{
try{
  
  return await axios.post(`${url}/signup`,data)

}
catch(err){
    console.log(err.message);
}

}

export const authenticateLogin=async(data)=>{
  try{
    
    return await axios.post(`${url}/login`,data)
  
  }
  catch(err){
      console.log(err.message);
      return err.response;
  }
  
  }
