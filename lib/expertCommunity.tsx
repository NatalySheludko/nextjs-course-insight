import Boy from '../public/expertsCommunity/boy.png';
import Laptop from '../public/expertsCommunity/laptop.png';
import Circle from '../public/expertsCommunity/circle.png';

export const images = {
    default: [
        {
            src: Boy.src,
            className:
                'absolute bottom-[15%] right-[11%] xl:bottom-[-1%] xl:right-[-3%] h-[241px] xl:w-[616px] xl:h-[544px] w-[281px]',
        },
    ],
    business: [
        {
            src: Laptop.src,
            className:
                'absolute bottom-[23%] right-[25%] xl:bottom-[15%] xl:right-[7%] z-10 h-[152px] xl:w-[337px] xl:h-[285px] w-[180px]',
        },
        {
            src: Circle.src,
            className:
                'absolute bottom-[14%] right-[20%] xl:bottom-[-3%] xl:right-[0%] h-[250px] xl:w-[530px] xl:h-[480px] w-[253px]',
        },
    ],
};
