import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgCss = ({
	title,
	titleId,
	...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
	<svg
		width={props.width || 16}
		height={props.height || 16}
		viewBox='0 0 24 24'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		aria-hidden={!title}
		strokeWidth={props.strokeWidth || 2 * (16 / (Number(props.width) || 16))}
		preserveAspectRatio='xMidYMid meet'
		aria-labelledby={titleId}
		{...props}
	>
		{title ? <title id={titleId}>{title}</title> : null}
		<path
			d='M8.00002 7.04626H16L8.44447 11.332H15.5556L15.1111 16.0939L12 17.0463L8.88891 16.0939L8.71113 14.1891M5.64722 3.04626H18.3528C19.2365 3.04626 19.9288 3.8064 19.8463 4.68628L18.6249 17.7147C18.5493 18.5206 17.9954 19.2015 17.2218 19.4396L12.5882 20.8653C12.2049 20.9832 11.7951 20.9832 11.4118 20.8653L6.77828 19.4396C6.00463 19.2015 5.45074 18.5206 5.37519 17.7147L4.15377 4.68628C4.07128 3.8064 4.76349 3.04626 5.64722 3.04626Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgCss;
