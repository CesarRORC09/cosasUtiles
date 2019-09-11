var rand = function() {
    return Math.random().toString(36).substr(2,10);
};

var token = function() {
    return rand() + rand() + rand() + rand(); 
};

console.log(token(),token().length);
