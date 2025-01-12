import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgHeartArrowDown = ({
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
			d='M3.65172 9.9222L2.43588 8.66193C0.965872 7.13813 0.965872 4.67815 2.43588 3.15438C3.92033 1.61563 6.33867 1.61563 7.82311 3.15438L7.9999 3.33761L8.17657 3.15449C8.88831 2.41633 9.85764 2 10.8702 2C11.8828 2 12.8521 2.41629 13.5639 3.15438C14.2709 3.88697 14.6667 4.87718 14.6667 5.90815C14.6667 6.93913 14.2708 7.9294 13.5639 8.66193C13.1618 9.07867 12.7628 9.4998 12.3644 9.9222'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M8 14.3334V7.33337'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M10.6667 11.6666C9.62531 12.708 9.04144 13.2919 8.00004 14.3333C6.95864 13.2919 6.37477 12.708 5.33337 11.6666'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgHeartArrowDown;
