
document.addEventListener('DOMContentLoaded', function(){
console.log('loaded')
var gameBody = document.createElement('div')
gameBody.style.width ='600px';
gameBody.style.height = '600px';
gameBody.style.border = '1px dotted black'
gameBody.style.left = "0"
gameBody.style.right = '0'
gameBody.style.margin = '20px auto'
document.body.appendChild(gameBody)

var bird = document.createElement('div')
bird.classList.add('bird')

gameBody.appendChild(bird)
console.log(bird.style)
bird.style.marginTop = '200px';
bird.style.marginLeft = '250px';


// setInterval(function(){
// 	console.log('hit')
// 	bird.style.marginTop = (parseInt(bird.style.marginTop, 10) - 1)+'px'
// },20)

document.body.addEventListener('keypress', function(e){
		if(e.which ===32){
			clearInterval(jumpInterval)
			var initPos = bird.style.marginTop.split('p')
			var jumpTarget = (Number(initPos[0]) - 1)-100
			var velocity = 1;
			var jumpStart = true;
			var jumpOrigin = Number(initPos[0])
			var jumpInterval = setInterval(function(){
				var position = bird.style.marginTop.split('p')
				if(jumpStart){
					if(jumpTarget <=(Number(position[0], 10))-50){
					bird.style.marginTop = (Number(position[0]) - 2)+'px'
					}
					else if(jumpTarget <=(Number(position[0]))-25){
					bird.style.marginTop = (Number(position[0]) - 1)+'px'
					}
					else if(jumpTarget <(Number(position[0]))){
					bird.style.marginTop = (Number(position[0]) - .5)+'px'
					}
					else if(jumpTarget === (Number(position[0]))){jumpStart = false
						bird.style.marginTop = (Number(position[0]))+'px'
					}
				}
				else if(!jumpStart){
					if(jumpOrigin >=(Number(position[0]))){
					bird.style.marginTop = (Number(position[0]) + .5)+'px'
					}
					else if(jumpOrigin >=(Number(position[0]))+10){
					bird.style.marginTop = (Number(position[0]) + 1)+'px'
					}
					else{
					velocity++;
					bird.style.marginTop = (Number(position[0]) + 2)+'px'
					}
				}	
			}, 0)
		}
})


})
