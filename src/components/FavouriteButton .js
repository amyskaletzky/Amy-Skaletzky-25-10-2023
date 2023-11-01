import React from 'react'
import beforeFavourited from '../assets/preFavouriteStar.svg'
import favouritedStar from '../assets/favouriteStar.svg'
import useLocalStorage from '../hooks/useLocalStorage';
export const FavouriteButton = ({ cityKey, cityName }) => {
    const [favourites, setFavourites] = useLocalStorage('favourites', []);
    const handleFavourite = (cityKey, cityName) => {
        if (checkIfFavourited(favourites, cityKey)) {
            setFavourites(prev => prev.filter((city) => city.cityKey !== cityKey));
        }
        else {
            setFavourites(prev => [...prev, { cityKey, cityName }]);
        }
    }
    const checkIfFavourited = (favourites, key) => {
        for (const favourite of favourites) {
            if (favourite.cityKey === key) {
                return true;
            }
        }
        return false;
    }
    return (
        <div className='hover:cursor-pointer' onClick={() => handleFavourite(cityKey, cityName)}>
            {
                checkIfFavourited(favourites, cityKey) ? <img src={favouritedStar} className="w-6 lg:w-10" alt='favourtie star icon' /> : <img src={beforeFavourited} className="w-6 lg:w-10" alt='unfavourite star icon' />
            }
        </div>
    )
}