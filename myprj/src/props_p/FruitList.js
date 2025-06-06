import React from 'react';
import fr from './fruit.module.css'

function FruitList(props) {

    const arr = [
        {title:'기스과 못난이 햇부사', img:'', price:69900 },
        {title:'털보네사과', img:'', price:54900 },
        {title:'참외', img:'', price:1000 },
        {title:'거짓외', img:'', price:2000 },
        {title:'딸기', img:'', price: 3000},
        {title:'수박', img:'', price: 4000},
        {title:'바나나', img:'', price: 5000},
        {title:'안바나나', img:'', price: 6000},
        {title:'블루베리', img:'', price: 7000},
        {title:'라즈베리', img:'', price: 8000},
        {title:'크렌베리', img:'', price: 9000},
        {title:'베리베리', img:'', price: 10000},
        {title:'오렌지', img:'', price: 11000},
        {title:'요즘인지', img:'', price: 12000},
        {title:'배', img:'', price: 13000},
        {title:'자동차', img:'', price: 14000},
        {title:'포도', img:'', price: 15000},
        {title:'파이브도', img:'', price: 16000},
        {title:'식스도', img:'', price: 17000},
        {title:'한산도', img:'', price: 18000},
        {title:'제주도', img:'', price: 19000},
        {title:'파인애플', img:'', price: 20000},
        {title:'솔인애플', img:'', price: 21000},
        {title:'라인애플', img:'', price: 22000}

    ]    

    console.log(arr.length)
    return (
        <div className={fr.wrapper}>
            
        </div>
    );
}

export default FruitList;

