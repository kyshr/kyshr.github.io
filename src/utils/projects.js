import * as DevIcons from "react-icons/di";
import * as SimpIcons from "react-icons/si";
export const projects = [
    {
        title: "Campus Security Portal",
        description:
            "A vehicle monitoring system that uses UHF RFID which tracks the time a vehicle entered and exited the university.",
        image: "/assets/images/projects/csp.png",
        tech: ["react", "express", "node", "mongodb"],
    },
    {
        title: "Online Clinic Appointment System",
        description:
            "A system built for online booking of appoinments of a private clinic.",
        image: "/assets/images/projects/oncass.png",
        tech: ["react", "strapi", "node", "mysql"],
    },
    {
        title: "VTrace",
        description:
            "A contact tracing system project requirement for my college subject.",
        image: "/assets/images/projects/vtrace.png",
        tech: ["react", "express", "node", "mongodb"],
    },
    {
        title: "CES Attendance System",
        description:
            "Attendance system for Cagayan Educational Supply as requirement for my college subject.",
        image: "/assets/images/projects/ces-attendance.png",
        tech: ["react", "strapi", "node", "mysql"],
    },
    {
        title: "VTrace Mobile App",
        description:
            "Mobile application for scanning of QR codes in VTrace Contact Tracing System.",
        image: "/assets/images/projects/vtrace-mobile.png",
        tech: ["flutter", "express", "node", "mongodb"],
    },
    {
        title: "Coco Detect",
        description:
            "Mobile application built using Flutter and Convolutional Neural Networks for coconut maturity detection.",
        image: "/assets/images/projects/coco-detect.png",
        tech: ["flutter", "tensorflow"],
    },
    {
        title: "DIMTS Mobile App",
        description:
            "Mobile application for Document Information Management and Tracking System for RTC Davao del Norte.",
        image: "/assets/images/projects/dimts-mobile.png",
        tech: ["react"],
    },
];

export const techStack = {
    html: DevIcons.DiHtml5,
    css: DevIcons.DiCss3,
    react: DevIcons.DiReact,
    next: SimpIcons.SiNextdotjs,
    node: DevIcons.DiNodejsSmall,
    express: SimpIcons.SiExpress,
    strapi: SimpIcons.SiStrapi,
    flutter: SimpIcons.SiFlutter,
    tensorflow: SimpIcons.SiTensorflow,
    mongodb: DevIcons.DiMongodb,
    mysql: DevIcons.DiMysql,
    git: SimpIcons.SiGit,
};
