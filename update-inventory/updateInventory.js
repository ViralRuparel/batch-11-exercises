const createMapInventory = (inventory) => {
  return inventory.reduce((accumulator, itemDetails, index) => {
    const name = itemDetails[1];
    accumulator[name] = index.toString();
    return accumulator;
  }, {});
}

const sortInventory = (inventory) => {
  return inventory.sort((inventoryItem1, inventoryItem2) => {
    const nameA = inventoryItem1[1];
    const nameB = inventoryItem2[1];
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });
}

const updateInventory = (currentInventory, newInventory) => {
  const currentInventoryMap = createMapInventory(currentInventory);
  newInventory.forEach((itemDetails) => {
    const name = itemDetails[1];
    const quantity = itemDetails[0];
    const indexOfCurrentItemInMap = currentInventoryMap[name];
    if (indexOfCurrentItemInMap) {
      const itemInCurrentInventory = currentInventory[parseInt(indexOfCurrentItemInMap, 10)];
      let currentItemQuantity = itemInCurrentInventory[0];
      currentItemQuantity += quantity;
      itemInCurrentInventory[0] = currentItemQuantity;
    } else {
      currentInventory.push(itemDetails);
    }
  });
  return sortInventory(currentInventory);
}

export {
  updateInventory,
};