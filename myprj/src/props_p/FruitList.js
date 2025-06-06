import React from 'react';
import fr from './fruit.module.css'
import FruitOne from './FruitOne';

function FruitList(props) {

    const arr = [
        {title:'못난이 햇부사',  price:69900 },
        {title:'털보네사과',  price:54900 },
        {title:'참외',  price:1000 },
        {title:'거짓외',  price:2000 },
        {title:'딸기',  price: 3000},
        {title:'수박',  price: 4000},
        {title:'바나나',  price: 5000},
        {title:'안바나나',  price: 6000},
        {title:'블루베리',  price: 7000},
        {title:'라즈베리',  price: 8000},
        {title:'크렌베리',  price: 9000},
        {title:'베리베리',  price: 10000},
        {title:'오렌지',  price: 11000},
        {title:'요즘인지',  price: 12000},
        {title:'배',  price: 13000},
        {title:'자동차',  price: 14000},
        {title:'포도',  price: 15000},
        {title:'파이브도',  price: 16000},
        {title:'식스도',  price: 17000},
        {title:'한산도',  price: 18000},
        {title:'제주도',  price: 19000},
        {title:'파인애플',  price: 20000},
        {title:'솔인애플',  price: 21000},
        {title:'라인애플',  price: 22000}

    ]    
    // for (const ee of arr) {
    //     console.log(ee)    
    // }
    
    return (
        <div className={fr.wrapper}>
            {arr.map((vv, i)=><FruitOne fd={vv} no={i} key={i}/>)}
        </div>
    );
}

export default FruitList;

