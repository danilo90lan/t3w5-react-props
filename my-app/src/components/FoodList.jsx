import FoodCard from "./FoodCard";


let food = [
    "pizza",
    "hamburger",
    "hotdog",
    "tacos",
    "spaghetti",
    "steak",
    "sushi",
    "chicken",
    "pizza"
];


export default function FoodList() {
    return (
        <section>
                {
                    food.map((element, index) => {
                        return <p ><FoodCard key = {index} foodName = {element}/></p>;
                    })
                }

        </section>
    )
}