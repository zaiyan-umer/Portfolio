import { Mail, Github, Linkedin, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Separator } from "../ui/separator";
import { motion } from 'motion/react'

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="mt-20">
            <div className="relative">
                <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" />
                <div className="absolute inset-x-0 top-0 h-px blur-sm bg-linear-to-r from-transparent via-blue-300 dark:via-blue-600 to-transparent opacity-50" />
            </div>

            <div className="max-w-7xl mx-auto py-12">
                <BrandLinks />

                <Separator className='dark:bg-gray-300/20 mb-6' />

                <div className="pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                        <p>
                            © {currentYear} Zaiyan Umer. All rights reserved.
                        </p>
                        <p>
                            Designed & built with care
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

const BrandLinks = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-8">

            {/* Brand & About */}
            <div className="col-span-1 md:col-span-3">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                    Zaiyan Umer
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                    Full-stack developer passionate about building beautiful and functional web applications.
                    Let&apos;s create something amazing together.
                </p>
                <motion.div whileHover="hover" className="inline-block">
                    <Link href="mailto:zaiyanumer6@gmail.com" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-sm font-medium flex items-center gap-1 transition-colors">
                        Get in touch
                        <motion.span className="inline-block"
                            variants={{ hover: { x: 3 } }}
                            transition={{ type: "spring", stiffness: 200 }}
                        >
                            <ArrowRight size={14} />
                        </motion.span>
                    </Link>
                </motion.div>
            </div>

            {/* Quick Links */}
            <div>
                <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">
                    Navigation
                </h4>
                <ul className="space-y-3 text-sm">
                    <li>
                        <Link href="/" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/education" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                            Education
                        </Link>
                    </li>
                    <li>
                        <Link href="/projects" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link href="https://github.com/zaiyan-umer?tab=repositories" target="_blank" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                            Repositories
                        </Link>
                    </li>
                </ul>
            </div>

            {/* Connect */}
            <div>
                <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">
                    Connect
                </h4>
                <ul className="space-y-3 text-sm">
                    <motion.li whileHover="hover" className="cursor-pointer">
                        <Link
                            href="mailto:zaiyanumer6@gmail.com"
                            className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                        >
                            <motion.span
                                className="inline-block"
                                variants={{
                                    hover: { y: -3 }
                                }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <Mail size={16} />
                            </motion.span>
                            Email
                        </Link>
                    </motion.li>
                    <motion.li whileHover="hover" className="cursor-pointer">
                        <Link
                            href="https://github.com/zaiyan-umer"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                        >
                            <motion.span className="inline-block"
                                variants={{
                                    hover: { y: -3 }
                                }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <Github size={16} />
                            </motion.span>
                            GitHub
                        </Link>
                    </motion.li>
                    <motion.li whileHover="hover" className="cursor-pointer">
                        <Link
                            href="https://www.linkedin.com/in/zaiyan-umer-935525324/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                        >
                            <motion.span className="inline-block"
                                variants={{
                                    hover: { y: -3 }
                                }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <Linkedin size={16} />
                            </motion.span>
                            LinkedIn
                        </Link>
                    </motion.li>
                </ul>
            </div>
        </div>
    )
}
