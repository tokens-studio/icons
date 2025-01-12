import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgGasTankDroplet = ({
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
			fillRule='evenodd'
			clipRule='evenodd'
			d='M2 5.04139C2 4.09836 2.76439 3.33347 3.70879 3.33347C4.22959 3.33347 4.6664 3.33347 4.6664 3.33347V2H8V3.33347H9.3344C11.9108 3.33347 14 5.42219 14 7.99847C14 9.52607 14 11.1283 14 12.2933C14 12.7456 13.82 13.1809 13.4996 13.5009C13.1792 13.8209 12.7448 14.0012 12.2912 14.0012C10.01 14.0012 5.98999 14.0012 3.70879 14.0012C3.25519 14.0012 2.82081 13.8209 2.50041 13.5009C2.18001 13.1809 2 12.7456 2 12.2933C2 10.3027 2 7.032 2 5.04139Z'
			stroke='currentColor'
			strokeMiterlimit={1.5}
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			fillRule='evenodd'
			clipRule='evenodd'
			d='M7.9994 6C7.9994 6 9.9994 7.9956 9.9996 9.25767C9.9998 10.3615 9.10347 11.2577 7.9998 11.2577C6.89613 11.2577 6.008 10.3615 6 9.25767C6.00653 7.99493 7.9994 6 7.9994 6Z'
			stroke='currentColor'
			strokeMiterlimit={1.5}
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgGasTankDroplet;
