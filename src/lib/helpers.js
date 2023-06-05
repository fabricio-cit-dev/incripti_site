export const scrollToTop = () => {
  const bannerElement = document.getElementById("banner");
  if (bannerElement) {
    bannerElement.scrollIntoView({ behavior: "smooth" });
  }
};

export const handleClickScroll = (id) => {
  
  const element = document.getElementById(id);
  if (element) {
    // 👇 Will scroll smoothly to the top of the next section
    element.scrollIntoView();
  }
};
