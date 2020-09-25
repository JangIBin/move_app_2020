import React from 'react';
import img01 from './images/food1.jpg';
import img02 from './images/food2.jpg';
import img03 from './images/food3.jpg';
import img04 from './images/food4.jpg';
import img05 from './images/food5.jpg';

function Food({name, picture, alt0}) {
return (
  <div>
    <h2>I Love {name}</h2>
    <img src={picture} alt={alt0} />
  </div>
)
}

const foodLike = [
  {
    id: 1,
    name: '김치',
    image: img01,
    message0: '김치사진'
  },
  {
    id: 2,
    name: '만두',
    image: img02,
    message0: '만두사진'
  },
  {
    id: 3,
    name: '피자',
    image: img03,
    message0: '피자사진'
  },
  {
    id: 4,
    name: '버거',
    image: img04,
    message0: '버거사진'
  },
  {
    id: 5,
    name: '고기',
    image: img05,
    message0: '고기사진'
  },
];

function App() {
  return (
    <div>
      {foodLike.map(dish => (<Food key={dish.id} name={dish.name} picture={dish.image} alt0={dish.message0} />))}
    </div>
  )
}

export default App;
