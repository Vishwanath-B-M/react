function Student(props){
    return(
        <div>
            <p> student:{props.name}</p>
            <p> age:{props.age}</p>
            <p>student is or not:{props.isStudent?"yes":"no"}</p>
        </div>
    )
}
Student.propstype={
    name:propstype.tostring,
    age:propstype.number,
    isStudent:propstype.bool,
}
export default Student;