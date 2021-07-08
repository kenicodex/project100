import React from 'react';
import { useState } from 'react';
import { Carousel } from 'react-bootstrap';
function Example() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    const contents = [
        { img: "about", h3: "About Us", p: "A little Something About Us" },
        { img: "school", h3: "Education", p: "A little Something About Us" },
        { img: "donation", h3: "Donations", p: "A little Something About Us" }
    ]
    return (
        <Carousel activeIndex={index} onSelect={handleSelect} className="bg-light">
            {
                contents.map(({ img, h3, p },index) => {
                    return (
                        <Carousel.Item>
                            <img
                                className="d-block w-100" style={{height:"70vh"}}
                                src={process.env.PUBLIC_URL + `/imgs/${img}.svg`}
                                alt={"Slide" + index}
                            />
                            <Carousel.Caption >
                                <h1 className="text-dark position-absolute text-center slide-text" style={{top:"-300px"}}>{h3}</h1>
                                <p className="text-secondary" style={{fontSize:'20px'}}>{p}</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    )
                })
            }
        </Carousel>
    );
}

//   React.render(<ControlledCarousel />);
export default Example;