type ObjectMenu = ''| 'all' | 'dog'| 'cat'| 'fish';

export const createMenuObjetc = (activeMenu:ObjectMenu)=>{
    let returnObject = {
        all:false,
        dog:false,
        cat:false,
        fish:false
    }

    if(activeMenu !== ""){
        returnObject[activeMenu] = true;
    }

    return returnObject
}