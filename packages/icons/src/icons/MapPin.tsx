import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgMapPin = ({
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
			d='M13.3333 6.66671C13.3333 9.61224 7.99996 14.6667 7.99996 14.6667C7.99996 14.6667 2.66663 9.61224 2.66663 6.66671C2.66663 3.72119 5.05444 1.33337 7.99996 1.33337C10.9455 1.33337 13.3333 3.72119 13.3333 6.66671Z'
			stroke='currentColor'
		/>
		<path
			d='M8.00004 7.33333C8.36824 7.33333 8.66671 7.03487 8.66671 6.66667C8.66671 6.29848 8.36824 6 8.00004 6C7.63184 6 7.33337 6.29848 7.33337 6.66667C7.33337 7.03487 7.63184 7.33333 8.00004 7.33333Z'
			fill='currentColor'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgMapPin;
