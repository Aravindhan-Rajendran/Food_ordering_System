let open = document.querySelector(".open");
let close = document.querySelector(".close");
let side_bar = document.querySelector(".side-bar");

open.addEventListener("click", function () {
  close.style.display = 'block';
  side_bar.style.display = "flex";
})

close.addEventListener("click", function () {
  close.style.display = 'none';
  side_bar.style.display = "none";
})

const FetchData =
  "https://gist.githubusercontent.com/Aravindhan-Rajendran/2c77dd65baa2689987802925ee0cfc02/raw/5b057b9af386fbe4b6eee493f63642ba4dd57d2d/food_menu.json";
let cardSection = document.querySelector(".card-section");
document.addEventListener("DOMContentLoaded", function () {
  function getMenu() {
    fetch(FetchData).then(response => {
      return response.json();
    }).then(data => {
      data.forEach((items) => {
        cardSection.innerHTML += `
      <div class="card">
          <img src=${items.imgSrc} alt="" class="card-main-img"/>
          <div class="card-content">
              <div class="card-start-content">
                  <p class="food-name">${items.name}</p>
                  <p class="cost">$${items.price}/-</p>
              </div>
              <div class="card-end-content">
                  <img src="https://surjeet-food-ordering-system.netlify.app/img/Group%204.png" alt="">
              </div>
          </div>
      </div>
      `
      })
    })
  }
  getMenu();
  function TakeOrder() {
    return new Promise(resolve => {
      setTimeout(function () {
        const burger = [
          { name: "Cheese Burger", price: 5.99 },
          { name: "Veggie Burger", price: 6.49 },
          { name: "Bacon Burger", price: 7.49 },
          { name: "Chicken Burger", price: 6.99 },
          { name: "Mushroom Burger", price: 6.79 },
          { name: "Double Cheese Burger", price: 8.99 },
          { name: "BBQ Burger", price: 7.99 },
          { name: "Fish Burger", price: 7.29 },
          { name: "Turkey Burger", price: 6.49 },
          { name: "Spicy Burger", price: 7.49 }
        ];
        const randomburger = [];
        for (let i = 0; i <= 3; i++) {
          const randomindex = Math.floor(Math.random() * burger.length);
          randomburger.push(burger[randomindex]);
        }
        resolve(randomburger);
      }, 2500);
    });
  }
  function orderPrep() {
    return new Promise(resolve => {
      setTimeout(() => {
        let orderPrepObj = { order_status: true, paid: false }
        resolve(orderPrepObj);
      }, 1500);
    })
  }
  function payOrder() {
    return new Promise(resolve => {
      setTimeout(() => {
        let payOrderObj = { order_status: true, paid: true };
        resolve(payOrderObj);
      }, 1000);
    })
  }
  function thankyou() {
    alert('thankyou for eating with us today!');
  }
  function main() {
    TakeOrder()
      .then(order => {
        console.log('Your Order:', order);
        return orderPrep(); 
      })
      .then(orderStatus => {
        console.log('Order Preparation Status:', orderStatus);
        return payOrder();
      })
      .then(payOrderStatus => {
        console.log('Payment Status:', payOrderStatus);
        if (payOrderStatus && payOrderStatus.paid) {
          thankyou();
        }
      })
}
main();
});
function secondScreen(){
  let hideMainImg = document.querySelector('.main_hero_img');
  hideMainImg.style.display = 'none';
};
