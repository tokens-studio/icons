import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgAccessibilitySign = ({
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
			d='M7.66667 8.33333L12.3333 8L11.3333 12.3333'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M7.66667 8.33333L10.6667 4.99999L8.33334 3.33333L6.66667 4.99999'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M12.3333 4.33334C11.5969 4.33334 11 3.73638 11 3.00001C11 2.26363 11.5969 1.66667 12.3333 1.66667C13.0697 1.66667 13.6667 2.26363 13.6667 3.00001C13.6667 3.73638 13.0697 4.33334 12.3333 4.33334Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M3.66633 8.33334C4.2235 7.91474 4.91611 7.66667 5.66666 7.66667C7.50759 7.66667 8.99999 9.15907 8.99999 11C8.99999 11.4741 8.90106 11.925 8.72266 12.3333M2.48593 10C2.38678 10.3157 2.33333 10.6516 2.33333 11C2.33333 12.8409 3.82571 14.3333 5.66666 14.3333C6.27381 14.3333 6.84306 14.171 7.33333 13.8874'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgAccessibilitySign;
