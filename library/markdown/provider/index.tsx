/// Vendor Modules
import Image from 'next/image';
import fumadocs from 'fumadocs-ui/mdx';
import { MDXComponents } from 'mdx/types';

/// Website Modules
import { Anchor } from '@rroessler/components';

/** Gets the defaulted markdown components provider. */
export function Provider(components?: MDXComponents): MDXComponents {
    // prepare the builting components now
    const builtins: MDXComponents = {
        a: Anchor,
        img: (props) => {
            const image = <Image {...(props as any)} />; // prepare the underlying image instance
            return <span className="flex justify-center items-center w-full" children={image} />;
        },
    };

    // and merge all the outgoing components now
    return { ...fumadocs, ...builtins, ...components };
}
