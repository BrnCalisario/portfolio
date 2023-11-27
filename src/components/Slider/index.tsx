import "./style.scss"
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export interface ProjectInfo {
    name: string,
    photoURL?: string
}


export const ProjectPreview = ({ info }: { info: ProjectInfo }) => {
    return (
        <div className="border box"  >
            <p>{info.name}</p>
        </div>
    )
}


const ProjectSlider = ({ items }: { items?: ProjectInfo[] }) => {

    const settings = {
        className: "px-3 center",
        // centerMode: true,
        infinite: true,
        slidesToShow: (items?.length || 0) > 3 ? 3 : items?.length,
        speed: 500
    };
    return (
        <Slider {...settings}>
            {items?.map((item, index) => (
                <ProjectPreview key={index} info={item} />
            ))}
        </Slider>

    )
}

export default ProjectSlider