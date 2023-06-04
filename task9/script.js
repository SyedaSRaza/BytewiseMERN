// // console.log("I");
// // console.log("am");

// // setTimeout(() => {
// //     console.log("so");
// // }, 4000)

// // console.log("tired");

// function one(call_two){
//     call_two()

//     console.log("function 1");
// }
// function two(){
//     console.log("funct 2")
// }
// one(two)

//Using Callbacks:


//object

let stock = {
    fruits: ["banana", "strawberry", "peach", "apple"],
    liquid: ["Milk", "water"],
    toppings: ["chocolate", "sprinkles", "cream"],
    holder: ["cone", "cup", "stick"]
};

let is_shop_open = true;



let toppings_choice = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            resolve(console.log("Choose toppings")
            )
        }, 3000);
    });
};

async function kitchen() {
    console.log("A")
    console.log("B")
    console.log("C")

    await toppings_choice()

    console.log("D")
    console.log("E")
}

kitchen()

console.log("Cleaning dishes")
console.log("Cleaning tables")
console.log("Taking other orders")



//PROMISES
/*
let order = (time, work) => {

    return new Promise((resolve, reject) => {
        if (is_shop_open) {

            setTimeout(() => { resolve(work()) }, time)

        }
        else {
            reject(console.log("Shop is closed"))
        }
    })
}
order(2000, ()=>console.log(`${stock.fruits[0]} was selected`))

.then(()=>{

    return order(0000, ()=>console.log("Production has started"))

})

.then(()=>{
    return order(2000, ()=>console.log("Fruit has been cut"))
})


.then(()=>{
    return order(1000, ()=>console.log(`${stock.liquid[0]}and ${stock.liquid[1] }`))
})


.then(()=>{
    return order(1000, ()=>console.log(`${stock.liquid[0]} and ${stock.liquid[1]} was selected`))
})

.then(()=>{
    return order(1000, ()=>console.log("start machine"))
})


.then(()=>{
    return order(2000, ()=>console.log(`Icecream was placed on: ${stock.holder[0]}`))
})


.then(()=>{
    return order(3000, ()=>console.log(`Toppings are ${stock.toppings[0]}`))
})


.then(()=>{
    return order(2000, ()=>console.log("Icrecream was served"))
})

.catch(()=>{
    console.log("Customer is gone")
})

.finally(()=>{
    console.log("Shop is closed")
})
 */

//CALLBACK

/* 
let order = (fruits_name, call_production) => {
    setTimeout(() => {
        console.log(`${stock.fruits[fruits_name]} was selected`);
        call_production()

    }, 2000);
};

let production = () => {
    setTimeout(() => {
        console.log("Production has started");

        setTimeout(() => {
            console.log("The fruit has been cut");

            setTimeout(() => {
                console.log(`${stock.liquid[0]} and ${stock.liquid[1]} was added`);

                setTimeout(() => {
                    console.log("The machine has been started");

                    setTimeout(() => {
                        console.log(`ice was served in a ${stock.holder[0]}`);

                        setTimeout(() => {
                            console.log(`${stock.toppings[0]} are the toppings`);

                            setTimeout(() => {
                                console.log(`Serve Icecream`);
                            }, 2000)
                        }, 3000)
                    }, 2000)
                }, 1000)
            }, 1000)
        }, 2000)
    }, 0000)
};

order(0, production); */