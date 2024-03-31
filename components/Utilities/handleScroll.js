import { useContext, useEffect } from "react";
import { UserContext } from "@/context/UserContext";


export const AddScrollToElement = () => {
    const { theme } = useContext(UserContext);
    useEffect(() => {
        // Function to check if an element is in the viewport
        function isElementInViewport(element, threshold = 0.6) {
            const rect = element.getBoundingClientRect();
            const windowHeight = window.innerHeight || document.documentElement.clientHeight;
            const elementTop = rect.top;
            return elementTop <= windowHeight * threshold;
        }

        // Function to handle the scroll event
        function handleScroll() {
            const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');

            elementsToAnimate.forEach((element) => {
                if (isElementInViewport(element, 0.6)) {
                    // Add your animation class or logic here
                    element.classList.add('scroll-into-view'); // Apply your animation class
                }
            });
        }

        // Attach the scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Initial check to see if the elements are already in the viewport on page load
        handleScroll();

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        // Set a global JavaScript variable based on the Theme value
        window.appTheme = theme;
    }, [theme]);
}

