function Welcome(){
    const [person, setperson] = React.useState({
        firstName: "Rupali",
        lastName: "Behera",
        age: null,
    });
    console.log("person",person);
    let changeName = () => {
        //never set the state like this
        //setperson({
        //    firstName: "Tapaswini";
        //})
        setperson({
            ...person,
            firstName: "Tapaswini",
            age: 12,
        });
    }
}
ReactDOM.render(<Welcome/> , document.getElementById("container"));
     