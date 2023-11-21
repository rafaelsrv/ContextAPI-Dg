import useAuth from "../../hooks/useAuth";

function ComponentB(){
    const { authenticatedUser:{user:{name, email}}} = useAuth();
    return(
        <div>
        <p>Component B</p>
        <p>O nome do componentB É : {name}</p>
        <p>O nome do email É : {email}</p>
        </div>
    )
}
export default ComponentB;