import{z as C}from"./index-b8d43820.js";var v={exports:{}};(function(f,s){(function(c){f.exports=c()})(function(c){var b=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];function h(o,i){var r=o[0],t=o[1],n=o[2],e=o[3];r+=(t&n|~t&e)+i[0]-680876936|0,r=(r<<7|r>>>25)+t|0,e+=(r&t|~r&n)+i[1]-389564586|0,e=(e<<12|e>>>20)+r|0,n+=(e&r|~e&t)+i[2]+606105819|0,n=(n<<17|n>>>15)+e|0,t+=(n&e|~n&r)+i[3]-1044525330|0,t=(t<<22|t>>>10)+n|0,r+=(t&n|~t&e)+i[4]-176418897|0,r=(r<<7|r>>>25)+t|0,e+=(r&t|~r&n)+i[5]+1200080426|0,e=(e<<12|e>>>20)+r|0,n+=(e&r|~e&t)+i[6]-1473231341|0,n=(n<<17|n>>>15)+e|0,t+=(n&e|~n&r)+i[7]-45705983|0,t=(t<<22|t>>>10)+n|0,r+=(t&n|~t&e)+i[8]+1770035416|0,r=(r<<7|r>>>25)+t|0,e+=(r&t|~r&n)+i[9]-1958414417|0,e=(e<<12|e>>>20)+r|0,n+=(e&r|~e&t)+i[10]-42063|0,n=(n<<17|n>>>15)+e|0,t+=(n&e|~n&r)+i[11]-1990404162|0,t=(t<<22|t>>>10)+n|0,r+=(t&n|~t&e)+i[12]+1804603682|0,r=(r<<7|r>>>25)+t|0,e+=(r&t|~r&n)+i[13]-40341101|0,e=(e<<12|e>>>20)+r|0,n+=(e&r|~e&t)+i[14]-1502002290|0,n=(n<<17|n>>>15)+e|0,t+=(n&e|~n&r)+i[15]+1236535329|0,t=(t<<22|t>>>10)+n|0,r+=(t&e|n&~e)+i[1]-165796510|0,r=(r<<5|r>>>27)+t|0,e+=(r&n|t&~n)+i[6]-1069501632|0,e=(e<<9|e>>>23)+r|0,n+=(e&t|r&~t)+i[11]+643717713|0,n=(n<<14|n>>>18)+e|0,t+=(n&r|e&~r)+i[0]-373897302|0,t=(t<<20|t>>>12)+n|0,r+=(t&e|n&~e)+i[5]-701558691|0,r=(r<<5|r>>>27)+t|0,e+=(r&n|t&~n)+i[10]+38016083|0,e=(e<<9|e>>>23)+r|0,n+=(e&t|r&~t)+i[15]-660478335|0,n=(n<<14|n>>>18)+e|0,t+=(n&r|e&~r)+i[4]-405537848|0,t=(t<<20|t>>>12)+n|0,r+=(t&e|n&~e)+i[9]+568446438|0,r=(r<<5|r>>>27)+t|0,e+=(r&n|t&~n)+i[14]-1019803690|0,e=(e<<9|e>>>23)+r|0,n+=(e&t|r&~t)+i[3]-187363961|0,n=(n<<14|n>>>18)+e|0,t+=(n&r|e&~r)+i[8]+1163531501|0,t=(t<<20|t>>>12)+n|0,r+=(t&e|n&~e)+i[13]-1444681467|0,r=(r<<5|r>>>27)+t|0,e+=(r&n|t&~n)+i[2]-51403784|0,e=(e<<9|e>>>23)+r|0,n+=(e&t|r&~t)+i[7]+1735328473|0,n=(n<<14|n>>>18)+e|0,t+=(n&r|e&~r)+i[12]-1926607734|0,t=(t<<20|t>>>12)+n|0,r+=(t^n^e)+i[5]-378558|0,r=(r<<4|r>>>28)+t|0,e+=(r^t^n)+i[8]-2022574463|0,e=(e<<11|e>>>21)+r|0,n+=(e^r^t)+i[11]+1839030562|0,n=(n<<16|n>>>16)+e|0,t+=(n^e^r)+i[14]-35309556|0,t=(t<<23|t>>>9)+n|0,r+=(t^n^e)+i[1]-1530992060|0,r=(r<<4|r>>>28)+t|0,e+=(r^t^n)+i[4]+1272893353|0,e=(e<<11|e>>>21)+r|0,n+=(e^r^t)+i[7]-155497632|0,n=(n<<16|n>>>16)+e|0,t+=(n^e^r)+i[10]-1094730640|0,t=(t<<23|t>>>9)+n|0,r+=(t^n^e)+i[13]+681279174|0,r=(r<<4|r>>>28)+t|0,e+=(r^t^n)+i[0]-358537222|0,e=(e<<11|e>>>21)+r|0,n+=(e^r^t)+i[3]-722521979|0,n=(n<<16|n>>>16)+e|0,t+=(n^e^r)+i[6]+76029189|0,t=(t<<23|t>>>9)+n|0,r+=(t^n^e)+i[9]-640364487|0,r=(r<<4|r>>>28)+t|0,e+=(r^t^n)+i[12]-421815835|0,e=(e<<11|e>>>21)+r|0,n+=(e^r^t)+i[15]+530742520|0,n=(n<<16|n>>>16)+e|0,t+=(n^e^r)+i[2]-995338651|0,t=(t<<23|t>>>9)+n|0,r+=(n^(t|~e))+i[0]-198630844|0,r=(r<<6|r>>>26)+t|0,e+=(t^(r|~n))+i[7]+1126891415|0,e=(e<<10|e>>>22)+r|0,n+=(r^(e|~t))+i[14]-1416354905|0,n=(n<<15|n>>>17)+e|0,t+=(e^(n|~r))+i[5]-57434055|0,t=(t<<21|t>>>11)+n|0,r+=(n^(t|~e))+i[12]+1700485571|0,r=(r<<6|r>>>26)+t|0,e+=(t^(r|~n))+i[3]-1894986606|0,e=(e<<10|e>>>22)+r|0,n+=(r^(e|~t))+i[10]-1051523|0,n=(n<<15|n>>>17)+e|0,t+=(e^(n|~r))+i[1]-2054922799|0,t=(t<<21|t>>>11)+n|0,r+=(n^(t|~e))+i[8]+1873313359|0,r=(r<<6|r>>>26)+t|0,e+=(t^(r|~n))+i[15]-30611744|0,e=(e<<10|e>>>22)+r|0,n+=(r^(e|~t))+i[6]-1560198380|0,n=(n<<15|n>>>17)+e|0,t+=(e^(n|~r))+i[13]+1309151649|0,t=(t<<21|t>>>11)+n|0,r+=(n^(t|~e))+i[4]-145523070|0,r=(r<<6|r>>>26)+t|0,e+=(t^(r|~n))+i[11]-1120210379|0,e=(e<<10|e>>>22)+r|0,n+=(r^(e|~t))+i[2]+718787259|0,n=(n<<15|n>>>17)+e|0,t+=(e^(n|~r))+i[9]-343485551|0,t=(t<<21|t>>>11)+n|0,o[0]=r+o[0]|0,o[1]=t+o[1]|0,o[2]=n+o[2]|0,o[3]=e+o[3]|0}function B(o){var i=[],r;for(r=0;r<64;r+=4)i[r>>2]=o.charCodeAt(r)+(o.charCodeAt(r+1)<<8)+(o.charCodeAt(r+2)<<16)+(o.charCodeAt(r+3)<<24);return i}function _(o){var i=[],r;for(r=0;r<64;r+=4)i[r>>2]=o[r]+(o[r+1]<<8)+(o[r+2]<<16)+(o[r+3]<<24);return i}function A(o){var i=o.length,r=[1732584193,-271733879,-1732584194,271733878],t,n,e,u,l,g;for(t=64;t<=i;t+=64)h(r,B(o.substring(t-64,t)));for(o=o.substring(t-64),n=o.length,e=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],t=0;t<n;t+=1)e[t>>2]|=o.charCodeAt(t)<<(t%4<<3);if(e[t>>2]|=128<<(t%4<<3),t>55)for(h(r,e),t=0;t<16;t+=1)e[t]=0;return u=i*8,u=u.toString(16).match(/(.*?)(.{0,8})$/),l=parseInt(u[2],16),g=parseInt(u[1],16)||0,e[14]=l,e[15]=g,h(r,e),r}function y(o){var i=o.length,r=[1732584193,-271733879,-1732584194,271733878],t,n,e,u,l,g;for(t=64;t<=i;t+=64)h(r,_(o.subarray(t-64,t)));for(o=t-64<i?o.subarray(t-64):new Uint8Array(0),n=o.length,e=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],t=0;t<n;t+=1)e[t>>2]|=o[t]<<(t%4<<3);if(e[t>>2]|=128<<(t%4<<3),t>55)for(h(r,e),t=0;t<16;t+=1)e[t]=0;return u=i*8,u=u.toString(16).match(/(.*?)(.{0,8})$/),l=parseInt(u[2],16),g=parseInt(u[1],16)||0,e[14]=l,e[15]=g,h(r,e),r}function S(o){var i="",r;for(r=0;r<4;r+=1)i+=b[o>>r*8+4&15]+b[o>>r*8&15];return i}function d(o){var i;for(i=0;i<o.length;i+=1)o[i]=S(o[i]);return o.join("")}d(A("hello")),typeof ArrayBuffer<"u"&&!ArrayBuffer.prototype.slice&&function(){function o(i,r){return i=i|0||0,i<0?Math.max(i+r,0):Math.min(i,r)}ArrayBuffer.prototype.slice=function(i,r){var t=this.byteLength,n=o(i,t),e=t,u,l,g,w;return r!==c&&(e=o(r,t)),n>e?new ArrayBuffer(0):(u=e-n,l=new ArrayBuffer(u),g=new Uint8Array(l),w=new Uint8Array(this,n,u),g.set(w),l)}}();function p(o){return/[\u0080-\uFFFF]/.test(o)&&(o=unescape(encodeURIComponent(o))),o}function F(o,i){var r=o.length,t=new ArrayBuffer(r),n=new Uint8Array(t),e;for(e=0;e<r;e+=1)n[e]=o.charCodeAt(e);return i?n:t}function M(o){return String.fromCharCode.apply(null,new Uint8Array(o))}function U(o,i,r){var t=new Uint8Array(o.byteLength+i.byteLength);return t.set(new Uint8Array(o)),t.set(new Uint8Array(i),o.byteLength),r?t:t.buffer}function m(o){var i=[],r=o.length,t;for(t=0;t<r-1;t+=2)i.push(parseInt(o.substr(t,2),16));return String.fromCharCode.apply(String,i)}function a(){this.reset()}return a.prototype.append=function(o){return this.appendBinary(p(o)),this},a.prototype.appendBinary=function(o){this._buff+=o,this._length+=o.length;var i=this._buff.length,r;for(r=64;r<=i;r+=64)h(this._hash,B(this._buff.substring(r-64,r)));return this._buff=this._buff.substring(r-64),this},a.prototype.end=function(o){var i=this._buff,r=i.length,t,n=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],e;for(t=0;t<r;t+=1)n[t>>2]|=i.charCodeAt(t)<<(t%4<<3);return this._finish(n,r),e=d(this._hash),o&&(e=m(e)),this.reset(),e},a.prototype.reset=function(){return this._buff="",this._length=0,this._hash=[1732584193,-271733879,-1732584194,271733878],this},a.prototype.getState=function(){return{buff:this._buff,length:this._length,hash:this._hash.slice()}},a.prototype.setState=function(o){return this._buff=o.buff,this._length=o.length,this._hash=o.hash,this},a.prototype.destroy=function(){delete this._hash,delete this._buff,delete this._length},a.prototype._finish=function(o,i){var r=i,t,n,e;if(o[r>>2]|=128<<(r%4<<3),r>55)for(h(this._hash,o),r=0;r<16;r+=1)o[r]=0;t=this._length*8,t=t.toString(16).match(/(.*?)(.{0,8})$/),n=parseInt(t[2],16),e=parseInt(t[1],16)||0,o[14]=n,o[15]=e,h(this._hash,o)},a.hash=function(o,i){return a.hashBinary(p(o),i)},a.hashBinary=function(o,i){var r=A(o),t=d(r);return i?m(t):t},a.ArrayBuffer=function(){this.reset()},a.ArrayBuffer.prototype.append=function(o){var i=U(this._buff.buffer,o,!0),r=i.length,t;for(this._length+=o.byteLength,t=64;t<=r;t+=64)h(this._hash,_(i.subarray(t-64,t)));return this._buff=t-64<r?new Uint8Array(i.buffer.slice(t-64)):new Uint8Array(0),this},a.ArrayBuffer.prototype.end=function(o){var i=this._buff,r=i.length,t=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],n,e;for(n=0;n<r;n+=1)t[n>>2]|=i[n]<<(n%4<<3);return this._finish(t,r),e=d(this._hash),o&&(e=m(e)),this.reset(),e},a.ArrayBuffer.prototype.reset=function(){return this._buff=new Uint8Array(0),this._length=0,this._hash=[1732584193,-271733879,-1732584194,271733878],this},a.ArrayBuffer.prototype.getState=function(){var o=a.prototype.getState.call(this);return o.buff=M(o.buff),o},a.ArrayBuffer.prototype.setState=function(o){return o.buff=F(o.buff,!0),a.prototype.setState.call(this,o)},a.ArrayBuffer.prototype.destroy=a.prototype.destroy,a.ArrayBuffer.prototype._finish=a.prototype._finish,a.ArrayBuffer.hash=function(o,i){var r=y(new Uint8Array(o)),t=d(r);return i?m(t):t},a})})(v);var x=v.exports;const z=C(x);function D(f,s){return new Promise((c,b)=>{const B=Math.ceil(f.size/10485760),_=File.prototype.slice,A=new z.ArrayBuffer;let y=0;const S=new FileReader;S.onload=function(p){A.append(p.target.result),y++,y<B?(typeof s=="function"&&s(y/B),d()):c(A.end())},S.onerror=function(p){b(p)};function d(){const p=y*10485760,F=p+10485760>=f.size?f.size:p+10485760;S.readAsArrayBuffer(_.call(f,p,F))}d()})}const G=f=>{if(typeof f!="number"||isNaN(f))throw new Error("Input must be a valid number");return f>=1099511627776?(f/1099511627776).toFixed(2)+"TB":f>=1073741824?(f/1073741824).toFixed(2)+"GB":f>=1048576?(f/1048576).toFixed(2)+"MB":f>=1024?(f/1024).toFixed(2)+"KB":f+"Byte"},K=f=>{const s=f*8;return s>1e9?(s/1e9).toFixed(2)+"Gbps":s>1e6?(s/1e6).toFixed(1)+"Mbps":s>1e3?(s/1e3).toFixed(1)+"Kbps":s+"bps"},T=f=>f>=3600?(f/3600).toFixed(2)+"小时":f>=60?(f/60).toFixed(2)+"分钟":f+"秒",j=(f,s)=>{const c=s&&s>0?new Date(s*1e3):new Date,b=c.getFullYear().toString(),h=String(c.getMonth()+1).padStart(2,"0"),B=String(c.getDate()).padStart(2,"0"),_=String(c.getHours()).padStart(2,"0"),A=String(c.getMinutes()).padStart(2,"0"),y=String(c.getSeconds()).padStart(2,"0");return f.replace("Y",b).replace("m",h).replace("d",B).replace("H",_).replace("i",A).replace("s",y)};export{D as M,K as b,j as d,G as f,T as t};
