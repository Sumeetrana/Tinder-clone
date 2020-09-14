import React, {useState, useEffect} from 'react';
import TinderCard from 'react-tinder-card';
import './TinderCards.css';
import axios from '../../api/axios';

const TinderCards = () => {
    const [people, setPeople] = useState([
        {
            "name": "Elon Musk",
            "imgUrl": "https://www.biography.com/.image/c_fill%2Ccs_srgb%2Cfl_progressive%2Ch_400%2Cq_auto:good%2Cw_620/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg"
        },
        {
            "name": "Sarah Kay",
            "imgUrl": "https://pbs.twimg.com/profile_images/787680907402571777/IB3phGEm_400x400.jpg"
        },
        {
            "name": "Anuja",
            "imgUrl": "https://goodhomes.wwmindia.com/content/2017/Apr/profile1avertical-780x1040-with-watermark_1493203792.jpg"
        },
        {
            "name": "Sahili Chopra",
            "imgUrl": "https://lh3.googleusercontent.com/proxy/Y_o6h_tgi3twnCQ4fFQ476u3bC1dGR121DTvsiTl8fpDq6HQ-QTdqYpP9PVkSx-XzVESjv-rpHxiPcuijKHU0QNdEob-MFr-SHQlIkqI84NZiqoK96d6MSqn9qBUoRVgHZJ7sgqdqSM2mkwzm-xsTHv2_OBL"
        },
        {
            "name": "Damned Coder",
            "imgUrl": "https://i1.wp.com/blog.codacy.com/wp-content/uploads/2018/10/20181002_WhyCodingStandardsMatter.jpg?fit=750%2C400&ssl=1"
        },
    ])

    // useEffect(() => {
    //     async function fetchData() {
    //         const request = await axios.get('/tinder/cards');

    //         setPeople(request.data); 
    //     }
    //     fetchData();
    // }, [])

    // console.log(people);

    const swiped = (direction, nameToDelete) => {
        console.log('removing: ', nameToDelete);
    }

    const outOfFrame = (name) => {
        console.log(name + " left the screen");
    }

    return (
        <div className="tinderCards">
            <div className="tinderCards__cardContainer">
                {
                    people.map((person) => (
                        <TinderCard
                            className="swipe"
                            key={person.name}
                            preventSwipe={["up", "down"]}
                            onSwipe={(dir) => swiped(dir, person.name)}
                            onCardLeftScreen={() => outOfFrame(person.name)}
                        >
                            <div className="card"
                                style={{ backgroundImage: `url(${person.imgUrl})` }}
                            >
                                <h3>{person.name}</h3>
                            </div>
                        </TinderCard>
                    ))
                }
            </div>
            
        </div>
    );
};

export default TinderCards;