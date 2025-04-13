import { useParams } from "react-router-dom";

function Users() { 
    const {id} =useParams()


    "https://jsonplaceholder.typicode.com/users/id"

    return <h1>{id}</h1>
}



export default Users