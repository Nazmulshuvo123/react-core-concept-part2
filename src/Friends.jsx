import Friend from './Friend'
import './Friends.css'
import { useEffect, useState } from "react"

export default function Friends(){
    const [friends, setFriends] = useState([])
    useEffect( () => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((data) => setFriends(data))
    }, [])
    return(
        <div className='box'>
            <h3>Friends : {friends.length} </h3>
            {
                friends.map(friend => <Friend friend ={friend}></Friend>)
            }
        </div>
    )
}

/**
 * 1.Declare a state to hold the data
 * 2.useEffect with dependency array
 * 3.Use fetch to load data
 * 4.set loaded data to the state
 * 5.Display data on the component
 */
