function num2Letters(number){
	
	if (isNaN(number) || number < 0 || 999 < number) {
		return 'Veuillez entrer un nombre entier compris entre 0 et 999.';
	}
	
	var units2Letters = ['', 'un', 'deux', 'trois', 'quatre', 'cinq', 'six', 'sept', 'huit', 'neuf', 'dix', 'onze', 'douze', 'treize', 'quatorze', 'quinze', 'seize', 'dix-sept', 
						'dix-huit', 'dix-neuf'], 
						tens2Letters = ['', 'dix', 'vingt', 'trente', 'quarante', 'cinquante', 'soixante', 'soixante', 'quatre-vingt', 'quatre-vingt'];