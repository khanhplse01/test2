
		function getintouch(id){
			var t=document.getElementById(id);
			
			t.style.transform = 'rotate(-90deg)';
			 
		}
function notice(){
	window.alert('This functionality is temporarily not supported.');
}

function openChatBox(id){
	var t=document.getElementById(id);
	t.style.display="block";
		
}

function closeChatBox(id){
	var t=document.getElementById(id);
	t.style.display="none";
	
}

function move(id,offset){
			var d=document.getElementById(id);
			d.style.transform="translateX("+ offset+")";
		}
function showMenu(id1, id2, id3){
	var a=document.getElementById(id1);
	a.style.display="block";
	var b=document.getElementById(id2);
	b.style.display="none";
	var c=document.getElementById(id3);
	c.style.display="none";
}

function appeartext(id){
	var t=document.getElementById(id);
	t.style.opacity="1";
}

//function change()
//{
//	if (window.pageYOffset<=730){
//		var a=document.getElementById("text1");
//		a.style.display="none";
//		var b=document.getElementById("text2");
//		b.style.display="none";
//		var c=document.getElementById("text3");
//		c.style.display="none";
//	}else if(window.pageYOffset<=1330){
//		var a=document.getElementById("text1");
//		a.style.display="none";
//		var b=document.getElementById("text2");
//		b.style.display="block";
//		var c=document.getElementById("text3");
//		c.style.display="none";
//	}else{
//		var a=document.getElementById("text1");
//		a.style.display="none";
//		var b=document.getElementById("text2");
//		b.style.display="block";
//		var c=document.getElementById("text3");
//		c.style.display="block";
//	}
//}
	