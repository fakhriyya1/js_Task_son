// Task 9
// let arr = [1, 2, 3, 4, 5];
// let cem = 0;
// let hasil = 1;

// for (let i = 0; i < arr.length; i++){
//     cem += arr[i];
//     hasil *= arr[i];
// }

// console.log(cem);
// console.log(hasil);

//Task 10
// let arr = [1, 1, 2, 4, 6, 7, 8, 7];

// for (let i = 0; i < arr.length; i++){
//     for (let j = i + 1; j < arr.length; j++){
//         if (arr[i] == arr[j]) {
//             arr.splice(j, 1);
//             i = -1;
//         }
//     }
// }
// console.log(arr);

//Task 11
// let arr = ['d', 's', 1, ' ', 2, 3, ','];
// for (let i = 0; i < arr.length; i++){
//     if (isNaN(arr[i])) {
//         arr.splice(i,1);
//     }
// }
// console.log(arr);

//14 Daxil edilmis ededi sozle yazin
//   let teklik = ["sifir",  "bir", "iki", "uc", "dord" , "bes" , "alti" , "yeddi", "sekkiz", "doqquz" ]
//   let onluq = ["on", "iyirmi", "otuz", "qirx", "elli", "altmis", "yetmis", "seksen", "doxsan" , 'yuz']

// let eded =+prompt()
// let on = "";
// let tek = ""
// for (let i = 0; i<=10 ; i++){

//     if (Math.floor(eded/10)==i){
//         on=onluq[i-1];
//     }
// }
// for (let i = 0; i<=10 ; i++){

// if (eded%10==0 && eded>=10){
//     tek=""
// }
// else if(Math.floor(eded%10)==i){
//     tek= teklik[i]
// }
// }
// console.log(on+" " + tek);

//Task 17
// let say;
// let str = '  salam  necesen   ay Fexriyye, ';
// let new_str = str.replace(/\s+/g, ' ').trim();
// if (new_str.length == 0) {
//     say = 0;
// }
// else {
//     say = 1;
// }
// for (let i = 0; i < new_str.length; i++){
//     if (new_str[i] == ' ') {
//         say++;
//     }
// }
// console.log(say);

//Task 18
// let str = prompt('Cumle daxil edin:');
// let new_str = str.replace(/\s+/g, ' ').trim();
// console.log(new_str);

// let str1 = prompt('Cumle daxil edin:');
// let new_str1 = str1.split(" ").join(" ");
// console.log(new_str1);

//Task 19
// let str = 'dkdc adjcn scd'.trim();
// let new_str = ' '
// new_str+=str[0].toUpperCase();
// for (let i = 1; i < str.length; i++){
//         new_str+=str[i]
// }
// console.log(new_str);

//Task 20
// let arr1 = [1, 2, 3, 5, ' '];
// let arr2 = [1, 2, 3, 5, 6];
// let say = 0;
// if (arr1.length == arr2.length) {
//     for (let i = 0; i < arr1.length; i++){
//         if (arr1[i] == arr2[i]) {
//             say++;
//         }
//     }
//     if (say == arr1.length) {
//         console.log(`${arr1} ve ${arr2} eynidir.`);
//     }
//     else {
//         console.log(`${arr1} ve ${arr2} eyni deyil.`);
//     }
// }
// else {
//         console.log(`${arr1} ve ${arr2} eyni deyil.`);
//     }

//Task 21
// let arr = [3, 2, 1, 7, 5, 4]
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > arr[i + 1]) {
//             let temp = arr[i];
//             arr[i] = arr[i + 1]
//             arr[i + 1] = temp;
//             i = -1;
//         }
//     }
// console.log(arr);

//Task 26
// let text = "salam necesen necesen as as";

//     const findDuplicateWords = str => {
//         const strArr = str.split(" ");
//         const res = [];
//         for(let i = 0; i < strArr.length; i++){
//            if(strArr.indexOf(strArr[i]) !== strArr.lastIndexOf(strArr[i])){
//               if(!res.includes(strArr[i])){
//                  res.push(strArr[i]);
//               };
//            };
//         };
//         return res.join(" ");
// };
//      console.log(findDuplicateWords(text));

//Task 28
// let emplyees = [
//   {
//     name: "Isci1",
//     saatliq: 100,
//     is_saati: 25,
//   },
//   {
//     name: "Isci2",
//     saatliq: 120,
//     is_saati: 30,
//   },
//   {
//     name: "Isci3",
//     saatliq: 50,
//     is_saati: 15,
//   },
//   {
//     name: "Isci4",
//     saatliq: 10,
//     is_saati: 45,
//   },
//   {
//     name: "Isci5",
//     saatliq: 19,
//     is_saati: 60,
//   },
//   {
//     name: "Isci6",
//     saatliq: 180,
//     is_saati: 100,
//   },
// ];

// emplyees.forEach((employee) => {
//   if (employee.is_saati > 40) {
//     employee.is_saati *= 2;
//   }
//   employee.ayliq_emek_haqqi = employee.saatliq * employee.is_saati;
//   document.writeln(employee.name + "---" + employee.ayliq_emek_haqqi);
// });

//Task 29
// let str = 'ADNA jdfcn ADNA ndcjnd ajcsl adna ajdjd Adna';
// let new_str = str.split(' ');
// for (let i = 0; i < new_str.length; i++){
//     if (new_str[i] == 'ADNA') {
//         new_str.splice(i, 1, 'ADNSU');
//     }
// }
// console.log(new_str);


//Task 30
// let num = 903;
// let cem = num % 10 + Math.round(num % 100 / 10) + Math.round(num / 100);
// console.log(cem);
