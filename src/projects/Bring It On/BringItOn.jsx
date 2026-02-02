import { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

const DATA = [
  {
    id: "1",
    name: "Walmart",
    items: [
      { id: "1.1", name: "3% Milk" },
      { id: "2.1", name: "Butter" },
    ],
    tint: 1,
  },
  {
    id: "2",
    name: "Sam's",
    items: [
      {
        id: "2.1",
        name: "Bounties",
      },
      { id: "2.2", name: "Fruits" },
    ],
    tint: 2,
  },
  {
    id: "3",
    name: "Lowe's",
    items: [
      { id: "3.1", name: "Workbench" },
      { id: "3.2", name: "Hammer" },
      { id: "3.3", name: "Nails" },
    ],
    tint: 3,
  },
];

const BringItOn = () => {
  const [stores, setStores] = useState(DATA);

  const handleDragDrop = (results) => {
    const { source, destination, type } = results;

    if (!destination) return;

    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    )
      return;

    if (type === "group") {
      const reorderedStores = [...stores];

      const sourceIndex = source.index;
      const destinationIndex = destination.index;

      const [removedStore] = reorderedStores.splice(sourceIndex, 1);
      reorderedStores.splice(destinationIndex, 0, removedStore);

      return setStores(reorderedStores);
    }

    const storeSourceIndex = stores.findIndex(
      (store) => store.id === source.droppableId,
    );
    const storeDestinationIndex = stores.findIndex(
      (store) => store.id === destination.droppableId,
    );
    const newSourceItems = [...stores[storeSourceIndex].items];
    const newDestinationItems =
      source.droppableId !== destination.droppableId
        ? [...stores[storeDestinationIndex].items]
        : newSourceItems;

    const [deletedItem] = newSourceItems.splice(source.index, 1);
    newDestinationItems.splice(destination.index, 0, deletedItem);

    const newStores = [...stores];

    newStores[storeSourceIndex] = {
      ...stores[storeSourceIndex],
      items: newSourceItems,
    };

    newStores[storeDestinationIndex] = {
      ...stores[storeDestinationIndex],
      items: newDestinationItems,
    };

    setStores(newStores);
  };

  return (
    <div className="h-screen flex justify-center items-center bg-[#2a385c] bg-[linear-gradient(320deg,#1c1e22_0%,#323b49_100%)]">
      <div className="bg-[linear-gradient(0deg,#23282f_0%,#3c4858_100%)] rounded-[3px] shadow-[0_12px_16px_#0000003f] my-12 mx-auto w-92.5 max-w-sm">
        <div className="p-5 bg-white rounded-[5px]">
          <DragDropContext onDragEnd={handleDragDrop}>
            <div className="border-b border-b-gray-500 pb-2.5 mb-1.25">
              <h1 className="text-2xl font-bold">Shopping List</h1>
            </div>
            <Droppable droppableId="root" type="group">
              {(provided) => (
                <div {...provided.droppableProps} ref={provided.innerRef}>
                  {stores.map((store, index) => (
                    <Draggable
                      draggableId={store.id}
                      key={store.id}
                      index={index}
                    >
                      {(provided) => (
                        <div
                          {...provided.dragHandleProps}
                          {...provided.draggableProps}
                          ref={provided.innerRef}
                        >
                          <StoreList {...store} />
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
        </div>
      </div>
    </div>
  );
};

const StoreList = ({ name, items, id }) => {
  return (
    <Droppable droppableId={id}>
      {(provided) => (
        <div {...provided.droppableProps} ref={provided.innerRef}>
          <div className="text-center p-1.25 bg-[#00f7ff]">
            <h3 className="font-semibold">{name}</h3>
          </div>
          <div className="text-center">
            {items.map((item, index) => (
              <Draggable draggableId={item.id} index={index} key={item.id}>
                {(provided) => (
                  <div
                    {...provided.dragHandleProps}
                    {...provided.draggableProps}
                    ref={provided.innerRef}
                    className="p-1.25 border-b border-b-gray-500"
                  >
                    <h4 className="font-semibold">{item.name}</h4>
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        </div>
      )}
    </Droppable>
  );
};

export default BringItOn;
