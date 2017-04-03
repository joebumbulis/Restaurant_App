export default function homeView(store){
  let $html = $(`
    <section>

    </section>
    `);

  $($html).find('button').on('click', function (e) {
    store.dispatch({
      type: "ADD_TO_ORDER",
      // item:
    });
  });

  return $html;
}

// }
