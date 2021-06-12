// Write a function that when given a URL as a string, 
// parses out just the domain name and returns it as a string. 

function domainName(url){
    url = url.replace('http://' , ''), 
    url = url.replace('https://', '')
    url = url.replace('www.', '')
    let x = url.indexOf('.')
    url = url.slice(0, x)
    return url
}

console.log(domainName("http://google.com"), "Answer: google");
console.log(domainName("http://google.co.jp"), "Answer: google");
console.log(domainName("www.xakep.ru"), "Answer: xakep");
console.log(domainName("https://youtube.com"), "Answer: youtube");
console.log(domainName("http://www.codewars.com/kata/"), "Answer: codewars");
console.log(domainName("icann.org"), "Answer: icann");
console.log(domainName("https://123.net"), "Answer: 123");
console.log(domainName("https://hyphen-site.org"), "Answer: hyphen-site");
console.log(domainName("http://codewars.com"), "Answer: codewars");

// function domainName(url){
    // url = url.replace('http://' , ''), 
    // url = url.replace('https://', '')
    // url = url.replace('www.', '')
    // let tld = ['.com', '.co', '.ru', '.io', '.net', '.gov', '.org', '.tv', ]
    // tld.forEach(end => {
//         let x = url.indexOf(end)
//         x > 1 ? url = url.slice(0, x) : null
//     })
//     return url
// }