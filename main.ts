
function funct(nam:string){
    console.log(nam);
}

let a = "hello world"

function world(x:string, callback:any){
    // let a = "hello sami"
    callback(a)
    
}

world("hello sami", funct) 





        //    (Acynchoronos)  one time multi tasks attempt


console.log("first");
function printSecond(){
    console.log("second");
}
console.log("second");
setTimeout(printSecond, 2000)
console.log("third");


       //   (setiomeout method in promises)


console.log("first");

setTimeout(()=> console.log("second"), 2000)

setTimeout(() => 
console.log("third"), 1000)


console.log("first");

setTimeout(()=> console.log("second"), 0)

console.log("third");

for (let i=0;  i<100000; i++) {
    let b = 0
}

console.log("third");



         //     (callback hell)

setTimeout(()=> {
    console.log("user profile");
    setTimeout(()=>{
        console.log('user post');
        setTimeout(()=>{
            console.log('user comments');
        },3000);
    },2000);
},1000);




         //    (promisess)

let myPromise = new Promise((resolve, reject) => {
    console.log("promise pending...");

    setTimeout(() => {
        console.log("status resolve...");
        resolve("promise resolved")
    }, 2000)
    
})
myPromise.then ((res)=> console.log(res)) .catch((err)=> console.log(err))





let myPromises = new Promise((resolve, reject)=>{
    console.log("promise pending...");

    setTimeout(() => {
        let data = "sarmad"
        if (data){
            console.log("");
        }
    }, 2000)
    
})
myPromise
let link = ""
let data = fetch(link)
.then ((res)=> res.json())    // (.json) for readable data
.then ((res)=> console.log(res)) 
.catch((err)=> console.log(err))

console.log("data", data);














