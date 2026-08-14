// type narrowing : In the function below, inside the return statement you'll know what is the type of "kind", so, when you try to use some method with a '.', only the type specific methods will show.
function getChai(kind: string | number) {
    if (typeof kind === "string") {
        return `Making ${kind} chai...`;
    }
    return `Chai order : ${kind}`;
}

// Finding truthiness
function serveChai(msg?: string) {
    if (msg) {
        return `Serving ${msg}`; // you know this block will run only if the value of msg is present.
    }
    return `Serving default masala chai.`; // you know if you use 'msg' here, you will get an error.
}

// Exhaustive checks
// you can give custom definitive types.
function orderChai(size: "small" | "medium" | "large" | number) {
    if (size === "small") {
        return `small cutting chai...`;
    }

    if (size === "medium" || size === "large") {
        return `maek extra chai`;
    }

    return `chai order number #${size}`;
}

// More exhaustive checking options with class
class KulhadChai {
    serve() {
        return `Serving Kulhad Chai`;
    }
}
class CuttingChai {
    serve() {
        return `Serving cutting Chai`;
    }
}

function serve(chai: KulhadChai | CuttingChai) {
    if (chai instanceof KulhadChai) {
        // extensive check
        return chai.serve();
    }
}

// making our own types

type ChaiOrder = {
    type: string;
    sugar: number;
    malai: boolean;
};

function isChaiOrder(obj: any): obj is ChaiOrder {
    return (
        typeof obj === "object" &&
        obj !== null &&
        typeof obj.type === "string" &&
        typeof obj.sugar === "number" &&
        typeof obj.malai === "boolean"
    );
}

function serveOrder(item: ChaiOrder | string) {
    if (isChaiOrder(item)) {
        return `Serving ${item.type} chai with ${item.sugar} sugar.`;
    }
    return `Serving custom chai: ${item}`;
}

// another example

type MasalaChai = { type: "masala"; spiceLevel: number };
type GingerChai = { type: "ginger"; amount: number };
type ElaichiChai = { type: "elaichi"; fervor: number };

type Chai = MasalaChai | GingerChai | ElaichiChai;

function MakeChai(order: Chai) {
    switch (order.type) {
        case "masala":
            return `Masala Chai`;
            break;
        case "ginger":
            return `Ginger Chai`;
            break;
        case "elaichi":
            return "Elaichi Chai";
            break;

        default:
            break;
    }
}


function brew (order: MasalaChai | GingerChai){
  if('spiceLevel' in order){
    // rest of the code knowing the order is from MasalaChai because only MasalaChai has the spiceLevel in it's defined type.
  }
}


// another guard rail function
function isStringArray(arr: unknown): arr is string[] {
  return Array.isArray(arr) &&
         arr.every(item => typeof item === "string");
}