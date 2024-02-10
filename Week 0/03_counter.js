let counter = () => {
    let count = 0;
    let increment = () => console.log("Updated Count -> ", ++count);
    let decrement = () => console.log("Updated Count -> ", --count);
    let resetCount = () => count = 0;
    let getCount = () => console.log("Corrent Count -> ", count);
    return {
        increment,decrement,resetCount,getCount
    }
}

let counter_object = counter()

counter_object.increment(); // 1
counter_object.increment(); // 2
counter_object.getCount(); // 2
counter_object.decrement(); // 1

