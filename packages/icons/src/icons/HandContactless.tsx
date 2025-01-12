import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgHandContactless = ({
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
			d='M1.33333 7.33337L3.20441 5.22841C3.71046 4.6591 4.43581 4.33337 5.19751 4.33337H5.33333'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M1.33333 13.0002L5 13L7.66666 11.0002C7.66666 11.0002 8.20606 10.6352 9 10C10.6667 8.66677 9 6.55565 7.33333 7.66643C5.97606 8.57097 4.66666 9.3335 4.66666 9.3335'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M5.33333 9.00004V4.66671C5.33333 3.93033 5.93028 3.33337 6.66666 3.33337H13.3333C14.0697 3.33337 14.6667 3.93033 14.6667 4.66671V8.66671C14.6667 9.40311 14.0697 10 13.3333 10H9'
			stroke='currentColor'
		/>
		<path
			d='M12.1667 8.00004C12.5 7.00004 12.5 6.33337 12.1667 5.33337'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M10.6667 6C10.8177 6.33333 10.8177 7 10.6667 7.33333'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgHandContactless;
