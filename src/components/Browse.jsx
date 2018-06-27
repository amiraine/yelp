import React from 'react';
import FRestaurant from './FRestaurant';

const browseList = [
  {
    img: 'https://media-cdn.tripadvisor.com/media/photo-s/0b/ce/39/38/restaurante-oria.jpg',
    name: 'Horizon Grill'
  },
  {
    img: 'https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fbrianroberts%2Ffiles%2F2018%2F03%2Fpexels-photo-302899-1-1200x801.jpg',
    name: 'Caffe Stella'
  },
  {
    img: 'http://www.howewelive.com/wp-content/uploads/2014/06/chicken-pho-soup-and-toppings-690x540.jpg',
    name: 'Pho King Supreme'
  },
  {
    img: 'https://static.olocdn.net/menu/applebees/c667aa8060427981c4a8d79502fda788.jpg',
    name: 'Bar None'
  },
  {
    img: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2011/4/7/0/TM1C48_super-nachos_s4x3.jpg.rend.hgtvcom.616.462.suffix/1382539863868.jpeg',
    name: 'Burrito Express'
  },
  {
    img: 'https://cdn-image.foodandwine.com/sites/default/files/1509031600/arugua-and-squash-salad-XL-RECIPE1217.jpg',
    name: 'Greenery'
  },
  {
    img: 'https://www.thelocal.it/userdata/images/article/69523836b0191608c41d640feead8da2be5462038d3409e1e3900fad039c7fc8.jpg',
    name: 'Tasty Food'
  },
  {
    img: 'https://www.dawnfoods.com/images/default-source/site-images/dawn-yeast-raised-donut-mixes-bases.jpg?sfvrsn=e7d1eb9c_0',
    name: 'Coffee Spot'
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdAWIoqjyHJdTr-hOiO24fGgxXla965A6d3cbH58Dpbxxgsf7N',
    name: 'Lorem'
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSME0pZY1oDeysZu3pNi_3pXFWc37ZjUSvud1NTPLsnUmzBOdAY',
    name: 'Mike\'s'
  },
  {
    img: 'https://www.recipegirl.com/wp-content/uploads/2007/10/Bacon-Macaroni-and-Cheese.jpg',
    name: 'Curds'
  },
  {
    img: 'https://www.iheartnaptime.net/wp-content/uploads/2016/06/Cheeseboard-740x740.jpg',
    name: 'The Butcher\'s Table'
  }
]

function Browse(){
  const center = {
    textAlign: 'center',
    padding: '45px'
  }
  const grid = {
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 1fr)',
    margin: '0 5vw 0 5vw',
    gridGap: '5px'
  }
  return(
    <div>
      <h1 style={center}>Featured restaurants near you</h1>
      <div style={grid}>
        {browseList.map((place,index)=>
        <FRestaurant img= {place.img}
          name = {place.name}
          key = {index}/>
        )}
      </div>
    </div>
  );
}

export default Browse;
