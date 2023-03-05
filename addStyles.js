const bodyClass ="bg-violet-300 bg-gradient-to-br from-emerald-300 bg-opacity-75";
const bdy = document.querySelector("body");
bodyClass.split(" ").forEach((cls) => bdy.classList.add(cls));

const calcBodyClass =
 "max-w-lg rounded overflow-hidden shadow-2xl bg-emerald-900 bg-opacity-80 bg-gradient-to-tr from-violet-900 flex";
const calcBody = document.querySelector(".calcBody");
calcBodyClass.split(" ").forEach((cls) => calcBody.classList.add(cls));

const outputClass =
 "flex flex-col w-3/4 h-12 justify-center items-end m-1 bg-gray-300 text-gray-900 font-semibold px-2 border border-black hover:border-gray-500 rounded";
const output = document.querySelector(".output");
outputClass.split(" ").forEach((cls) => output.classList.add(cls));

const previousNumberClass =
 "flex max-w-lg h-1/3 pb-5 pt-1 text-gray-600 text-xs";
const previousNumber = document.querySelector(".previousNumber");
previousNumberClass.split(" ").forEach((cls) => previousNumber.classList.add(cls));

const currentNumberClass =
 "flex max-w-lg h-2/3 pb-2 text-xl";
const currentNumber = document.querySelector(".currentNumber");
currentNumberClass.split(" ").forEach((cls) => currentNumber.classList.add(cls));

const buttons = document.querySelectorAll('button');
buttons.forEach((btn) => {
    addClasses(btn)
});

function addClasses(button) {
    const btnNumberClass=
        "hover:bg-emerald-400 hover:bg-gradient-to-tr from-violet-400 border-emerald-400";
    const btnClearClass=
        "hover:bg-amber-400 hover:bg-gradient-to-tr from-rose-400 via-amber border-amber-400";
    const btnOpClass=
        "hover:bg-violet-400 hover:bg-gradient-to-tr from-emerald-400 border-violet-400";
    const btnDecimalClass =
        "hover:bg-rose-400 hover:bg-gradient-to-tr from-amber-400 border-rose-400";
    const btnEqualClass =
        "hover:bg-violet-400 hover:bg-gradient-to-tr from-rose-400 via-amber-400 to-sky-400 border-white";


    if (button.classList.value === "number") {
        btnNumberClass.split(" ").forEach((cls) => button.classList.add(cls));
    } else if (button.classList.value === "operator") {
        btnOpClass.split(" ").forEach((cls) => button.classList.add(cls));
    } else if (button.classList.value === "clear") {
        btnClearClass.split(" ").forEach((cls) => button.classList.add(cls));
    }
    else if (button.classList.value === "clear") {
        btnClearClass.split(" ").forEach((cls) => button.classList.add(cls));
    }
    else if (button.classList.value === "decimal") {
        btnDecimalClass.split(" ").forEach((cls) => button.classList.add(cls));
    }
    else if (button.classList.value === "equal") {
        btnEqualClass.split(" ").forEach((cls) => button.classList.add(cls));
    }

    const baseClass =
        "flex w-12 h-12 justify-center items-center m-1 font-bold py-2 px-2 rounded text-white border-2 text-2x1";
    baseClass.split(" ").forEach((cls) => button.classList.add(cls));
};