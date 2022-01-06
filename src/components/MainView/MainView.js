import React from 'react';
import Card from '../Card/Card';
import PreviewCard from '../PreviewCard/PreviewCard';
import './mainView.css';

export default function MainView(){
    return(
        <div>
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