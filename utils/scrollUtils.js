export const scrollToTop = () => {
  if (typeof window !== 'undefined') {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
};
