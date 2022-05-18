function prog() {
	var a = document.getElementById('a').value;
	var b = document.getElementById('b').value;
	var c = document.getElementById('c').value;

	var result = quad(a, b, c);

	var tableRef = document.getElementById('answer');

	var newRow = tableRef.insertRow();

	newRow.addEventListener('click', function () {
		var i=newRow.rowIndex;
		document.getElementById('answer').deleteRow(i);
	}, false);

	var cellE = newRow.insertCell();
	var cellA = newRow.insertCell();
	var cellD = newRow.insertCell();


	cellE.appendChild(document.createTextNode(result.e));
	cellA.appendChild(document.createTextNode(result.a));
	cellD.appendChild(document.createTextNode(result.d));

}

function quad(a, b, c) {
	var obj = {};

	if (a == 0) {
		obj.e = "a = 0";
		obj.a = "Это не квадратное уравнение"; 
		obj.d = "Попробуйте снова";
		return obj;
	}

	var disc = b * b - 4 * a * c;
	var x1, x2;
	var equation = "a="+a+", b="+b+", c="+c;
	
	if (disc > 0) {
		x1 = (-b + Math.sqrt(disc)) / (2 * a);
		x2 = (-b - Math.sqrt(disc)) / (2 * a);
		obj.e = equation;
		obj.a = "X1=" + x1 + ", X2=" + x2;
		obj.d = "D=" + disc;
		return obj;
	} else if (disc == 0) {
		x1 = -b / (2 * a);
		obj.e = equation;
		obj.a = "X=" + x1;
		obj.d = "D=" + disc;
		return obj; 
	} else if (disc < 0) {
		obj.e = equation;
		obj.a = "Корней нет!";
		obj.d = "D=" + disc;
		return obj;
	}
}