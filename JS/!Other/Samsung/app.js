(function () {
    'use strict';
	
	var app = {};

	function init() {
		var redButton, dividerVertical, dividerHorizontal, svgContainer, 
		rightContainer, ctrlContainer, historyContainer;
		
		app.triangleColor = 'blue';
		app.rectangleColor = 'red';
		
		redButton = document.getElementById("redButton");
		redButton.addEventListener('click', changeColor);
		
		dividerVertical = document.getElementById("dividerVertical");
		dividerHorizontal = document.getElementById("dividerHorizontal");
		
		svgContainer = document.getElementById("svgContainer");
		rightContainer = document.getElementById("rightContainer");
		
		ctrlContainer = document.getElementById("ctrlContainer");
		historyContainer = document.getElementById("historyContainer");
		
		dividerVertical.style.cursor = "col-resize";
		dividerHorizontal.style.cursor = "row-resize";
		
		dividerVertical.addEventListener('mousedown', initDragVertical, false);
		dividerHorizontal.addEventListener('mousedown', initDragHorizontal, false);
	}

	function initDragVertical(e) {
		event.preventDefault();
		app.startX = e.clientX;
		app.startY = e.clientY;
	   
		app.startWidth1 = parseInt(document.defaultView.getComputedStyle(svgContainer).width, 10);
		app.startWidth2 = parseInt(document.defaultView.getComputedStyle(rightContainer).width, 10);
	 
		document.documentElement.addEventListener('mousemove', doDragVertical, false);
		document.documentElement.addEventListener('mouseup', stopDrag, false);
	}

	function initDragHorizontal(e) {
		event.preventDefault();
		app.startX = e.clientX;
		app.startY = e.clientY;
	   
		app.startHeight1 = parseInt(document.defaultView.getComputedStyle(ctrlContainer).height, 10);
		app.startHeight2 = parseInt(document.defaultView.getComputedStyle(historyContainer).height, 10);

		document.documentElement.addEventListener('mousemove', doDragHorizontal, false);
		document.documentElement.addEventListener('mouseup', stopDrag, false);
	}

	function doDragVertical(e) {
		svgContainer.style.width = (app.startWidth1 + e.clientX - app.startX) + 'px';
		rightContainer.style.width = (app.startWidth2 - e.clientX + app.startX) + 'px';
	}

	function doDragHorizontal(e) {
	   ctrlContainer.style.height = (app.startHeight1 + e.clientY - app.startY) + 'px';
	   historyContainer.style.height = (app.startHeight2 - e.clientY + app.startY) + 'px';
	}

	function stopDrag(e) {
		document.documentElement.removeEventListener('mousemove', doDragVertical, false);    		
		document.documentElement.removeEventListener('mousemove', doDragHorizontal, false);    		
		document.documentElement.removeEventListener('mouseup', stopDrag, false);
	}
	
	var changeColor = function() {
		var triangle, rectangle, historyContainer;
		
		if (app.triangleColor == 'red') {
 			app.rectangleColor = 'red';
			app.triangleColor = 'blue';
		} else {
			app.rectangleColor = 'blue';
			app.triangleColor = 'red';
		}
		
		triangle = document.getElementById("triangle");
		rectangle = document.getElementById("rectangle");
		historyContainer = document.getElementById("historyContainer");
		
		triangle.setAttribute("fill", app.triangleColor);
		rectangle.setAttribute("fill", app.rectangleColor);
		
		historyContainer.innerHTML = historyContainer.innerHTML + "Set triangle's color in " + app.triangleColor + "<hr>"; 
	}
	
	window.onload = init;
})();















