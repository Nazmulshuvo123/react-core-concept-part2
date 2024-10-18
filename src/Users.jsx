import { useEffect, useState } from "react"

export default function Users(){
    const [users, setUsers] = useState([]) //1.Declare a state to hold the data
    useEffect( ()=>{ // 2.useEffect with dependency array
        fetch('https://jsonplaceholder.typicode.com/users')//3.Use fetch to load data
        .then((response) => response.json())
        .then((data) => setUsers(data))//4.set loaded data to the state

    }, [])

    return(
        <div>
            <h3>Users: {users.length}</h3>
        </div>
    )
}