import React from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { blogs } from "../constants";
import { styles } from "../styles";

const BlogCard = ({ title, date, image, description, link }) => {
    return (
        <div
            className="bg-white rounded-lg shadow-lg overflow-hidden w-full"
            style={{
                background: "#050816",
                border: "1px solid #fff",
                display: "flex",
            }}
        >
            <div className="w-50 p-4">
                <img className="w-42 h-48 mt-4" src={image} alt={title} />
            </div>
            <div className="p-8">
                <h2 className="font-bold text-xl mb-2 ">{title}</h2>
                <p className="text-gray-700 text-base">{description}</p>
                <div className="flex justify-between mt-4">
                    <p className="text-gray-600 text-sm">{date}</p>
                </div>
                <div className="mt-4">
                    <a href={link} target="_blank">
                        Read More &rarr;
                    </a>
                </div>
            </div>
        </div>
    );
};

const Blogs = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <h2 className={`${styles.sectionHeadText}`}>Blogs.</h2>
            </motion.div>

            <div className="w-full flex">
                <motion.p
                    variants={fadeIn("", "", 0.1, 1)}
                    className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
                >
                    Following blogs showcases my skills and experience in technology. My
                    one Blog is also published on GeeksForGeeks.
                </motion.p>
            </div>

            <div className="mt-20 flex flex-wrap gap-7">
                {blogs.map((blog, index) => (
                    <BlogCard key={`blog-${index}`} index={index} {...blog} />
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(Blogs, "Blogs");
