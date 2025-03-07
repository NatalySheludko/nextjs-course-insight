export const DecorativeElement = () => {
    return (
        <div className="flex justify-center items-center">
            <div className="bg-gradient-to-l from-(--backgroundLight) to-(--white) absolute left-[12%] xl:left-[10%] w-[30px] h-[10px] rounded-full"></div>

            <div className="bg-black w-[200px] xl:w-[350px] h-[10px] rounded-full"></div>

            <div className="bg-gradient-to-r from-(--backgroundLight) to-(--white) absolute right-[12%] xl:right-[10%] bg-(--backgroundLight) w-[30px] h-[10px] rounded-full"></div>
        </div>
    );
};
