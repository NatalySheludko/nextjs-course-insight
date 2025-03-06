import Default from '../public/careerCenterImg/woman-and-man.png';
import Business from '../public/careerCenterImg/business-woman-and-man.png';
import Ellipse from '../public/careerCenterImg/ellipse.png';

export const images = {
    default: [
        {
            src: Default.src,
            width: 570,
            height: 390,
            className: 'absolute top-[1%] right-[0%]',
        },
    ],
    business: [
        {
            src: Business.src,
            width: 550,
            height: 370,
            className: 'absolute bottom-[-1%] right-[0%] z-10',
        },
        {
            src: Ellipse.src,
            width: 550,
            height: 350,
            className: 'absolute bottom-[5%] right-[5%]',
        },
    ],
};
