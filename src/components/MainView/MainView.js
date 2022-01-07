import React from 'react';
import Search from '../Search/Search';
import Card from '../Card/Card';
import DetailCard from '../DetailCard/DetailCard';
import PreviewCard from '../PreviewCard/PreviewCard';
import './mainView.css';

export default function MainView(){
    if(false){
        return(
            <DetailCard></DetailCard>
        )
    } else{
        return(
            <div>
                <Search></Search>
                <Card></Card>
                <div className='future-weather'>
                    <PreviewCard></PreviewCard>
                    <PreviewCard></PreviewCard>
                    <PreviewCard></PreviewCard>
                    <PreviewCard></PreviewCard>
                    <PreviewCard></PreviewCard>
                </div>
            </div>
        )
    }

}