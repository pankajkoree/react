// class l_basket {
//     left_basket() {
//         let val1 = document.getElementById("val1").innerText;
//         val1 = Number(val1);
//         //console.log(val1);
//         let val2 = document.getElementById("val2").innerText;
//         val2 = Number(val2);
//         //console.log(val2)

//         if (val2 === 0 && val1 === 100) {
//             alert("can't take apples from basket 2");
//         }
//         else {
//             val2 -= 1;
//             val1 += 1;
//         }
//     }
// }
// class r_basket {

//     right_basket() {
//         let val1 = document.getElementById("val1").innerText;
//         val1 = Number(val1);
//         //console.log(val1);
//         let val2 = document.getElementById("val2").innerText;
//         val2 = Number(val2);
//         //console.log(val2)

//         while (val1 !== 0 && val2 !== 100) {
//             val1 -= 1;
//             val2 += 1;
//             console.log(val1, val2);
//         }
//     }
// }

// let ob1 = new l_basket();
// let ob2 = new r_basket();

// const basket1Count = document.querySelector('.basket-1 span');
// const basket2Count = document.querySelector('.basket-2 span');
// //const leftArrow = document.getElementById("leftarrow");
// const rightArrow = document.getElementById("rightarrow");

// let totalApples = 100;
// let secondBasketAppleCount = 0;
// let firstBasketAppleCount = totalApples - secondBasketAppleCount;
// basket1Count.innerText = firstBasketAppleCount;
// basket2Count.innerText = secondBasketAppleCount;

// rightArrow.addEventListener('click', () => {
//     firstBasketAppleCount--;
//     basket1Count.innerText = firstBasketAppleCount;
//     secondBasketAppleCount++;
//     basket2Count.innerText = secondBasketAppleCount;
// })

document.addEventListener('DOMContentLoaded', function () {
    const basket1Count = document.querySelector('.basket-1 span');
    const basket2Count = document.querySelector('.basket-2 span');
    const rightArrow = document.getElementById("rightarrow");
    const leftArrow = document.getElementById("leftarrow");

    let totalApples = 100;
    let secondBasketAppleCount = 0;
    let firstBasketAppleCount = totalApples - secondBasketAppleCount;
    basket1Count.innerText = firstBasketAppleCount;
    basket2Count.innerText = secondBasketAppleCount;

    leftArrow.addEventListener('click', () => {
        if (secondBasketAppleCount !== 0 && firstBasketAppleCount !== totalApples) {
            firstBasketAppleCount++;
            basket1Count.innerText = firstBasketAppleCount;
            secondBasketAppleCount--;
            basket2Count.innerText = secondBasketAppleCount;
        }
        else {
            alert("wrong for left arrow...");
        }

    })

    rightArrow.addEventListener('click', () => {
        if (firstBasketAppleCount !== 0 && secondBasketAppleCount !== totalApples) {
            firstBasketAppleCount--;
            basket1Count.innerText = firstBasketAppleCount;
            secondBasketAppleCount++;
            basket2Count.innerText = secondBasketAppleCount;
        }
        else {
            alert("wrong for right click...")
        }
    });
});
