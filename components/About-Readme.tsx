import { useEffect, useState } from 'react'
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { cn } from '@/lib/utils';

const About = ({className} : {className?: string}) => {
    const [content, setContent] = useState("");
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(
                    "https://raw.githubusercontent.com/zaiyan-umer/zaiyan-umer/main/README.md"
                );
                if (!res.ok) throw new Error("Failed to fetch README");
                const text = await res.text();
                setContent(text);
            } catch (err) {
                console.error(err);
            }
        };
        fetchData();
    }, []);

    return (
        <>
            <article id='about' className={cn('prose dark:prose-invert max-w-none', className)}>
                <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    rehypePlugins={[rehypeRaw]}
                    components={{
                        img: ({ node, ...props }) => (
                            <img
                                {...props}
                                style={{
                                    ...props.style,
                                    width: props.width || 'auto',
                                    height: props.height || 'auto',
                                    maxWidth: '100%',
                                    margin: '1rem auto',
                                    display: 'inline'
                                }}
                            />
                        ),
                    }}
                >
                    {content}
                </ReactMarkdown>
            </article>
        </>
    )
}

export default About
