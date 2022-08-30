import { useEffect, useRef, useState } from "react"
import { AiOutlineFullscreen } from "react-icons/ai";

function DragElements() {
    const sliderRef = useRef(null);      
    const items =  [
            { id: "a1", title: "image 1", img: "/images/img1.jpg", miniatura:"/images/miniaturas/img1.jpg" },
            { id: "a2", title: "image 2", img: "/images/img2.jpg", miniatura:"/images/miniaturas/img2.jpg" },
            { id: "a3", title: "image 3", img: "/images/img3.jpg", miniatura:"/images/miniaturas/img3.jpg" },
            { id: "a4", title: "image 4", img: "/images/img4.jpg", miniatura:"/images/miniaturas/img4.jpg" },
            { id: "a5", title: "image 5", img: "/images/img5.jpg", miniatura:"/images/miniaturas/img5.jpg" },
            { id: "a6", title: "image 6", img: "/images/img6.jpg", miniatura:"/images/miniaturas/img6.jpg" },
            { id: "a7", title: "image 7", img: "/images/img7.jpg", miniatura:"/images/miniaturas/img7.jpg" },
            { id: "a31", title: "image 31", img: "/images/img3.jpg", miniatura:"/images/miniaturas/img3.jpg" },
            { id: "a52", title: "image 52", img: "/images/img5.jpg", miniatura:"/images/miniaturas/img5.jpg" },
            { id: "a32", title: "image 32", img: "/images/img2.jpg", miniatura:"/images/miniaturas/img3.jpg" },
            { id: "a17", title: "image 17", img: "/images/img7.jpg", miniatura:"/images/miniaturas/img7.jpg" },
            { id: "a41", title: "image 41", img: "/images/img4.jpg", miniatura:"/images/miniaturas/img5.jpg" },
            { id: "a61", title: "image 61", img: "/images/img6.jpg", miniatura:"/images/miniaturas/img6.jpg" },
            { id: "a11", title: "image 11", img: "/images/img1.jpg", miniatura:"/images/miniaturas/img1.jpg" },
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
            
            <div className="max-w-[1127px] mx-auto">
                <div className="w-full mt-4 bg-slate-200 p-4 relative">
                    {selected ? (
                        <img src={selected.img} alt={selected.title} className="max-w-screen-md h-[500px] rounded-lg select-none mx-auto"/>
                    ) : null}
                    <button className="absolute right-2 bottom-2 z-50">
                        <AiOutlineFullscreen size={24}/>
                    </button>
                </div>
                <div  
                    className="w-full flex flex-row overflow-x-hidden py-4 cursor-grabbing h-[250px]"
                    ref={sliderRef}
                    onMouseDown={mouseDownHandler}>
                    {
                        items.map( item => {
                            const classes = item.id == selected.id ? 'border-4 border-green-400' : ""
                            return (
                                <div key={item.id} 
                                    className={`rounded-lg min-w-[250px] mr-4 last:mr-0 scroll-mx-4 select-none overflow-hidden ${classes}`}
                                    onMouseUp={ (e)=>e.preventDefault()}
                                    onClick={()=> {
                                        if(controller){
                                        setSelected(item)
                                        }
                                    }}>
                                    <div className="h-full bg-cover" 
                                        style={{backgroundImage: `url(${item.miniatura})`}}>
                                    </div>
                                    {/* <img src={item.img} alt={item.title} className="h-full select-none" onClick={clickHandler}/> */}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            
            
        </>
    )
}

export default DragElements