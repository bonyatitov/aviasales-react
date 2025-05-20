import { configureStore, combineReducers } from "@reduxjs/toolkit";


const initialState = {
  filteres: [
    { id: 1, title: 'Все', name: 'all', checked: false, type: 'additionalFilter'},
    { id: 2, title: 'Без пересадок', name: 'withoutTransfer', checked: false, type: 'additionalFilter'},
    { id: 3, title: '1 пересадка', name: 'oneTransfer', checked: false, type: 'additionalFilter' },
    { id: 4, title: '2 пересадки', name: 'twoTransfer', checked: false, type: 'additionalFilter'},
    { id: 5, title: '3 пересадки', name: 'threeTransfer', checked: false, type: 'additionalFilter'},
  ],
  mainFilteres: [
    { id: 6, title: 'Самый дешевый', name: 'lowPrice', checked: false, type: 'mainFilter'},
    { id: 7, title: 'Самый быстрый', name: 'fast', checked: false, type: 'mainFilter'},
    { id: 7, title: 'Оптимальный', name: 'optimal', checked: false, type: 'mainFilter'},
  ],
  data: []
};


const reducerFilter = (state = initialState.filteres || [], action) => {
  switch(action.type) {
    case 'TOGGLE_FILTER': {
      const {name} = action.payload
      if (name === 'all') {
        const allChecked = state.every(f => f.checked);
        return state.map(filter => ({ ...filter, checked: !allChecked}));
      } 
      return state.map(filter => {
        if (filter.name === 'all') {
          return { ...filter, checked: false }; 
        }
        if (filter.name === name) {
          return { ...filter, checked: !filter.checked }; 
        }
        return filter; 
      })
      
    }
    default: return state;
  }
}

const mainFilter = (state = initialState.mainFilteres || [], action) => {
  switch(action.type) {
    case 'TOGGLE_MAIN_FILTER': {
      const { name } = action.payload;
      console.log(name);
      return;
    }
    default: return state;
  }
}

const rootReducer = combineReducers({
  filteres: reducerFilter,
  mainFilteres:  mainFilter,
}); 

export const store = configureStore({reducer: rootReducer});


// const additionalFilterSlice = createSlice({
//   name: 'additional-filter',
//   initialState: {
    // filters: [
    //   {
    //     id: 1,
    //     title: 'Все',
    //     name: 'all',
    //     checked: false,
    //   },
    //   {
    //     id: 2,
    //     title: 'Без пересадок',
    //     name: 'withoutTransfer',
    //     checked: false,
    //   },
    //   {
    //     id: 3,
    //     title: '1 пересадка',
    //     name: 'oneTransfer',
    //     checked: false,
    //   },
    //   {
    //     id: 4,
    //     title: '2 пересадки',
    //     name: 'twoTransfer',
    //     checked: false,
    //   },
    //   {
    //     id: 5,
    //     title: '3 пересадки',
    //     name: 'threeTransfer',
    //     checked: false,
    //   }
    // ],
//   },
//   reducers: {
//     setFilter: (state, action) => {
//       // state.filters - это массив с фильтрами 
//       // action.pyload 
//       state.filters.map((filter) => {
//         switch(action.type) {
//           case 'all': // короче на сегодня впизду
//         }
//       });
//     }
//   }
// })

// export const { setFilter } = additionalFilterSlice;
// export default additionalFilterSlice.reducer;