FREE_WARNING = "Free shipping only applies to single customer orders"
BANNED_WARNING = "Unfortunately we do not ship to your country of residence"
NONE_SELECTED = 0

const customers = 1;
const location = "RSA";
let currency = null;
let shipping = null;
let isRsa;
let isNam;

const shoes = 300 * 1;
const toys = 100 * 5;
const shirts = 150 * NONE_SELECTED;
const batteries = 35 * 2;
const pens = 5 * NONE_SELECTED;


function calcShipping() {
    if (location === "RSA") {
        shipping = 400;
        currency = "R";
        isRsa = true;
    } else if (location === "NAM") {
        shipping = 600;
        currency = "$";
        isNam = true;
    } else {
        shipping = 800;
        currency = "$";
    }
}

calcShipping();

function totalCost() {
    return shoes + toys + shirts + batteries + pens;
}

if (isRsa && totalCost() >= 1000 || isNam && totalCost() >= 60) {
    (customers === 1) ? shipping = 0 : console.log(FREE_WARNING);
}

if (location === "NK") {
    console.log(BANNED_WARNING);
} else console.log("Price:", currency + (totalCost() + shipping));