function textJustification(words, l) {
	var count = 0, fragments = [], i = 0, inicial = 0, pos = 1, z = 0;
	while(true){
		//console.log("inicial", inicial,pos);
		var capture = words.slice(inicial,inicial+pos);
		//console.log("capture", capture);
		var captureStr = capture.join(" ");
		var end = false;

		console.log("captureStr",captureStr);
		
		if(captureStr.length > l || inicial + 1 == words.length){

			if(inicial + 1 === words.length) end = true;

			var extra = l - capture.slice(0,capture.length-(end ? 0 : 1)).join("").length;

			if(!end) capture.pop();

			var k = 0, kPos = 0;
			console.log("capture on",capture,extra);

			while(k < extra){
				//console.log(kPos,capture[kPos],capture.length - 1 != kPos);
				//if(capture.length - 1 != kPos){
					capture[kPos] += " ";
					kPos = end ? 0 : capture.length - 2 == kPos ? 0: kPos+1;
				//}
				k++;
			}

			fragments.push(capture.join(""));
			inicial = inicial + pos - 1;
			pos = 1;
		}else{
			pos++;
		}

		//if(end) break;

		i++;
		z++;

		if(z == 30) break;
	}
	return fragments;
}


var words = ["This", "is", "an", "example", "of", "text", "justification."];
words = 
["Looks", 
 "like", 
 "it", 
 "can", 
 "be", 
 "a", 
 "tricky", 
 "test"];

textJustification(words, 25);
/*
["This    is    and",
"example  of text",
"justification.  "]
*/