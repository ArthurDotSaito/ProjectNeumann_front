import { w } from 'windstitch';

export const HeaderContainer = w.header(
	`
        flex 
        flex-col 
        xs:flex-row 
        justify-between 
        items-center 
        w-full 
        mt-3 
        border-b 
        pb-7 
        sm:px-4 
        px-2 
        border-gray-500 
        gap-2
    `,
);

export const HeaderButtonContainer = w.section(
	`
        flex
        flex-col xs:flex-row
        max-w-fit 
        items-center 
        justify-center 
    `,
);

export const HeaderButton = w.button(
	`
        flex 
        max-w-fit 
        items-center 
        justify-center 
        space-x-2 
        rounded-full 
        border 
        rounded
        border-blue-600 
        text-white 
        px-5
        py-2 
        text-sm 
        shadow-md 
        hover:bg-blue-500
        bg-blue-600  
        font-medium transition
    `,
);
