// Code EyesOnMe Component Here
function EyesOnMe(){
    function focus(){
        console.log("Good!")
    }
    return(
        <div>
            <button onFocus={focus} onBlur={() => console.log('Hey! Eyes on me!')}>Eyes on me</button>
        </div>
    )
}

export default EyesOnMe
