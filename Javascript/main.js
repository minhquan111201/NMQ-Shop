/*
Toán tử chuỗi - String operator

var firstName = 'Nguyen'
var lastName = 'Quan'
console.log(firstName + ' ' + lastName);

var name = 'Quan'
console.log(name)
*/

/* Toán tử so sánh 

var a = 1 
var b = 3
if (a >= b) {
    console.log('Điều kiện đúng!')
}
else{
    console.log('Điều kiện sai!')
}
*/

/*Boolean
var a = 2
var b = 5
var isSuccess = a < b;
console.log(isSuccess)
*/

/*
** If - else
/** Ngoai 6 gia tri sau khi chuyen sang Boolean thi se la dung
 * 0
 * false
 * '' - ""
 * undefined
 * NaN
 * null
 
var fullName = 'Quan'
if (fullName){
    console.log('Dieu kien dung!')
}
else{
    console.log('Dieu kien sai!')
}
*/

/**
 * Toan tu logic
 * 1. && - and
 * 2. || - or
 * 3. !  - Not

var a = 1
var b = 1
var c = 3
if (!(a < 0)){
    console.log('Dieu kien dung!')
}
*/

/**
 Kieu du lieu trong Javascript

 1. Du lieu nguyen thuy - Primitive Data ( k the xoa gtri, chi co the gan lai de luu gtri moi)
    - Number 
    var a = 1
    var b = 2.5
    
    - String 
    var fullName = 'Minh Quan'

    - Boolean
    var isSuccess = true

    - Undefined (k gan gtri)
    var age; 

    - Null (k co gi)
    var isNull = null

    - Symbol (unique)
    var id = symbol('id')
    var id2 = symbol('id')

2. Du lieu phuc tap - Complex Data
    - Function
    var myFunction = function(){
        alert('hello')
    }
    myFunction()  //Phai co dong nay moi in ra dc 'hello'

    - Object (2 kieu la array va object)
    1. object (dung {} )
    var myObject = {
        name: 'Minh Quan'
        age: 21,
        adress: 'Ha Noi'
        myFunction: function () {
        } 
    }
    2. array (dung [] )
    var myArray = [
        'Javascript',
        'PHP',
        'Ruby'
    ]

    KIEM TRA
    console.log(typeof ...)
    vd: console.log(typeof fullName)
 */

 /* TOAN TU SO SANH - P2
 - === (so sanh ca kieu du lieu number != string)
 - !==

 var a = 1
 var b = '1'
 console.log(a == b) => true
 
 var a = 1
 var b = '1'
 console.log(a === b) => false
 */

/*
CHUOI TRONG JAVASCRIPT

1. Tao chuoi
var fullName = 'Minh Quan';
console.log(typeof fullName)

5. Template string ES6

var firstName = 'Nguyen'
var lastName = 'Quan'
console.log(`Toi la: ${firstName} ${lastName}`)
=> Toi la: Nguyen Quan

*/

// LAM VIEC VOI CHUOI

var myString = 'Hoc web lap trinh web'

//1. Length
//console.log(myString.length) => 17

//2. Find Index
//console.log(myString.indexOf('web')) => 4
//console.log(myString.indexOf('web', 6)) => 18
//console.log(myString.lastIndexOf('web')) => 18

//3.Cut string
//console.log(myString.slice(4,7)) => web

//4.Replace (ghi de)
//console.log(myString.replace('web', 'nua hoc mai'))
//=> thay 'web' bang 'nua hoc mai' => Hoc nua hoc mai lap trinh web 
//console.log(myString.replace(/web/g, 'nua hoc mai'))
//=> thay tat ca chu 'web'

//5. convert to upper case (chuyen tat ca thanh CHU IN HOA)
//console.log(myString.toUpperCase())

//6. convert to upper case (chuyen tat ca thanh CHU THUONG)
//console.log(myString.toLowerCase())

//7. Trim (loai bo khoang trang o 2 dau`)
//console.log(myString.trim().length)

//8. Split (cat theo diem chung)
//var languages = 'Javascript, PHP, Ruby'
//console.log(languages.split(', '))
//=>['Javascript', 'PHP', 'Ruby']

//9. Get a charater by index
//var myString2 = 'Minh Quan';
//console.log(myString2.charAt(5)) => Q

/* 
Mang trong Javascript - Array

1. Tao mang

var languages = [
    'Javascript',
    'PHP',
    'Ruby',
    'Dart',
    null,
    undefined,
    123
];
console.log(languages)


//Kiem tra xem co phai Array hay k
//console.log(Array.isArray(languages))


2. Truy xuat mang
- Do dai`
console.log(languages.length)
- Lay phan tu theo index
console.log(languages[2]) => Ruby
*/

/* 
Lam viec voi Array

1. To String (chuyen kieu du lieu sang chuoi~)

//console.log(languages.toString)

2. Join
3. 
*/

/* 
Ham (function) trong Javascrip
1. Hàm là gì?
    - Là 1 khối mã
    - Làm 1 việc cụ thể

2. Loại hàm
    - Built-in
    - Tự định nghĩa

3. Tính chất
    - Không thực thi khi định nghĩa
    - Sẽ thực thi khi được gọi
    - Có thể nhận tham số
    - Có thể trả về 1 giá trị

4. Tạo Hàm
*/

// function showDialog() 
