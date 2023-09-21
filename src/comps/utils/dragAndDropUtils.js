// dragAndDropUtils.js
export const onDragEnd = (result, items, setItems) => {
    if (!result.destination) {
      return;
    }
  
    const reorderedItems = Array.from(items);
    const [removed] = reorderedItems.splice(result.source.index, 1);
    reorderedItems.splice(result.destination.index, 0, removed);
  
    setItems(reorderedItems);
  };
  