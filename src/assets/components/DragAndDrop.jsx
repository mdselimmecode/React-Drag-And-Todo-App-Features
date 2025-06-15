import { useRef, useState } from "react";


const DragAndDrop = ({ initialState }) => {

    const [data, setData] = useState(initialState);
    console.log("data state", data)
    const dragItem = useRef();
    const dragContainer = useRef();

    const handleDragStart = (e, item, container) => {
        dragItem.current = item;
        dragContainer.current = container;
        e.target.style.opacity = "0.5";
    }

    const handleDragEnd = e => {
        e.target.style.opacity = "1"
    }

    const handleDrop = (e, targetContainer) => {
        const item = dragItem.current;
        const sourceContainer = dragContainer.current;
        setData((prev) => {
            const newData = { ...prev };
            newData[sourceContainer] = newData[sourceContainer].filter((i) => i !== item);
            newData[targetContainer] = [...newData[targetContainer], item];
            return newData;
        })
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    }

    return (
        <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-3 gap-20">
            {
                Object.keys(data).map((container, index) => {
                    return <div key={index}
                        onDrop={(e) => handleDrop(e, container)}
                        onDragOver={handleDragOver}
                        className="bg-emerald-200 p-10 rounded-4xl">
                        <h2 className="mb-3 text-center text-2xl font-semibold bg-white px-3 py-4 rounded-2xl">{container}</h2>
                        {
                            data[container].map((item, idx) => {
                                return <div onDragEnd={handleDragEnd} onDragStart={(e) => handleDragStart(e, item, container)} draggable className="text-center py-2 rounded-3xl my-2 bg-amber-100" key={idx}>
                                    {item}
                                </div>
                            })
                        }
                    </div>
                })
            }
        </div>
    );
};

export default DragAndDrop;