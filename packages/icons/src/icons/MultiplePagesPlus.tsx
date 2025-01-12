import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgMultiplePagesPlus = ({
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
			d='M1.32812 12.6666H3.32813M3.32813 12.6666H5.32813M3.32813 12.6666V10.6666M3.32813 12.6666V14.6666'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M4.66667 1.33337H11L14 4.33337V12.6667'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M7.33333 14.6667H11C11.5523 14.6667 12 14.219 12 13.6667V5.83239C12 5.72631 11.9579 5.62457 11.8829 5.54955L9.7838 3.45053C9.7088 3.37551 9.60707 3.33337 9.501 3.33337H3C2.44771 3.33337 2 3.78109 2 4.33337V8.66671'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M9.33333 3.33337V5.60004C9.33333 5.82095 9.5124 6.00004 9.73333 6.00004H12'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgMultiplePagesPlus;
