import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgSoundOff = ({
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
			d='M12 9.33341L13.3337 8.00008M13.3337 8.00008L14.6667 6.66675M13.3337 8.00008L12 6.66675M13.3337 8.00008L14.6667 9.33341'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M1.33333 9.23806V6.76193C1.33333 6.02552 1.93028 5.42857 2.66666 5.42857H4.59999C4.73045 5.42857 4.85805 5.39029 4.96697 5.31848L8.96633 2.68152C9.40959 2.38926 9.99999 2.70716 9.99999 3.23809V12.7619C9.99999 13.2928 9.40959 13.6107 8.96633 13.3185L4.96697 10.6815C4.85805 10.6097 4.73045 10.5714 4.59999 10.5714H2.66666C1.93028 10.5714 1.33333 9.97446 1.33333 9.23806Z'
			stroke='currentColor'
		/>
	</svg>
);
export default SvgSoundOff;
