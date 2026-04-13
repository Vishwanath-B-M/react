import profile from './assets/picture.jpg';
function Card(){
    return(
        <div className="card">
        <img src={profile} alt="this is image"></img>
        <h1> this is my picture</h1>
        <p> i am learning now</p>
        </div>
    );
}
export default Card;