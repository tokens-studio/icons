import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgCardShield = ({
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
			d='M14.6667 6.00001V4.66668C14.6667 3.9303 14.0698 3.33334 13.3334 3.33334H2.66671C1.93033 3.33334 1.33337 3.9303 1.33337 4.66668V11.3333C1.33337 12.0697 1.93033 12.6667 2.66671 12.6667H8.00004M14.6667 6.00001H4.00004M14.6667 6.00001V7.33334'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M12.6615 9.41667L14.3651 9.84934C14.5424 9.8944 14.6675 10.0555 14.662 10.2384C14.5476 14.0773 12.3333 14.6667 12.3333 14.6667C12.3333 14.6667 10.119 14.0773 10.0046 10.2384C9.9991 10.0555 10.1242 9.8944 10.3015 9.84934L12.0051 9.41667C12.2205 9.362 12.4461 9.362 12.6615 9.41667Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgCardShield;
