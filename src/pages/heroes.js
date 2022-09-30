import logo from '../assets/images/logo.svg';

import { Loader } from '../components/loaders';
import { Heroes } from '../components/heroes';

import { useHeroes } from '../hooks/useHeroes';


export const PageHeroes = () => {

  const { isLoading } = useHeroes();

  return (
    <>
      <header className="logo" style={{ marginBottom: '100px' }}>
        <img
          src={logo}
          alt="logo"
          height="73"
          width="65"
        />
      </header>
      {isLoading
        ? (<Loader />)
        : (
          <>
            {/* <HeroesLiked
              allLikedHeroes={likeds}
              deleteLikedHeroes={(e) => deleteLiked(e)}
            /> */}
            {/* <HeroesSearch setFilterHeroes={(e) => filterHeroes(e)} /> */}
            <Heroes
              // setLikedHeroes={(e) => setLiked(e)}
            />
          </>
        )
      }
    </>
  )
}