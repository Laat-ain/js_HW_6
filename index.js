/* Первое задание */
let img_car = document.getElementById('img_car');
let manufacturer_car = document.getElementById('manufacturer_car');
let model_car = document.getElementById('model_car');
let year_car = document.getElementById('year_car');

document.getElementById('out_car').onclick = function () {
	let car = add_car('Alpina', 'BMW Alpina B3 Bi-Turbo Coupe', 2007, 'img/ALPINA_B3.jpg');

	img_car.src = car.image_address;
	manufacturer_car.innerText = 'Производитель: ' + car.manufacturer;
	model_car.innerText = 'Модель: ' + car.model;
	year_car.innerText = 'Год выпуска: ' + car.year;

}

function add_car(manufacturer, model, year, image_address) {
	return {
		manufacturer, model, year, image_address
	};
}

/* Второе задание */
const mas_check = [
	{ 'name': 'chocolate', 'quantity': 2, 'price': 85 },
	{ 'name': 'coffee', 'quantity': 1, 'price': 400 },
	{ 'name': 'cookie', 'quantity': 3, 'price': 55 }
]

withdraw_check();
purchase_amount();
max_price();


function withdraw_check() {
	let product_table = document.getElementById('product_table');
	for (number in mas_check) {
		let tr = document.createElement('tr');
		for(key in mas_check[number]){
			let td = document.createElement('td');
			td.textContent = mas_check[number][key];
			tr.appendChild(td);
		}
		product_table.appendChild(tr);	
	}
}

function purchase_amount() {
	let sum = 0;
	for (number in mas_check) {
		sum += (mas_check[number].quantity * mas_check[number].price);
	}
	document.getElementById('total_amount').innerText = 'Общая сумма покупки: ' + sum + ' рублей';
}

function max_price() {
	let mas = [];
	for (number in mas_check) {
		mas[number] = (mas_check[number].quantity * mas_check[number].price);
	}
	document.getElementById('max').innerText = 'Самая дорогая покупка в чеке: ' + Math.max.apply(Math, mas) + ' рублей';
}

