function Welcome(){
    const [fruits, setfruits] = React.useState([
        "Mango",
        "Kiwi",
        "Apple",
        "Grapes",
        "Banana",
    ]);
    let removeKiwi = () => {
        let indexOfKiwi = fruits.indexOf("Kiwi");
        if(indexOfKiwi >=0) {
            fruits.splice(indexOFKiwi, 1);
            setfruits([...fruits]);
            console.log("indexOfKiwi", indexOfKiwi);
        }
    };
    return (
        <div>
            {fruits.map((val,idx) => {
                return <h2 key={idx}>{val}</h2>;
            })}
            <button onClick={removeKiwi}>
            Remove Kiwi
            </button>
        </div>
    );

}
ReactDOM.render(<Welcome/> , document.getElementById("container"));
     