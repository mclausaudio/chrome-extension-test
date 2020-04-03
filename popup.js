document.addEventListener('DOMContentLoaded', function () {

  const bg = chrome.extension.getBackgroundPage();
  Object.keys(bg.term).forEach(function (url) {
    const div = document.createElement('div');
    div.textContent = `${url}: ${bg.term[url]}`
    document.body.appendChild(div);
  })

  // document.querySelector('button').addEventListener('click', onclick, false)
  // function onclick() {
  //   chrome.tabs.query({ currentWindow: true, active: true }, (tabs) => {
  //     chrome.tabs.sendMessage(tabs[0].id, 'hi', setCount)
  //   })
  // }
  // function setCount(res) {
  //   const div = document.createElement('div');
  //   div.textContent = `${res.count} of term`
  //   document.body.appendChild(div)
  // }
})