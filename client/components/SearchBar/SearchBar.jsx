import * as React from 'react'
import Downshift from 'downshift'


const SearchBar = (props) => {

  const items = props.wines;

    return (
      <Downshift
        onChange={selection =>
          props.handleMoved(selection.id)

        }
        itemToString={item => (item ? item.name : '')}
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
                    .filter(item => !inputValue || item.name.includes(inputValue))
                    .map((item, index) => (
                      <div
                        {...getItemProps({
                          key: item.value,
                          index,
                          item,
                          style: {
                            backgroundColor:
                              highlightedIndex === index ? 'lightgray' : 'white',
                            fontWeight: selectedItem === item ? 'bold' : 'normal',
                          },
                        })}
                      >
                        {item.name}
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
