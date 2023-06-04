import { w } from 'windstitch';

export const HeaderButtonContainer = w.section(
	`
        flex
        flex-col xs:flex-row
        max-w-fit 
        items-center 
        justify-center 
    `,
);

export const HeaderButton = w.a(
	`
        flex 
        max-w-fit 
        items-center 
        justify-center 
        space-x-2 
        rounded-full 
        border 
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
