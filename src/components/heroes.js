import { useRef } from 'react';
import {
  List,
  AutoSizer,
  CellMeasurer,
  CellMeasurerCache
} from 'react-virtualized';

import { CardHeroe } from './cardHeroe';

import { useHeroes } from '../hooks/useHeroes';


export const Heroes = () => {

  const { heroes } = useHeroes();

  const cache = useRef(new CellMeasurerCache({
    fixedWidth: true,
    defaultHeight: 100,
  }));


  return (
    <div className="container" style={{ marginTop: '10px' }}>
      <div className="row">
        <div style={{ width: '100%', height: '50vh', display: 'flex' }}>
          {heroes.length && (
            <AutoSizer>
              {({ width, height }) => (
                <List
                  width={width}
                  height={height}
                  rowHeight={cache.current.rowHeight}
                  deferredMeasurementCache={cache.current}
                  rowCount={heroes.length}
                  rowRenderer={({ key, index, style, parent }) => {
                    const heroe = heroes[index];
                    return (
                      <CellMeasurer
                        key={key}
                        cache={cache.current}
                        parent={parent}
                        columnIndex={0}
                        rowIndex={index}
                      >
                        <div style={style}>
                          <CardHeroe
                            keyy={key}
                            id={heroe.id}
                            name={heroe.name}
                            powerstats={heroe.powerstats}
                            fullName={heroe.fullName}
                            images={heroe.images}
                            // cardSetLikedHeroe={(e) => heroesSetLikedHeroes(e)}
                            cardSetLikedHeroe={(e) => { }}
                          />
                        </div>
                      </CellMeasurer>
                    )
                  }}
                />
              )}
            </AutoSizer>
          )}
        </div>
      </div>
    </div>
  )
}