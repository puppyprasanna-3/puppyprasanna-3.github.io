function json2html(data) {
  let table = '<table data-user="puppyy2709@gmail.com">';
  table += '<thead><tr><th>Name</th><th>Age</th><th>Gender</th></tr></thead>';
  table += '<tbody>';
  
  data.forEach(item => {
    table += '<tr>';
    table += <td>${item.Name || ''}</td>;
    table += <td>${item.Age || ''}</td>;
    table += <td>${item.Gender || ''}</td>;
    table += '</tr>';
  });
  
  table += '</tbody></table>';
  return table;
}

// Example usage:
const data = [
  { Name: "Alice", Age: 25 },
  { Name: "Bob", Age: 30 },
  { Name: "Charlie", Age: 35, Gender: "M" }
];

console.log(json2html(data));
