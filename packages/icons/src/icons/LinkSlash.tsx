import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgLinkSlash = ({
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
			d='M4.76195 11.3302C4.50008 11.3302 4.24508 11.3017 4.00004 11.2477C2.47319 10.911 1.33337 9.58407 1.33337 7.99847C1.33337 6.18934 2.81719 4.71699 4.66671 4.66797'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M8.87897 6.42286C8.52391 5.82423 7.98251 5.31318 7.33337 4.99927'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M11.238 4.66663C11.4999 4.66663 11.7549 4.69515 12 4.74919C13.5268 5.08586 14.6666 6.41277 14.6666 7.99837C14.6666 9.83843 13.1316 11.3301 11.238 11.3301C11.054 11.3301 10.3184 11.3301 10.0952 11.3301C8.21129 11.3301 6.66663 9.6595 6.66663 7.99837C6.66663 7.99837 6.66663 7.3333 6.99996 6.99997'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M2 2L14 14'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgLinkSlash;
