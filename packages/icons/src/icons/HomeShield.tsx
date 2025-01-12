import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgHomeShield = ({
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
			d='M8.33462 6.08674L9.70042 6.44082C9.87682 6.48656 10.001 6.64632 9.99495 6.82845C9.88415 10.1547 8.00002 10.6667 8.00002 10.6667C8.00002 10.6667 6.11585 10.1547 6.0051 6.82845C5.99903 6.64632 6.12321 6.48656 6.29963 6.44082L7.66542 6.08674C7.88488 6.02984 8.11515 6.02984 8.33462 6.08674Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M1.33325 5.33336L7.82105 2.08947C7.93365 2.03317 8.06618 2.03316 8.17878 2.08947L14.6666 5.33336'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M13.3334 7.33337V12.6667C13.3334 13.4031 12.7365 14 12.0001 14H4.00008C3.2637 14 2.66675 13.4031 2.66675 12.6667V7.33337'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgHomeShield;
