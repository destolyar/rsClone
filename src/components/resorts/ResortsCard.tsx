import React from "react";
import { ResortsCardInfo } from "../../types";

export const ResortsCard: React.FunctionComponent<ResortsCardInfo> = (props) => {
  return(
    <div className="resorts__results__item">
      <div className="resorts__results__item__image-block">
        <img 
        className="resorts__results__item__image-block__image" 
        src={props.img?.toString()} alt=""/>
      </div>
      <div className="resorts__results__item__info">
        <p className="resorts__results__item__info__place">{`${props.name}, ${props.country}`}</p>
        <div className="resorts__results__item__info__block">
          <img 
          className="resorts__results__item__image-block__image" 
          src={props.img?.toString()} alt="" id="mobile-image"/>
          <p className="resorts__results__item__info__block__item">Высота: {props.heigh || 'Неизвестно'}</p>
          <p className="resorts__results__item__info__block__item">Количество трасс: {props.slopes.total || 'Неизвестно'}</p>
          <p className="resorts__results__item__info__block__item">Количество подъёмников: {props.cabel.total || 'Неизвестно'}</p>
          <p className="resorts__results__item__info__block__item">Рейтинг: {props.rate || 'Неизвестно'}</p>
          <p className="resorts__results__item__info__block__item">Теги: {props.tag?.map((i) => {return `#${i} ` || ''})}</p>
        </div>
        <button className="resorts__results__item__info__join">Создать поездку</button>
      </div>
    </div>
  )
}