//<![CDATA[
var classicMode = false ;
var summary = 20;
var indent = 3;

function stripHtmlTags(s,max){return s.replace(/<.*?>/ig, '').split(/\s+/).slice(0,max-1).join(' ')}

function getSummaryLikeWP(id) {
        return document.getElementById(id).innerHTML.split(/<!--\s*more\s*-->/)[0];
}

function getSummaryImproved(post,max){
   var re = /<.*?>/gi
   var re2 = /<br.*?>/gi
   var re3 = /(<\/{1}p>)|(<\/{1}div>)/gi
   var re4 = /(<style.*?\/{1}style>)|(<script.*?\/{1}script>)|(<table.*?\/{1}table>)|(<form.*?\/{1}form>)|(<code.*?\/{1}code>)|(<pre.*?\/{1}pre>)/gi
   
   post = post.replace(re4,'')
   post = post.replace(re3,'<br /> ').split(re2)
   
   for(var i=0; i<post.length; i++){
    post[i] = post[i].replace(re,'');
   }
 var post2 = new Array();
 for(var i in post) {
  //if(post[i]!='' && post[i]!=' ' && post[i] != '\n') post2.push(post[i]);
  if(/[a-zA-Z0-9]/.test(post[i])) post2.push(post[i]) ;

 }
 
 
 var s = "";
 var indentBlank = "";
 for(var i=0;i<indent;i++){
  indentBlank += " ";
 }
 if(post2.join('<br/>').split(' ').length < max-1 ){
   s = post2.join(indentBlank +' <br/>');
 } else {
  var i = 0;
  while(s.split(' ').length < max){
   s += indentBlank + ' ' + post2[i]+'<br/>';
   i++;
  }
 }  
 return s;
}


function createSummaryAndThumb(pID,title,url,date,comment,tag){
 var posturl= url;
 var title=title;
 var date = date;
 var comment = comment;
 var tag = tag;
 var div = document.getElementById(pID);
 var content = div.innerHTML;
var month = new Array();
month[0] = "Jan";
month[1] = "Feb";
month[2] = "Mar";
month[3] = "Apr";
month[4] = "May";
month[5] = "Jun";
month[6] = "Jul";
month[7] = "Aug";
month[8] = "Sep";
month[9] = "Oct";
month[10] = "Nov";
month[11] = "Dec";
var n = month[date.split('/')[0]];
 var date1 = date.split('/')[1];

 var img = div.getElementsByTagName("img");

 if(img.length>=1) { 
 var imgurl=img[0].src;
   }
  var summary1 = '<figure><a href="'+posturl+'"><div class="text-overlay"><div class="info">Veja Mais</div></div><img width="440" height="290" src="'+imgurl+'"/></a></figure><div class="image-caption"><h4 class="post-title entry-title"><a href="'+posturl+'">'+title+'</a></h4><div class="meta"> <span class="categories">'+tag+'</span> <span class="commentários"><a href="'+posturl+'">'+comment+' comentários</a></span></div><p>'+stripHtmlTags(content,35)+'...</p><a class="more" href="'+posturl+'">Continue Reading →</a> </div>';
 
 div.innerHTML = summary1;
 div.style.display = "block";
 
}


function createThumb(pID,title,url){
 var posturl= url;
 var title=title; 
 var div = document.getElementById(pID); 
 var img = div.getElementsByTagName("img"); 
 if(img.length>=1) { 
 var imgurl=img[0].src; 
   }
  var summary1 = '<figure><a href="'+posturl+'"><div class="text-overlay"><div class="info">'+title+'</div></div><img width="440" height="290" alt="'+title+'" src="'+imgurl+'"/></a></figure>';
 
 div.innerHTML = summary1;
 div.style.display = "block";
 
}


//]]>
