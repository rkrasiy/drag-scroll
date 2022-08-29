import { useEffect, useRef, useState } from "react"

function DragElements() {
    const sliderRef = useRef(null);      
    const items =  [
            { id: "a1", title: "image 1", img: "/images/img1.jpg" },
            { id: "a2", title: "image 2", img: "/images/img2.jpg" },
            { id: "a3", title: "image 3", img: "/images/img3.jpg" },
            { id: "a4", title: "image 4", img: "/images/img4.jpg" },
            { id: "a5", title: "image 5", img: "/images/img5.jpg" },
            { id: "a6", title: "image 6", img: "/images/img6.jpg" },
            { id: "a7", title: "image 7", img: "/images/img7.jpg" },
            { id: "a31", title: "image 31", img: "/images/img3.jpg" },
            { id: "a52", title: "image 52", img: "/images/img5.jpg" },
            { id: "a32", title: "image 32", img: "/images/img2.jpg" },
            { id: "a17", title: "image 17", img: "/images/img7.jpg" },
            { id: "a41", title: "image 41", img: "/images/img4.jpg" },
            { id: "a61", title: "image 61", img: "/images/img6.jpg" },
            { id: "a11", title: "image 11", img: "/images/img1.jpg" },
        ]
    const [ selected, setSelected ] = useState(items[0])   
    
    let controller;
    let pos = {
        left: 0, x: 0};

    const mouseDownHandler = function(e){       
        pos.left = sliderRef.current.scrollLeft;
        pos.x = e.clientX;

        const mouseMoveHandler = function(e){
            controller = true
            const dx = e.clientX - pos.x;
            sliderRef.current.scrollLeft = pos.left - dx;
        }

        const mouseUpHandler = function(e){      
            controller = !controller
            document.removeEventListener('mousemove', mouseMoveHandler)
            document.removeEventListener('mouseup', mouseUpHandler)
        }
            controller = false
        // controller = null
        document.addEventListener('mousemove', mouseMoveHandler)
        document.addEventListener('mouseup', mouseUpHandler)
    }

    return (
        <>
            <div>{
                selected ? (
                    <img src={selected.img} alt={selected.title} className="h-full select-none"/>
                ) : null
            }</div>
            <div  
                className="w-full flex flex-row gap-6 overflow-x-scroll pb-4 cursor-grabbing my-6 h-[300px]"
                ref={sliderRef}
                onMouseDown={mouseDownHandler}>
                {
                    items.map( item => {
                        const classes = item.id == selected.id ? 'border-4 border-green-400' : ""
                        return (
                            <div key={item.id} 
                                className={`rounded-lg min-w-[300px] select-none overflow-hidden ${classes}`}
                                onMouseUp={ (e)=>e.preventDefault()}
                                onClick={()=> {
                                    if(controller){
                                    setSelected(item)
                                    }
                                }}>
                                <div className="h-full bg-cover" 
                                    style={{backgroundImage: `url(${item.img})`}}>
                                </div>
                                {/* <img src={item.img} alt={item.title} className="h-full select-none" onClick={clickHandler}/> */}
                            </div>
                        )
                    })
                }
            </div>
            
        </>
    )
}

export default DragElements