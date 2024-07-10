import React, { useState, useEffect } from 'react';
// import FormVente from './FormVente';
import ListeVente from './ListeVente';
import FormVente from './FormeVente';


function Vente(){
  const storage = localStorage.getItem("data");
  const initialState = storage
    ? JSON.parse(storage)
    : {
        items: [],
        isUpdating: false,
        selectedIndex: null,
      };

  const [state, setState] = useState(initialState);

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(state));
  }, [state]);

  const addItem = (item) => {
    setState((existingState) => ({
      ...existingState,
      items: [item, ...existingState.items],
    }));
  };

  const handleDelete = (indexDelet) => {
    setState((existingState) => ({
      ...existingState,
      items: existingState.items.filter((_, index) => index !== indexDelet),
    }));
  };

  const handleEdit = (index) => {
    setState((existingState) => ({
      ...existingState,
      isUpdating: true,
      selectedIndex: index,
    }));
  };

  const updateItem = (updatedItem) => {
    setState((existingState) => {
      const updatedItems = [...existingState.items];
      updatedItems[existingState.selectedIndex] = updatedItem;
      return {
        ...existingState,
        items: updatedItems,
        isUpdating: false,
        selectedIndex: null,
      };
    });
  };

  return (
    <div className='container tache2'>
      <FormVente
        addItem={addItem}
        isUpdating={state.isUpdating}
        edit={state.items[state.selectedIndex]}
        update={updateItem}
        items={state.items}
      />
      <ListeVente
        isUpdating={state.isUpdating}
        datas={state.items}
        edit={handleEdit}
        delete={handleDelete}
      />
    </div>
  );
}
export default Vente