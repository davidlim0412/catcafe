console.log("hello")
fetch('monkeytype/1-1000.txt')
    .then(response => response.text())
    .then(data => console.log(data));