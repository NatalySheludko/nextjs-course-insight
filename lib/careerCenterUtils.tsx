import Default from '../public/careerCenterImg/woman-and-man.png';
import Business from '../public/careerCenterImg/business-woman-and-man.png';
import Ellipse from '../public/careerCenterImg/ellipse.png';

export const images = {
    default: [
        {
            src: Default.src,
            className:
                'absolute w-[223px] h-[173px] xl:w-[540px] xl:h-[390px] top-[25%] xl:top-[2%] right-[20%] xl:right-[0%]',
        },
    ],
    business: [
        {
            src: Business.src,
            className:
                'absolute w-[250px] h-[173px] xl:w-[530px] xl:h-[360px] bottom-[25%] left-[15%] rounded-[8px] xl:rounded-0 xl:bottom-[-1%] xl:left-[50%] z-10',
        },
        {
            src: Ellipse.src,
            className:
                'absolute w-[223px] h-[183px] xl:w-[550px] xl:h-[350px] bottom-[25%] xl:bottom-[5%] right-[15%] xl:right-[5%]',
        },
    ],
};
