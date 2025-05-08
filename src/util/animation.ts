export const scrollToSection = (id: string) => {
	document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
};