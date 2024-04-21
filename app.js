let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let isDivisible = [];
for (let i = 0; i < num.length; i++) {
    if (num[i] % 3 == 0 && num[i] % 5 == 0) {
        isDivisible.push(num[i])
    } else if (num[i] % 3 == 0) {
        isDivisible.push("Three")
    } else if (num[i] % 5 == 0) {
        isDivisible.push("Five")
    } else {
        isDivisible.push(num[i])
    }

}
// document.write(isDivisible);
let button = document.getElementById('btn');
let text = document.getElementById('seg');
let flag = false;

button.addEventListener('click', () => {
    if (flag) {
        button.innerHTML = "Show";
        text.innerHTML = "";
        flag = false;
    } else {
        button.innerHTML = "Hide";
        text.innerHTML = isDivisible;
        flag = true;
    }
});




