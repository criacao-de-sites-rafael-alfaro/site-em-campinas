//<![CDATA[
   imgr = new Array();

imgr[0] = "http://sites.google.com/site/fdblogsite/Home/nothumbnail.gif";

showRandomImg = true;

aBold = true;

summaryPost = 170; 
summaryTitle = 25; 


numposts1 = 8; 
numposts2 = 8;

var classicMode = false ;
var summary = 50;
var indent = 3;

function removeHtmlTag(strx,chop){
	var s = strx.split("<");
	for(var i=0;i<s.length;i++){
		if(s[i].indexOf(">")!=-1){
			s[i] = s[i].substring(s[i].indexOf(">")+1,s[i].length);
		}
	}
	s =  s.join("");
	s = s.substring(0,chop-1);
	return s;
}


function showrecentposts1(json) {
	j = (showRandomImg) ? Math.floor((imgr.length+1)*Math.random()) : 0;
	img  = new Array();
    if (numposts1 <= json.feed.entry.length) {
		maxpost = numposts1;
		}
	else
       {
	   maxpost=json.feed.entry.length;
	   }	
	
  	for (var i = 0; i < maxpost; i++) {
    	var entry = json.feed.entry[i];
    	var posttitle = entry.title.$t;
		var pcm;
    	var posturl;
	
		var cate ='';
		for (var e=0; e < json.feed.entry[i].category.length;e++) {
			cate = cate + '<a href="/search/label/'+json.feed.entry[i].category[e].term+'?max-results=6">'+json.feed.entry[i].category[e].term+'</a>, ';		
		}
    	if (i == json.feed.entry.length) break;
    	for (var k = 0; k < entry.link.length; k++) {
      		if (entry.link[k].rel == 'alternate') {
        		posturl = entry.link[k].href;
        		break;
      		}
    	}
		
		
		
		for (var k = 0; k < entry.link.length; k++) {
      		if (entry.link[k].rel == 'replies' && entry.link[k].type == 'text/html') {
        		pcm = entry.link[k].title.split(" ")[0];
        		break;
      		}
    	}
		
    	if ("content" in entry) {
      		var postcontent = entry.content.$t;}
    	else
    	if ("summary" in entry) {
      		var postcontent = entry.summary.$t;}
    	else var postcontent = "";
    	
    	postdate = entry.published.$t;
	
	if(j>imgr.length-1) j=0;
	img[i] = imgr[j];
	
	s = postcontent	; a = s.indexOf("<img"); b = s.indexOf("src=\"",a); c = s.indexOf("\"",b+5); d = s.substr(b+5,c-b-5);

	if((a!=-1)&&(b!=-1)&&(c!=-1)&&(d!="")) img[i] = d;

	//cmtext = (text != 'no') ? '<i><font color="'+acolor+'">('+pcm+' '+text+')</font></i>' : '';


	var month = [1,2,3,4,5,6,7,8,9,10,11,12];
	var month2 = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

	var day = postdate.split("-")[2].substring(0,2);
	var m = postdate.split("-")[1];
	var y = postdate.split("-")[0];

	for(var u2=0;u2<month.length;u2++){
		if(parseInt(m)==month[u2]) {
			m = month2[u2] ; break;
		}
	}

	var daystr = day+ ' ' + m + ' ' + y ;
   
	var trtd = '<div class="owl-item"><div class="item"><figure><a href="'+posturl+'"><div class="text-overlay"><div class="info">Mais Informações</div></div><img width="440" height="320" src="'+img[i]+'"/></a></figure><div class="image-caption text-center"><h4 class="post-title upper entry-title"><a href="'+posturl+'">'+posttitle+'</a></h4><div class="meta"> <span class="categories">'+cate+'</span></div><p>'+removeHtmlTag(postcontent,summaryPost)+'...</p></div></div></div>';
	document.write(trtd);

	j++;
}
}

function showrecentposts2(json) {
	j = (showRandomImg) ? Math.floor((imgr.length+1)*Math.random()) : 0;
	img  = new Array();
    if (numposts1 <= json.feed.entry.length) {
		maxpost = numposts1;
		}
	else
       {
	   maxpost=json.feed.entry.length;
	   }	
	
  	for (var i = 0; i < maxpost; i++) {
    	var entry = json.feed.entry[i];
    	var posttitle = entry.title.$t;
		var pcm;
    	var posturl;
	
		var cate ='';
		for (var e=0; e < json.feed.entry[i].category.length;e++) {
			cate = cate + '<a href="/search/label/'+json.feed.entry[i].category[e].term+'?max-results=6">'+json.feed.entry[i].category[e].term+'</a>, ';		
		}
    	if (i == json.feed.entry.length) break;
    	for (var k = 0; k < entry.link.length; k++) {
      		if (entry.link[k].rel == 'alternate') {
        		posturl = entry.link[k].href;
        		break;
      		}
    	}
		
		
		
		for (var k = 0; k < entry.link.length; k++) {
      		if (entry.link[k].rel == 'replies' && entry.link[k].type == 'text/html') {
        		pcm = entry.link[k].title.split(" ")[0];
        		break;
      		}
    	}
		
    	if ("content" in entry) {
      		var postcontent = entry.content.$t;}
    	else
    	if ("summary" in entry) {
      		var postcontent = entry.summary.$t;}
    	else var postcontent = "";
    	
    	postdate = entry.published.$t;
	
	if(j>imgr.length-1) j=0;
	img[i] = imgr[j];
	
	s = postcontent	; a = s.indexOf("<img"); b = s.indexOf("src=\"",a); c = s.indexOf("\"",b+5); d = s.substr(b+5,c-b-5);

	if((a!=-1)&&(b!=-1)&&(c!=-1)&&(d!="")) img[i] = d;

	//cmtext = (text != 'no') ? '<i><font color="'+acolor+'">('+pcm+' '+text+')</font></i>' : '';


	var month = [1,2,3,4,5,6,7,8,9,10,11,12];
	var month2 = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

	var day = postdate.split("-")[2].substring(0,2);
	var m = postdate.split("-")[1];
	var y = postdate.split("-")[0];

	for(var u2=0;u2<month.length;u2++){
		if(parseInt(m)==month[u2]) {
			m = month2[u2] ; break;
		}
	}

	var daystr = day+ ' ' + m + ' ' + y ;
   
	var trtd = '<div class="owl-item"><div class="item"><figure><a href="'+posturl+'"><div class="text-overlay"><div class="info">Veja Mais</div></div><img width="440" height="290" src="'+img[i]+'"/></a></figure><div class="image-caption"><div class="date-wrapper"><div class="day">'+day+'</div><div class="month">'+m+'</div></div><h4 class="post-title entry-title"><a href="'+posturl+'">'+posttitle+'</a></h4><div class="meta"><span class="categories">'+cate+'</span> 	<span class="comentários"><a href="'+posturl+'">'+pcm+' comentários</a></span></div><p>'+removeHtmlTag(postcontent,summaryPost)+'...</p></div></div></div>';
	document.write(trtd);

	j++;
}
}

function showrecentposts3(json) {
	j = (showRandomImg) ? Math.floor((imgr.length+1)*Math.random()) : 0;
	img  = new Array();
    if (numposts1 <= json.feed.entry.length) {
		maxpost = numposts1;
		}
	else
       {
	   maxpost=json.feed.entry.length;
	   }	
	
  	for (var i = 0; i < maxpost; i++) {
    	var entry = json.feed.entry[i];
    	var posttitle = entry.title.$t;
		var pcm;
    	var posturl;
	
		var cate ='';
		for (var e=0; e < json.feed.entry[i].category.length;e++) {
			cate = cate + '<a href="/search/label/'+json.feed.entry[i].category[e].term+'">'+json.feed.entry[i].category[e].term+'</a>, ';		
		}
    	if (i == json.feed.entry.length) break;
    	for (var k = 0; k < entry.link.length; k++) {
      		if (entry.link[k].rel == 'alternate') {
        		posturl = entry.link[k].href;
        		break;
      		}
    	}
		
		
		
		for (var k = 0; k < entry.link.length; k++) {
      		if (entry.link[k].rel == 'replies' && entry.link[k].type == 'text/html') {
        		pcm = entry.link[k].title.split(" ")[0];
        		break;
      		}
    	}
		
    	if ("content" in entry) {
      		var postcontent = entry.content.$t;}
    	else
    	if ("summary" in entry) {
      		var postcontent = entry.summary.$t;}
    	else var postcontent = "";
    	
    	postdate = entry.published.$t;
	
	if(j>imgr.length-1) j=0;
	img[i] = imgr[j];
	
	s = postcontent	; a = s.indexOf("<img"); b = s.indexOf("src=\"",a); c = s.indexOf("\"",b+5); d = s.substr(b+5,c-b-5);

	if((a!=-1)&&(b!=-1)&&(c!=-1)&&(d!="")) img[i] = d;

	//cmtext = (text != 'no') ? '<i><font color="'+acolor+'">('+pcm+' '+text+')</font></i>' : '';


	var month = [1,2,3,4,5,6,7,8,9,10,11,12];
	var month2 = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

	var day = postdate.split("-")[2].substring(0,2);
	var m = postdate.split("-")[1];
	var y = postdate.split("-")[0];

	for(var u2=0;u2<month.length;u2++){
		if(parseInt(m)==month[u2]) {
			m = month2[u2] ; break;
		}
	}

	var daystr = day+ ' ' + m + ' ' + y ;
   
	var trtd = '<li><div class="icon-overlay"><a href="'+posturl+'"><span class="icn-more"></span><img width="70" height="70" src="'+img[i]+'"/></div><div class="meta"><h6><a href="'+posturl+'">'+posttitle+'</a></h6></div></li>';
	document.write(trtd);

	j++;
}
}


//]]>
