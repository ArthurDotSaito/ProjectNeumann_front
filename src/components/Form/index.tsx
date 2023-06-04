import { w } from 'windstitch';

export const Container = w.section(`
    h-screen 
    max-h-[600px] 
    w-full max-w-[1200px] 
    rounded-lg 
    bg-white 
    shadow-md 
    flex 
    overflow-hidden
`);

export const StyledContainer = w.div(
	`
    h-screen 
    max-h-[600px] 
    w-full max-w-[1200px] 
    rounded-lg 
    bg-white 
    shadow-md 
    flex 
    overflow-hidden
    text-base 
    flex 
    flex-col 
    items-center 
    justify-between 
    p-6
`,
);

export const Title = w.h1(`
    text-4xl 
    mt-4
`);

export const Label = w.div(`
    text-2xl 
    mb-2
`);

export const Row = w.div(`
  flex 
  flex-col 
  items-center 
  justify-start 
  w-full  
`);
