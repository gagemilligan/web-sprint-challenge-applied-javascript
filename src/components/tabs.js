const Tabs = (topics) => {
  const div = document.createElement('div');
  const div2 = document.createElement('tab1');
  const div3 = document.createElement('tab2');
  const div4 = document.createElement('tab3');

  div2.appendChild(div2);
  div3.appendChild(div3);
  div4.appendChild(div4);

  div.classList.add('topics');
  div2.classList.add('tab1');
  div3.classList.add('tab2');
  div4.classList.add('tab3');

div.textContent = (topics)
  div2.textContent = 'javascript';
  div3.textContent = 'bootstrap';
  div4.textContent = 'technology';

  return div
}
  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //


const tabsAppender = (selector) => {
  document.querySelector(selector)
  .appendChild(Tabs("javascript", "bootstrap", "technology"))
}
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `http://localhost:5000/api/topics` (test it with a console.log!).
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //


export { Tabs, tabsAppender }
