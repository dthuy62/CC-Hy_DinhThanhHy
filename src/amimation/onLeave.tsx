import { gsap } from "gsap";
const onLeave = (origin: any, destination: any, direction: any) => {
    switch (destination.index) {
        case 0:
            gsap.to(".second-container", { visibility: "hidden" });
            gsap.from(".first-title", {
                autoAlpha: 0,
                x: -480,
                duration: 2,
                ease: "power4.out",
            });
            gsap.from(".bg-object-1", {
                autoAlpha: 0,
                y: -880,
                duration: 2,
                ease: "power4.out",
            });
            gsap.from(".bg-object-2", {
                autoAlpha: 0,
                y: 880,
                duration: 2,
                ease: "power4.out",
            });
            gsap.from(".bg-object-3", {
                autoAlpha: 0,
                x: -880,
                duration: 2,
                ease: "power4.out",
            });
            gsap.from(".bg-object-4", {
                autoAlpha: 0,
                y: 880,
                duration: 2,
                ease: "power4.out",
            });
            gsap.from(".bg-object-5", {
                autoAlpha: 0,
                y: 880,
                duration: 2,
                ease: "power4.out",
            })
            break;
        case 1:
            gsap.to(".first-title", { visibility: "hidden" });
            gsap.to(".third-content", { visibility: "hidden" });
            gsap.to(".item-fourth", { visibility: "hidden", duration: 1, ease: "power4.out", });
            break;
        case 2:
            gsap.to(".second-container", { visibility: "hidden", duration: 1, ease: "power4.out", });
            gsap.to(".fourth-page-container", { visibility: "hidden", duration: 1, ease: "power4.out", delay: 0.5 });
            break;
        case 3:
            gsap.to(".third-content", { visibility: "hidden", duration: 1, ease: "power4.out", });
            gsap.to(".item-fourth", { visibility: "hidden", duration: 1, ease: "power4.out", });
            gsap.to(".inner-content", { visibility: "hidden", duration: 1, ease: "power4.out", });
            break;
        case 4:
            gsap.to(".fourth-page-container", { visibility: "hidden", duration: 1, ease: "power4.out", delay: .5 });
    }
};
export default onLeave;
