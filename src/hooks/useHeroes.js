import { useEffect, useState } from 'react';
import axios from 'axios';

export const useHeroes = () => {
  const [heroes, setHeroes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getHeroes();
  }, []);

  const getHeroes = async () => {
    const { data } = await axios.get('https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json');
    setHeroes(transformDataHeroes(data));
    setIsLoading(false);
  }

  return {
    heroes,
    isLoading,
  }
}


const transformDataHeroes = (data) => {
  const heroes = []

  for (let heroe of data) {
    const {
      id,
      name,
      powerstats: {
        combat,
        durability,
        intelligence,
        power,
        speed,
        strength
      },
      biography: {
        fullName,
      },
      images: {
        md,
        sm,
      },
    } = heroe;

    const sumPower = combat + durability + intelligence + power + speed + strength;
    const powerstats = +((((sumPower) / 600) * 100).toFixed(1)) / 10;

    const heroeImages = {
      md,
      sm,
    };

    heroes.push({
      id,
      name,
      powerstats: +powerstats.toFixed(1),
      fullName,
      images: heroeImages,
    });
  }

  return heroes;
}