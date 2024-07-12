// document.addEventListener("DOMContentLoaded", function() {
//   const data = {
//       customers: [
//           { id: 1, name: "Ahmed Ali" },
//           { id: 2, name: "Aya Elsayed" },
//           { id: 3, name: "Mina Adel" },
//           { id: 4, name: "Sarah Reda" },
//           { id: 5, name: "Mohamed Sayed" }
//       ],
//       transactions: [
//           { id: 1, customer_id: 1, date: "2022-01-01", amount: 1000 },
//           { id: 2, customer_id: 1, date: "2022-01-02", amount: 2000 },
//           { id: 3, customer_id: 2, date: "2022-01-01", amount: 550 },
//           { id: 4, customer_id: 3, date: "2022-01-01", amount: 500 },
//           { id: 5, customer_id: 2, date: "2022-01-02", amount: 1300 },
//           { id: 6, customer_id: 4, date: "2022-01-01", amount: 750 },
//           { id: 7, customer_id: 3, date: "2022-01-02", amount: 1250 },
//           { id: 8, customer_id: 5, date: "2022-01-01", amount: 2500 },
//           { id: 9, customer_id: 5, date: "2022-01-02", amount: 875 }
//       ]
//   };

//   // Prepare data for total amount by customer
//   const totalAmountByCustomer = {};
//   data.transactions.forEach(transaction => {
//       if (!totalAmountByCustomer[transaction.customer_id]) {
//           totalAmountByCustomer[transaction.customer_id] = 0;
//       }
//       totalAmountByCustomer[transaction.customer_id] += transaction.amount;
//   });

//   const customerLabels = data.customers.map(customer => customer.name);
//   const customerAmounts = data.customers.map(customer => totalAmountByCustomer[customer.id] || 0);

//   // Prepare data for total amount by date
//   const totalAmountByDate = {};
//   data.transactions.forEach(transaction => {
//       if (!totalAmountByDate[transaction.date]) {
//           totalAmountByDate[transaction.date] = 0;
//       }
//       totalAmountByDate[transaction.date] += transaction.amount;
//   });

//   const dateLabels = Object.keys(totalAmountByDate);
//   const dateAmounts = Object.values(totalAmountByDate);

//   // Create total amount by customer chart
//   const ctx1 = document.getElementById('totalAmountByCustomerChart').getContext('2d');
//   new Chart(ctx1, {
//       type: 'bar',
//       data: {
//           labels: customerLabels,
//           datasets: [{
//               label: 'Total Amount by Customer',
//               data: customerAmounts,
//               backgroundColor: 'rgba(75, 192, 192, 0.2)',
//               borderColor: 'rgba(75, 192, 192, 1)',
//               borderWidth: 1
//           }]
//       },
//       options: {
//           scales: {
//               y: {
//                   beginAtZero: true
//               }
//           }
//       }
//   });

//   // Create total amount by date chart
//   const ctx2 = document.getElementById('totalAmountByDateChart').getContext('2d');
//   new Chart(ctx2, {
//       type: 'line',
//       data: {
//           labels: dateLabels,
//           datasets: [{
//               label: 'Total Amount by Date',
//               data: dateAmounts,
//               backgroundColor: 'rgba(153, 102, 255, 0.2)',
//               borderColor: 'rgba(153, 102, 255, 1)',
//               borderWidth: 1,
//               fill: false
//           }]
//       },
//       options: {
//           scales: {
//               y: {
//                   beginAtZero: true
//               }
//           }
//       }
//   });
// });

async function getdate(){

    let res = await fetch('./Response.json')
    let data = await res.json()
    console.log(data);
}
getdate()