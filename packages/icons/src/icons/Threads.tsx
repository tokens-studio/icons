import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgThreads = ({
	title,
	titleId,
	...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
	<svg
		width={props.width || 16}
		height={props.height || 16}
		viewBox='0 0 16 16'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		aria-hidden={!title}
		strokeWidth={props.strokeWidth || 1.5 * (16 / (Number(props.width) || 16))}
		preserveAspectRatio='xMidYMid meet'
		aria-labelledby={titleId}
		{...props}
	>
		{title ? <title id={titleId}>{title}</title> : null}
		<path
			d='M6.60938 5.4186C8.27898 4.07617 10.6827 4.79165 10.9666 6.99992C11.2678 9.34258 10.6666 11.1999 8.33331 11.1999C6.16663 11.1999 6.23329 9.33325 6.23329 9.33325C6.23329 7.33325 9.66665 7.06659 11.6666 8.06659C15.3333 10.3999 12.6666 14.6666 8.66665 14.6666C5.35292 14.6666 2.66663 12.9999 2.66663 7.99992C2.66663 2.99992 5.35292 1.33325 8.66665 1.33325C11.0052 1.33325 13.1143 2.53789 13.8898 4.94715'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgThreads;
