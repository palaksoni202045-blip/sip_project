const pieChart = new Chart(document.getElementById("pieChart"), {

type: "pie",

data: {

labels: ["Food", "Shopping", "Travel", "Bills"],

datasets: [{

data: [5000, 7000, 2000, 1000],

backgroundColor: [

"#4F46E5",

"#10B981",

"#F59E0B",

"#EF4444"

]

}]

}

});

const barChart = new Chart(document.getElementById("barChart"), {

type: "bar",

data: {

labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],

datasets: [{

label: "Expenses",

data: [5000, 8000, 6000, 7000, 4000, 9000],

backgroundColor: "#4F46E5"

}]

}

});