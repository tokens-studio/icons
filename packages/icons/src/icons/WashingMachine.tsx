import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgWashingMachine = ({
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
			d='M13.9999 2.66658L14 13.3333C14 14.0697 13.4031 14.6666 12.6667 14.6666H3.33333C2.59695 14.6666 2 14.0697 2 13.3333V2.66659C2 1.93021 2.59695 1.33325 3.33333 1.33325H12.6666C13.403 1.33325 13.9999 1.93021 13.9999 2.66658Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M12 3.33993L12.0067 3.33252'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M8 12.6667C10.2091 12.6667 12 10.8759 12 8.66675C12 6.45761 10.2091 4.66675 8 4.66675C5.79086 4.66675 4 6.45761 4 8.66675C4 10.8759 5.79086 12.6667 8 12.6667Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M8 10.6667C6.8954 10.6667 6 9.77135 6 8.66675'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgWashingMachine;
