import axios from 'axios';


export const fetchdatafromapi = async (url) => {
  try {
    const { data } = await axios.get("http://localhost:4000" + url);
    return data;
  } catch (error) {
    console.log(error);
  }
}


export const postData  = async (url, fromdata) =>{
  console.log(fromdata+"post data");
   const response = await axios.post("http://localhost:4000" + url, fromdata).then((res) => {
      return res.data
   })
   return response
}


export const editdata = async (url, formdata) => {
  try {
    const { data } = await axios.put(`http://localhost:4000${url}`, formdata);
    return data;
  } catch (error) {
    console.error('Edit error:', error);
    throw error; // Re-throw the error so it can be caught by the component
  }
}



export const deleteCategory = async (url, id) => {
  try {
    const { data } = await axios.delete(`http://localhost:4000${url}/${id}`);
    return data;
  } catch (error) {
    console.error('Delete error:', error);
    throw error; // Re-throw the error so it can be caught by the component
  }
}

