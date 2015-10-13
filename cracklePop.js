a=0;
while (++a <= 100) {
	console.log(a % 15 === 0 ?'CracklePop' : a % 3 === 0 ? 'Crackle' : a % 5 === 0 ? 'Pop' : a);
}