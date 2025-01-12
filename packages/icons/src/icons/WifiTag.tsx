import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgWifiTag = ({
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
			d='M1.33331 10V6C1.33331 3.79086 3.12417 2 5.33331 2H10.6666C12.8758 2 14.6666 3.79086 14.6666 6V10C14.6666 12.2091 12.8758 14 10.6666 14H5.33331C3.12417 14 1.33331 12.2091 1.33331 10Z'
			stroke='currentColor'
		/>
		<path
			d='M8 9.83992L8.00667 9.83252'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M4.66669 7.49994C6.33335 5.50001 9.66669 5.50001 11.3334 7.50001'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M6 8.83325C7 7.49992 9 7.49992 10 8.83325'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgWifiTag;
