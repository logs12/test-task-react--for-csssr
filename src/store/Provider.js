import React from 'react';

import ContextStore from './ContextStore';

// TODO We can adding react context instead use global object js window
export default function Provider({store, children}) {
    return (
        <ContextStore.Provider value={store}>
            {children}
        </ContextStore.Provider>
    );
}