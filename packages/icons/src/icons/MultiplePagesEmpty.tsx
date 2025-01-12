import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgMultiplePagesEmpty = ({
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
			d='M4.66675 1.33337H11.0001L14.0001 4.33337V12.6667'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M2 13.6667V4.33337C2 3.78109 2.44771 3.33337 3 3.33337H9.501C9.60707 3.33337 9.7088 3.37551 9.7838 3.45053L11.8829 5.54955C11.9579 5.62457 12 5.72631 12 5.83239V13.6667C12 14.219 11.5523 14.6667 11 14.6667H3C2.44771 14.6667 2 14.219 2 13.6667Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M9.33325 3.33337V5.60004C9.33325 5.82095 9.51232 6.00004 9.73325 6.00004H11.9999'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgMultiplePagesEmpty;
