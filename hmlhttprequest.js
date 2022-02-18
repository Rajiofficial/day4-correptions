var request=new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/currency/inr")
request.send()
request.onload=function(){
    if(request.status==200) console.log(request.responseText);
    else console.error("request  not success");
};
request.onerror=function() {

};