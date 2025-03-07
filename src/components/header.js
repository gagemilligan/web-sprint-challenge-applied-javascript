const Header = (title, date, temp) => {

  const div = document.createElement('div');
  const h1 = document.createElement('h1');
  const span1 = document.createElement('span');
  const span2 = document.createElement('span');

  div.appendChild(h1);
  div.appendChild(span1);
  div.appendChild(span2);
  
  div.classList.add('header');
  span1.classList.add('date');
  span2.classList.add('temp');

  h1.textContent = title;
  span1.textContent = date;
  span2.textContent = temp;

  return div
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
}

const headerAppender = (selector) => {
  document.querySelector(selector)
  .appendChild(Header("Lambda Times", "June, 2nd", "95"))
}
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //


export { Header, headerAppender }
