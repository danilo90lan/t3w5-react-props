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
            <ul>
                {
                    food.map((element, index) => {
                        return <li key = {index}>{element}</li>;
                    })
                }
            </ul>
        </section>
    )
}