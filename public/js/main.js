document.addEventListener('DOMContentLoaded', function(){

var webPage = document.getElementById('container');

// create header with all components
// ------------------------------------------------

var header = document.createElement('div')
header.classList.add('navbar')
header.classList.add('navbar-default')
header.classList.add('navbar-fixed-top')
header.classList.add('navbar-color-fix')

webPage.appendChild(header)
console.log(header.style)

var tabBar = document.createElement('div')
tabBar.classList.add('nav')
tabBar.classList.add('tabBar')


header.appendChild(tabBar)

var tabContents =[['tab','tab','tab','tab','tab']]

var tabTitles = ['about', 'get data', 'tools']
var tabObjects = []
for(var i =0; i<tabTitles.length; i++){
	var tabBox = document.createElement('div')
	tabBox.innerHTML = "<div class='miniTab'><span>"+tabTitles[i]+"<div></span>";
	tabBox.classList.add('tabBox')
	console.log(tabBox)
	tabBar.appendChild(tabBox)

	tabBox.addEventListener('mouseover', function(){
			var start = document.createElement('div')
				start.classList.add('first-appear-tab')
				start.innerHTML = "<div class='miniTab'><span>"+tabContents[0][0]+" "+ 0 +"<div></span>";
				this.appendChild(start)

			for(var k = 0; k<tabContents.length; k++){
				var list = document.createElement('div')
				list.classList.add('appearTab')
				list.innerHTML = "<div class='miniTab'><span>"+tabContents[0][k]+" "+ k +"<div></span>";
				this.appendChild(list)
			}
	})
	tabObjects.push(tabBox)

}

console.log(tabObjects)

})

