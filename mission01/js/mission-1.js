// mission-1

function isObject(data){
    return Object.prototype.toString.call(data).slice(8,-1).toLowerCase() === 'object'
}

function getValueAtObject(obj, key) {

    // key가 문자인지
    if(typeof key !== 'string'){
        throw new TypeError('getValueAtObject 함수의 두 번째 인수는 문자 타입이어야 합니다.')
    }

    // obj가 객체인지
    if(typeof obj === 'object'){
        if(Object.prototype.hasOwnProperty.call(obj,key)){
            return obj[key];
            // getValueAtObject({name: 'tiger'},'name')
        }
        else{
            throw new Error(`getValueAtObject 함수의 해당 ${key}가 존재하지 않습니다.`)
        }
    }
    else{
        throw new Error('getValueAtObject 함수의 첫 번째 인수는 객체타입 이야 합니다.')
    }
  }


const person = {
name: 'Alice',
age: 25,
city: 'Wonderland'
};

console.log(getValueAtObject(person, 'name')); // 'Alice'
console.log(getValueAtObject(person, 'age'));  // 25
console.log(getValueAtObject(person, 'city')); // 'Wonderland'
console.log(getValueAtObject(person, 'country')); // Error !