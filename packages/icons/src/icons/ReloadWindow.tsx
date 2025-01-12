import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgReloadWindow = ({
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
			d='M7.33334 14H2.66668C1.9303 14 1.33334 13.4031 1.33334 12.6667V3.33333C1.33334 2.59695 1.9303 2 2.66668 2H13.3333C14.0697 2 14.6667 2.59695 14.6667 3.33333V8'
			stroke='currentColor'
			strokeLinecap='round'
		/>
		<path
			d='M1.33334 4.66663H14.6667'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M3.33334 3.34005L3.34001 3.33264'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M5.33334 3.34005L5.34001 3.33264'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M7.33334 3.34005L7.34001 3.33264'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M14.4443 11.1112C14.0318 10.0647 13.0897 9.33337 11.9935 9.33337C10.8213 9.33337 9.8252 10.1697 9.4646 11.3334'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M13.3301 11.1815H14.2668C14.4877 11.1815 14.6668 11.0024 14.6668 10.7815V9.69995'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M9.55579 12.8888C9.96832 13.9353 10.9105 14.6666 12.0067 14.6666C13.1789 14.6666 14.1749 13.8303 14.5355 12.6666'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M10.67 12.8185H9.7334C9.51247 12.8185 9.3334 12.9976 9.3334 13.2185V14.3'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgReloadWindow;
