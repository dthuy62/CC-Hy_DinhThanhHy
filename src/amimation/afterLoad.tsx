import {gsap} from "gsap";

const afterLoad = (origin: any, destination: any, direction: any) => {

    switch (destination.index) {
        case 1:
            gsap.from(".second-container", {
                autoAlpha: 0,
            })
            gsap.from(".second-full-text", {
                autoAlpha: 0,
                x: -880,
                duration: 1.5,
                ease: "power4.out",
                delay: .1
            });
            break;
        case 2:
            gsap.from(".third-content", {
                autoAlpha: 0,
            });
            gsap.from(".item-first", {
                autoAlpha: 0,
                y: 420,
                duration: 0.7,
                ease: "power4.out",
            });
            gsap.from(".item-second", {
                autoAlpha: 0,
                y: -420,
                duration: 0.7,
                ease: "power4.out",
                delay: 0.3,
            });
            gsap.from(".item-third", {
                autoAlpha: 0,
                y: 420,
                duration: 0.7,
                ease: "power4.out",
                delay: 0.6,
            });
            gsap.from(".item-fourth", {
                autoAlpha: 0,
                y: -420,
                duration: 0.7,
                ease: "power4.out",
                delay: 0.9,
            });
            break;
        case 3:
            gsap.from(".fourth-page-container", {
                autoAlpha: 0,
            });
            gsap.from(".fourth-title", {
                autoAlpha: 0,
                y: -220,
                duration: 1,
                ease: "power4.out",
            });
            gsap.from(".list-history", {
                autoAlpha: 0,
                x: -420,
                duration: 1,
                ease: "power4.out",
                delay: 0.3,
            });
            break;
        case 4:
            gsap.from(".inner-content", {
                autoAlpha: 0,
            });
            gsap.from(".big-title", {
                autoAlpha: 0,
                x: 420,
                stagger: 0.1,
                duration: 1,
                ease: "power4.out",
            });
            gsap.from(".info-wrapper", {
                autoAlpha: 0,
                y: -220,
                stagger: 0.1,
                duration: 1,
                ease: "power4.out",
                delay: .2,
            });
            break;
    }

};
export default afterLoad;
