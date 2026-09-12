import Second from "./Second";
function First()
{
    let x=100;
    let name="Raj";
    return(
        <div>
            <h1>Welcome First component..!!!</h1>
            <h1>Value of x:{x}</h1>
            <h1>NAME:{name}</h1>
            <Second />
            <Second />
            <Second />
        </div>
    )
}

export default First;
