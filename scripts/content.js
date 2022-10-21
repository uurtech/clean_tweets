//cellInnerDiv our selector
setTimeout(function(){
	console.clear()
	let elements = document.querySelectorAll('[data-testid="cellInnerDiv"]');
	// console.log(elements)

	const trends = document.querySelectorAll('[aria-label="Trending"]')
	// 2 -13
	let i = 2 
	for(i;i<13;i++){
		try{
			let trend = trends[0].children[0].children[1].children[0].children[0].children[1].children[0].children[i].children[0].childNodes[0].innerText
			let split = trend.split("\\")
			console.log(split)
		}catch(e){
			console.log(e)
		}
		
	}
}, 2000);


chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
	if (request.message === 'TabUpdated') {
	  console.log(document.location.href);
	}
  })