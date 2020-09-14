import React from 'react';
import './SwipeButtons.css';
import IconButton from '@material-ui/core/IconButton';
import ReplayIcon from '@material-ui/icons/Replay';
import CloseIcon from '@material-ui/icons/Close';
import StarRateIcon from '@material-ui/icons/StarRate';
import FavouriteIcon from '@material-ui/icons/Favorite';
import FlashIcon from '@material-ui/icons/FlashOn';

const SwipeButtons = () => {
    return (
        <div className="swipeButtons">
            <IconButton className="swipeButtons__repeat">
                <ReplayIcon fontSize="large" />
            </IconButton>
            <IconButton className="swipeButtons__left">
                <CloseIcon fontSize="large" />
            </IconButton>
            <IconButton className="swipeButtons__star">
                <StarRateIcon fontSize="large" />
            </IconButton>
            <IconButton className="swipeButtons__right">
                <FavouriteIcon fontSize="large" />
            </IconButton>
            <IconButton className="swipeButtons__lightning">
                <FlashIcon fontSize="large" />
            </IconButton>
        </div>
    );
};

export default SwipeButtons;