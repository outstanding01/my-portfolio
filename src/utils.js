export const getImageUrl=(path) => {
    return new URL(`/assets/${path}`, import.meta.url).href
};

/* this makes it easy for me to dinamically import images into diffrent components*/