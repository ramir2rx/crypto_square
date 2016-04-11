var Crypto = function(text) {
	this.text = text.replace(/\s/g, '').toLowerCase();
};

Crypto.prototype.size = function() {
	var s = Math.floor(Math.sqrt(this.text.length));
	if(this.text.length > s*s) {
		s++;
	}	
	return s;
};

Crypto.prototype.normalizePlaintext = function() {	
	return this.text.replace(/[^0-9a-z]/g, "");
};

Crypto.prototype.plaintextSegments = function() {	
	var segments = new Array();
	var pt = this.normalizePlaintext();
	var s = this.size();
	for(var i = 0; i < s; i++) {
		if(pt.length > 0) {
			segments[i] = pt.slice(0,s);
			pt = pt.slice(s);
		}
	}
	return segments;
};

Crypto.prototype.ciphertext = function() {
	var temp = "";
	var s = this.size();
	var segments = this.plaintextSegments();
	for(var row = 0; row < s; row++){
		for(var col = 0; col < s; col++) {
			temp += segments[col].charAt(row);
		}
	}
	return temp;
};

module.exports = Crypto;