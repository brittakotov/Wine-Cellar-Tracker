import * as React from 'react'
import Downshift from 'downshift'


const SearchBar = ({wines, handleMoved}) => {

  const items = wines;

    return (
      <Downshift
        onChange={selection =>
          handleMoved(selection.id)

        }
        itemToString={item => (item ? item.brand : '')}
      >
        {({
          getInputProps,
          getItemProps,
          getLabelProps,
          getMenuProps,
          isOpen,
          inputValue,
          highlightedIndex,
          selectedItem,
          getRootProps,
          clearSelection,
        }) => (
          <div>
            <label {...getLabelProps()}>Search</label>
            <div
              style={{display: 'inline-block'}}
              {...getRootProps({}, {suppressRefError: true})}
            >
              <input     {...getInputProps({
            })} />
            </div>
            <div {...getMenuProps()}>
              {isOpen
                ? items
                    .filter(item => !inputValue || item.brand.includes(inputValue))
                    .map((item, index) => (
                      <div
                        {...getItemProps({
                          key: item.id,
                          index,
                          item,
                          style: {
                            backgroundColor:
                              highlightedIndex === index ? 'white' : 'lightgray',
                              border: '1px solid black',
                              height: '30px',
                            fontWeight: selectedItem === item ? 'bold' : 'normal',
                            position: 'relative'
                          },
                        })}
                      >
                        {item.brand} {item.name} {item.vintage}
                      </div>
                    ))
                : null}
            </div>
          </div>
        )}
      </Downshift>
    )
}

export default SearchBar;
