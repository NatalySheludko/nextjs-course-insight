import cn from 'classnames';

export const BeneficiariesSection = () => {
    return (
        <section className={cn('container')}>
            <div className="pt-[156px] pb-[100px]">
                <h2 className="font-bold text-[40px] mb-[40px] text-(--frame) leading-[1.2]">
                    Кому буде корисний курс
                </h2>

                <div className="grid grid-cols-[480px_1fr] gap-[20px] bg-(--backgroundTertiary) rounded-[40px] p-[46.5px_23px_45.5px_35px]">
                    <div className="bg-(--backgroundSecondary) border border-(--white) rounded-[20px] p-[27px_24px_81px_22px]">
                        <p className="text-(--white) font-bold text-[40px] leading-[1.4] capitalize mb-[20px]">
                            Trusted By Worldwide
                        </p>
                        <p className="text-(--white) font-bold text-[40px] leading-[1.4] capitalize mb-[87px]">
                            Clients Since 1
                        </p>

                        <p className="text-(--white) font-normal text-base leading-[1.2]">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. A officia
                            molestiae dolorum tempora ut accusamus cupiditate! Nesciunt tempora
                            reiciendis libero voluptate!
                        </p>
                    </div>

                    <div className="grid grid-cols-2 grid-rows-2 gap-[16px]">
                        <div className="bg-(--transparentWhite) rounded-[20px] p-[42.5px_41px_42.5px_16px] border border-white">
                            <p className="text-(--white) font-bold text-[28px] leading-[1.2] capitalize mb-[12px]">
                                First On Field
                            </p>
                            <p className="text-(--white) font-normal text-base leading-[1.2]">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur,
                                iste
                            </p>
                        </div>
                        <div className="bg-(--transparentWhite) rounded-[20px] p-[42.5px_41px_42.5px_16px] border border-white">
                            <p className="text-(--white) font-bold text-[28px] leading-[1.2] capitalize mb-[12px]">
                                Worldwide
                            </p>
                            <p className="text-(--white) font-normal text-base leading-[1.2]">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur,
                                iste
                            </p>
                        </div>
                        <div className="bg-(--transparentWhite) rounded-[20px] p-[42.5px_41px_42.5px_16px] border border-white">
                            <p className="text-(--white) font-bold text-[28px] leading-[1.2] capitalize mb-[12px]">
                                Easy to reach
                            </p>
                            <p className="text-(--white) font-normal text-base leading-[1.2]">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur,
                                iste
                            </p>
                        </div>
                        <div className="bg-(--transparentWhite) rounded-[20px] p-[42.5px_41px_42.5px_16px] border border-white">
                            <p className="text-(--white) font-bold text-[28px] leading-[1.2] capitalize mb-[12px]">
                                24/7 Support
                            </p>
                            <p className="text-(--white) font-normal text-base leading-[1.2]">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur,
                                iste
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
