function makeChai(type: string, cups: number) {
    console.log(`making ${cups} cups of ${type} chai`);
}

makeChai("masala", 3);

function getChaiPrice(): number {
    return 23;
} // here you must retur a number or any custom data type if you put (): CustomDataType before the curly braces.

function makeOrder(order: string) {
    if (!order) return null;
    return order;
}

//---------logger function
function logChai(): void {
    // void means this function is not returning anything.
    console.log("Chai is ready");
}

// optional and default parameter : these are usually written at the end of the function.
function orderChai(type?: string) {
    // rest of the function code
}

function orderChaiTwo(type: string = "Masala Chai") {
    // here if you don't provide type of chai as a string , we have a default string value.
}

// -------- complex values inside a function : Very simple

function createChai(order: {
    type: string;
    sugar: number;
    size: "small" | "large";
}): number {
    return 4;
}
