function firstWord(s) {
  // your code here
	// s=s.trim();
	// if(s.length==0 || !s.include(" ")){
	// 	return s;
	// }
	let ans=s.split(" ");
	return ans[0];
	
	
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
