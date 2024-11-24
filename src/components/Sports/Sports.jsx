import React from 'react';
import s from './Sports.module.scss';

const Sports = () => {
  return (
    <>
      <section className={s.Sports}>
        <div className="container">
          <div className={s.wrapper}>
            <h1>
              <b>BROWSE BY dress STYLE</b>
            </h1>
            <div className={s.sport}>
              <div className={s.box_1}>
                <div className={s.card_1}>
                  <b>Casual</b>
                </div>
                <div className={s.card_2}>
                  <b>Formal</b>
                </div>
              </div>
              <div className={s.box_2}>
                <div className={s.card_3}>
                  <b>Party</b>
                </div>
                <div className={s.card_4}>
                  <b>Gym</b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sports;
