export default function FoodCard(props) {
    // let cibo = props.foodName;
    const {foodName} = props;
    return (
        <div>
            {/* key value pair */}
            {/* <h3>{Object.keys(props)} {props.foodName}</h3> */}
            <h3>{foodName}</h3>
                <p>Description of the Food</p>
            
        </div>
    )
}