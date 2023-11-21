import useAuth from "../../hooks/useAuth";

function ComponentA(){
    const { authenticatedUser:{user:{name}}} = useAuth();
    return(
        <div>
        <p>Component A</p>
        <p>O nome do componentA É : {name}</p>
        </div>
    )
}
export default ComponentA;