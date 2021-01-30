import React from 'react';
import './css/Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Cu ce ne mandrim</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/carpaint.jpg'
              text='Profesionisti cu P mare si peste 25 ani de experienta!'
              label='Vopsitorie'
              path='/services'
            />
            <CardItem
              src='images/mechanic-worker-repairman-sanding-polishing-car-body-preparing-automobile-painting-workshop-garage_342744-318.jpg'
              text='Masina ta are riduri? Avem tratamente speciale'
              label='Tinichigerie'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/NAPA-AUTO-PARTS-Grand-Reopening.jpg'
              text='Specialistii nostri te va vor ajuta sa gasiti piesele necesare'
              label='Piese'
              path='/services'
            />
            <CardItem
              src='images/Sell-your-used-car-feature.jpg'
              text='Ce este mai placut decat sa te urci la o masina noua ?'
              label='Masini'
              path='/services'
            />
            <CardItem
              src='images/polsihcar.jpg'
              text='Accentul pe perfectiune este in sangele nostru'
              label='Detailing'
              path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
