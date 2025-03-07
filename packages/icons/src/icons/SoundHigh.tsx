import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgSoundHigh = ({
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
			d='M1.66675 9.23806V6.76193C1.66675 6.02552 2.2637 5.42857 3.00008 5.42857H4.93341C5.06387 5.42857 5.19147 5.39029 5.30039 5.31848L9.29975 2.68152C9.74301 2.38926 10.3334 2.70716 10.3334 3.23809V12.7619C10.3334 13.2928 9.74301 13.6107 9.29975 13.3185L5.30039 10.6815C5.19147 10.6097 5.06387 10.5714 4.93341 10.5714H3.00008C2.2637 10.5714 1.66675 9.97446 1.66675 9.23806Z'
			stroke='currentColor'
		/>
		<path
			d='M12.6667 5C12.6667 5 13.6667 6 13.6667 7.66667C13.6667 9.33333 12.6667 10.3333 12.6667 10.3333'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M14.6667 3C14.6667 3 16.3334 4.66667 16.3334 7.66667C16.3334 10.6667 14.6667 12.3333 14.6667 12.3333'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgSoundHigh;
