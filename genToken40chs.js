var rand = function() {
    return Math.random().toString(36).substr(2,10);
};

var rand2 = function(){
    return Math.random();
}

var token = function() {
    return rand() + rand() + rand() +"."+ rand2()+rand2(); 
};
