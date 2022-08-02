const getData = (func) => {
  fetch('./data.json')
  .then(response => response.json())
  .then(data => func(data))
}

export default getData;