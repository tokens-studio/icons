import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgCloud = ({
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
			d='M8.99996 2.66669C4.99996 2.66669 4.99996 5.33335 4.99996 6.66669C3.88885 6.66669 1.66663 7.33335 1.66663 10C1.66663 12.6667 3.88885 13.3334 4.99996 13.3334H13C14.1111 13.3334 16.3333 12.6667 16.3333 10C16.3333 7.33335 14.1111 6.66669 13 6.66669C13 5.33335 13 2.66669 8.99996 2.66669Z'
			stroke='currentColor'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgCloud;
