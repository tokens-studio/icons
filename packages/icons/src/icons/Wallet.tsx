import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgWallet = ({
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
			d='M12.6667 13.3334H3.33333C2.59695 13.3334 2 12.7365 2 12.0001V6.00008C2 5.2637 2.59695 4.66675 3.33333 4.66675H12.6667C13.4031 4.66675 14 5.2637 14 6.00008V12.0001C14 12.7365 13.4031 13.3334 12.6667 13.3334Z'
			stroke='currentColor'
		/>
		<path
			d='M11.0001 9.33341C10.816 9.33341 10.6667 9.18415 10.6667 9.00008C10.6667 8.81601 10.816 8.66675 11.0001 8.66675C11.1841 8.66675 11.3334 8.81601 11.3334 9.00008C11.3334 9.18415 11.1841 9.33341 11.0001 9.33341Z'
			fill='currentColor'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M12 4.66661V3.73543C12 2.85939 11.1696 2.22139 10.3231 2.44711L2.98978 4.40267C2.40611 4.55832 2 5.08692 2 5.69099V5.99995'
			stroke='currentColor'
		/>
	</svg>
);
export default SvgWallet;
