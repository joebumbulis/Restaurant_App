export default function homeView(store){
  const urlFancy = 'https://tiy-austin-front-end-engineering.github.io/restaurantApi/fancy.json';
  const urlCafe = 'https://tiy-austin-front-end-engineering.github.io/restaurantApi/cafe.json';
  const urlPub = 'https://tiy-austin-front-end-engineering.github.io/restaurantApi/pub.json';



  let $html = $(`
    <section>
    <div class="header">
        <h1>Deliciousmess!</h1>
        <div class="top-button">VIEW MENUS</div>
    </div>

    <main>
            <img class="table-pic" src="app/images/medPic.jpg" alt="">
        <div class="menu-container">
        <h2>Our Menus</h2>
        <h3>Appetizers</h3>
        <h4>Item Title</h4>
        <h5>price</h5>
        <p class='description'>description</p>
        </div>
        <aside class="order-box">
            <h6>Your Order</h6>
            <ul>

            </ul>
            <h6>Tax:</h6>
            <h6>Total:</h6>
            <button class="order-button" type="button">Order Now</button>
        </aside>
    </main>
    <footer>
        Deliciousmess&COPY; 2017
    </footer>
</section>
    </section>
    `);


    $.ajax({
      type: 'GET',
      dataType: 'json',
      url: urlFancy,
    }).then((data)=>{
      console.log(data);
      let appetizers = data.appetizers;
      let entrees = data.entrees;
      let sides = data.sides;
      console.log(appetizers);
      let menuContainer =  $html.find('.menu-container')
      appetizers.forEach((item)=>{
        console.log(item);
      
      })



      entrees.forEach((item)=>{
        console.log(item);
      })
      sides.forEach((item)=>{
        console.log(item);
      })
    })


  $($html).find('button').on('click', function (e) {
    store.dispatch({
      type: "ADD_TO_ORDER",
      // item:
    });
  });

  return $html;
}

// }
