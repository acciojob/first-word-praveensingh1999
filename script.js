function firstWord(s) {
  // your code here
	let ans=s.split(" ");
	return ans[0];
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
