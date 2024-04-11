let add = document.querySelector("#btn1");
let sub = document.querySelector("#btn2");
let mul = document.querySelector("#btn3");
let div = document.querySelector("#btn4");
let mod = document.querySelector("#btn5");


add.addEventListener('click', () => {
    const sum = parseInt(document.querySelector("#input1").value) + parseInt(document.querySelector("#input2").value);
    alert(`Result: ${sum.toString()}`);
});
sub.addEventListener('click', () => {
    const sub = parseInt(document.querySelector("#input1").value) - parseInt(document.querySelector("#input2").value);
    alert(`Result: ${sub.toString()}`);
});
mul.addEventListener('click', () => {
    const mul = parseInt(document.querySelector("#input1").value) * parseInt(document.querySelector("#input2").value);
    alert(`Result: ${mul.toString()}`);
});
div.addEventListener('click', () => {
    const div = parseInt(document.querySelector("#input1").value) / parseInt(document.querySelector("#input2").value);
    alert(`Result: ${div.toString()}`);
});
mod.addEventListener('click', () => {
    const mod = parseInt(document.querySelector("#input1").value) % parseInt(document.querySelector("#input2").value);
    alert(`Result: ${mod.toString()}`);
});

//// ASCIII SUM


let btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    let input1 = document.getElementById("input1").value;
    let input2 = document.getElementById("input2").value;
    let result = document.getElementById("input3");

    if ((input1 == "" || input1 == null) || (input2 == "" || input2 == null)) {
        result.value = "Please enter some String...";
    } else {
        result.value = input1.charCodeAt() + " " + input2.charCodeAt();
    }


});

/////Largest Number
/////Largest Numb


let btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    let input1 = document.getElementById("input1").value;
    let input2 = document.getElementById("input2").value;
    let input3 = document.getElementById("input3").value;
    let result = document.getElementById("input4");

    if ((input1 === "" || input1 === null) || (input2 === "" || input2 === null) || (input3 === "" || input3 === null)) {
        result.value = " ";

    } else {
        if ((input1 > input2) && (input1 > input3)) {
            result.value = input1.toString();
        } else if ((input2 > input1) && (input2 > input3)) {
            result.value = input2.toString();
        } else {
            result.value = input3.toString();
        }

    }
});

// Swap case


let btn = document.getElementById("btn");
let para = document.getElementById("para");

btn.addEventListener("click", () => {
    let input = document.getElementById("input1").value;
    if (input == "" || input == null) {
        para.innerText = "Please Enter Something in input Box";
        para.style.display = "block";
    } else {
        let lowerCase = input.toLowerCase();
        let upperCase = input.toUpperCase();

        if (lowerCase === input) {
            para.innerText = upperCase;
            para.style.display = "block";
        } else {
            para.innerText = lowerCase;
            para.style.display = "block";
        }
    }
});

// Cuboid



let length = document.getElementById("input1");
let bredth = document.getElementById("input3");
let height = document.getElementById("input2");
let volume = document.getElementById("btn1");
let TSA = document.getElementById("btn2");
let CSA = document.getElementById("btn3");
let para = document.getElementById("para")



volume.addEventListener("click", () => {
    if ((length.value == "" || length.value == null) || (bredth.value == "" || bredth.value == null) || (height.value == "" || height.value == null)) {
        para.innerHTML = "Please enter the details correctly";
        para.style.display = "block";
    } else {
        let volumeCal = parseInt(length.value) * parseInt(bredth.value) * parseInt(height.value);
        console.log(volumeCal);
        para.innerHTML = `${volumeCal.toString()} cm<sup>3</sup>`;
        para.style.display = "block";
    }

})
TSA.addEventListener("click", () => {
    if ((length.value == "" || length.value == null) || (bredth.value == "" || bredth.value == null) || (height.value == "" || height.value == null)) {
        para.innerHTML = "Please enter the details correctly";
        para.style.display = "block";
    } else {
        let TSACal = 2 * ((parseInt(length.value) * parseInt(bredth.value)) + (parseInt(bredth.value) * parseInt(height.value)) + (parseInt(height.value) * parseInt(length.value))); //2*(lb+bh+hl)
        para.innerHTML = `${TSACal.toString()} cm<sup>2</sup>`;
        para.style.display = "block";
    }
})
CSA.addEventListener("click", () => {
    if ((length.value == "" || length.value == null) || (bredth.value == "" || bredth.value == null) || (height.value == "" || height.value == null)) {
        para.innerHTML = "Please enter the details correctly";
        para.style.display = "block";
    } else {
        let CSACal = 2 * (parseInt(length.value) + parseInt(bredth.value)) * parseInt(height.value); // 2*(l+b)*h
        console.log(CSACal);
        para.innerHTML = `${CSACal.toString()} cm<sup>2</sup>`;
        para.style.display = "block";
    }
})








