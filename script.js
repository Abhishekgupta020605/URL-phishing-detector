function checkURL(){

let input=document.getElementById("urlInput").value.trim();
let result=document.getElementById("result");
let bar=document.getElementById("riskBar");

if(!input){
result.innerText="⚠️ Enter a URL";
bar.style.width="0%";
return;
}

/* protocol validation */

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

/* parse URL */

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

/* HTTP (not secure) */

if(parsed.protocol==="http:") risk+=40;

/* phishing tricks */

if(url.includes("@")) risk+=30;

/* IP address domain */

if(/(\d{1,3}\.){3}\d{1,3}/.test(host)) risk+=40;

/* too many subdomains */

let parts=host.split(".");
if(parts.length>3) risk+=10;

/* suspicious keywords */

let keywords=["login","verify","bank","update","account","secure","signin","password"];

keywords.forEach(word=>{
if(host.toLowerCase().includes(word)) risk+=30;
});

/* suspicious TLD */

let badTLD=[".ru",".tk",".xyz",".ml",".cf",".gq",".top"];

badTLD.forEach(tld=>{
if(host.endsWith(tld)) risk+=25;
});

/* very long url */

if(url.length>75) risk+=10;

/* normalize risk */

if(risk>100) risk=100;

let safe=100-risk;

/* RESULT */

if(risk>=70){

result.style.color="red";
result.innerText="🚨 High Risk Phishing ("+safe+"% safe)";

bar.style.width=risk+"%";
bar.style.background="red";

}

else if(risk>=40){

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
