import { useRef } from "react"

function DragElements() {
    const sliderRef = useRef(null);         
    const items = [
        { id: "a1", title: "iamge 1", img: "/images/img1.jpg" },
        { id: "a2", title: "iamge 2", img: "/images/img2.jpg" },
        { id: "a3", title: "iamge 3", img: "/images/img3.jpg" },
        { id: "a4", title: "iamge 4", img: "/images/img4.jpg" },
        { id: "a5", title: "iamge 5", img: "/images/img5.jpg" },
        { id: "a6", title: "iamge 6", img: "/images/img6.jpg" },
        { id: "a7", title: "iamge 7", img: "/images/img7.jpg" },
        { id: "a31", title: "iamge 31", img: "/images/img3.jpg" },
        { id: "a52", title: "iamge 52", img: "/images/img5.jpg" },
        { id: "a32", title: "iamge 32", img: "/images/img2.jpg" },
        { id: "a17", title: "iamge 17", img: "/images/img7.jpg" },
        { id: "a41", title: "iamge 41", img: "/images/img4.jpg" },
        { id: "a61", title: "iamge 61", img: "/images/img6.jpg" },
        { id: "a11", title: "iamge 11", img: "/images/img1.jpg" },
    ]

    let pos = {
        left: 0, x: 0};
    const mouseDownHandler = function(e){       
        pos.left = sliderRef.current.scrollLeft;
        pos.x = e.clientX;

        const mouseMoveHandler = function(e){
            const dx = e.clientX - pos.x;
            sliderRef.current.scrollLeft = pos.left - dx;
        }

        const mouseUpHandler = function(e){       
            e.stopPropagation();
            document.removeEventListener('mousemove', mouseMoveHandler)
            document.removeEventListener('mouseup', mouseUpHandler)
        }

        document.addEventListener('mousemove', mouseMoveHandler)
        document.addEventListener('mouseup', mouseUpHandler)
    }


    const clickHandler = function(e){
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();

    }

    

    return (
        <>
            <div  
                className="w-full flex flex-row gap-6 overflow-x-scroll pb-4 cursor-grabbing my-6 h-[300px]"
                ref={sliderRef}
                onMouseDown={mouseDownHandler}
            >
                {
                    items.map( item => (
                        <div key={item.id} className="rounded-lg  min-w-[300px] select-none">
                            <div className="h-full bg-cover" style={{backgroundImage: `url(${item.img})`}}>
                            </div>
                            {/* <img src={item.img} alt={item.title} className="h-full select-none" onClick={clickHandler}/> */}
                        </div>
                    ))
                
                }
            </div>
        </>
    )
}

export default DragElements