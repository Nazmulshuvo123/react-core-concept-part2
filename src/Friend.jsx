export default function Friend({friend}){
    console.log(friend)
    const {name, email, id, phone, username, website, address} = friend;
    return(
        <div className="box">
            <h2>ID: {id}</h2>
            <h2>Username: {username}</h2>
            <h3>Name: {name}</h3>
            <h4>Email: {email}</h4>
            <h4>Phone: {phone}</h4>
            <h5>Website: {website}</h5>
            {/* <h5>Address: {address}</h5> */}
        </div>
    )    
}