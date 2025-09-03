import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";

export function SectionReorder({ sections, moveSection }) {
  const onDragEnd = (result) => {
    const { source, destination } = result || {};
    if (!destination) return;
    if (source.index === destination.index) return;

    const direction = destination.index > source.index ? 1 : -1;
    let currentIndex = source.index;
    while (currentIndex !== destination.index) {
      moveSection(currentIndex, direction);
      currentIndex += direction;
    }
  };

  return (
    <div className="p-4 rounded-2xl border bg-white shadow-sm">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-semibold">Reorder Sections</h3>
        <p className="text-sm text-slate-500">Drag & drop or use Up/Down</p>
      </div>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="sections-droppable">
          {(provided) => (
            <ul
              ref={provided.innerRef}
              {...provided.droppableProps}
              className="space-y-2"
            >
              {sections.map((s, i) => (
                <Draggable key={s} draggableId={s} index={i}>
                  {(dragProvided, snapshot) => (
                    <li
                      ref={dragProvided.innerRef}
                      {...dragProvided.draggableProps}
                      {...dragProvided.dragHandleProps}
                      className={`flex items-center justify-between border rounded-xl px-3 py-2 ${
                        snapshot.isDragging ? "bg-slate-50" : ""
                      }`}
                    >
                      <span className="font-medium">{s}</span>
                      <div className="flex gap-2">
                        <button
                          className="px-2 py-1 border rounded-lg"
                          onClick={() => moveSection(i, -1)}
                        >
                          ⬆️
                        </button>
                        <button
                          className="px-2 py-1 border rounded-lg"
                          onClick={() => moveSection(i, 1)}
                        >
                          ⬇️
                        </button>
                      </div>
                    </li>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}
