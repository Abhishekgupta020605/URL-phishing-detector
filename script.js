function checkURL(){

let input=document.getElementById("urlInput").value.trim();
let result=document.getElementById("result");
let bar=document.getElementById("riskBar");

if(!input){
result.innerText="⚠️ Enter a URL";
bar.style.width="0%";
return;
}

/* strict protocol check */

if(/^https?:\/(?!\/)/.test(input) || input.includes("http//") || input.includes("https//")){
result.style.color="red";
result.innerText="❌ Invalid URL Format";
bar.style.width="0%";
return;
}

/* add https if missing */

let url=input;

if(!url.startsWith("http://") && !url.startsWith("https://")){
url="https://"+url;
}

/* parse url */

let parsed;

try{
parsed=new URL(url);
}
catch{
result.style.color="red";
result.innerText="❌ Invalid URL";
bar.style.width="0%";
return;
}

let host=parsed.hostname;

/* domain validation */

if(!/^[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(host)){
result.style.color="red";
result.innerText="❌ Invalid Domain";
bar.style.width="0%";
return;
}

let risk=0;

/* rules */

if(parsed.protocol==="http:") risk+=15;

if(url.includes("@")) risk+=30;

if(/(\d{1,3}\.){3}\d{1,3}/.test(host)) risk+=30;

let parts=host.split(".");
if(parts.length>3) risk+=10;

let keywords=["login","verify","bank","update","account","secure","signin","password"];

keywords.forEach(word=>{
if(url.toLowerCase().includes(word)) risk+=10;
});

let badTLD=[".ru",".tk",".xyz",".ml",".cf",".gq",".top"];

badTLD.forEach(tld=>{
if(host.endsWith(tld)) risk+=25;
});

if(url.length>75) risk+=10;

if(risk>100) risk=100;

let safe=100-risk;

/* result */

if(risk>=50){

result.style.color="red";
result.innerText="🚨 High Risk Phishing ("+safe+"% safe)";

bar.style.width=risk+"%";
bar.style.background="red";

}
else if(risk>=25){

result.style.color="orange";
result.innerText="⚠️ Suspicious URL ("+safe+"% safe)";

bar.style.width=risk+"%";
bar.style.background="orange";

}
else{

result.style.color="green";
result.innerText="✅ Safe URL ("+safe+"% safe)";

bar.style.width=safe+"%";
bar.style.background="green";

}

}