document.onclick = myFunction;

function activeMenu(){
	var element = document.querySelector('ul.list-menu');
	element.classList.toggle('active');	
}

function myFunction(event){ 
	var element = event.target || event.srcElement;
	var listMenu = document.querySelector('ul.list-menu');	
	if (element.className === 'btn-menu') {		
		activeMenu();
	} else if (!element.classList.contains('links-menu') &&
		listMenu.classList.contains('active')) {
		listMenu.classList.remove('active');
	}
}
// function readUrl(){
// var url = document.getElementsByTagName('a')[0];
// var str = url.pathname;
// var nameFile = '';

// for (var i = str.lastIndexOf('/') + 1; i < str.length; i++) {
// 	nameFile += str[i];
// }
// console.log(
//     // url.href + '\n' +           // the full URL
//     // url.protocol + '\n' +       // http:
//     // url.hostname + '\n' +       // site.com
//     // url.port + '\n' +           // 81
//     //url.pathname       // /path/page
//     // url.search + '\n' +         // ?a=1&b=2
//     // url.hash                    // #hash

//     nameFile
// );
// }

// readUrl();