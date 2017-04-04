export default function homeView(store){

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
            <h5>Price</h5>
            <p class="description">description: Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
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

  // $($html).find('button').on('click', function (e) {
  //   store.dispatch({
  //     type: "ADD_TO_ORDER",
  //     // item:
  //   });
  // });

  return $html;
}

// }
