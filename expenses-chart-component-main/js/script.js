const chartData = fetch('js/data.json')
  .then(response => response.json())
  .then(data => {
    data.forEach((item, index) => {
      const bar = document.getElementsByClassName('bar')[index];
      bar.style.height = `${item.amount}%`;
    });
  });
  
  
// Hover bar //