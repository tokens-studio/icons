import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgSoundLow = ({
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
			d='M13 5C13 5 14 6 14 7.66667C14 9.33333 13 10.3333 13 10.3333'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M1.33325 9.23806V6.76193C1.33325 6.02552 1.93021 5.42857 2.66659 5.42857H4.59992C4.73038 5.42857 4.85797 5.39029 4.96689 5.31848L8.96625 2.68152C9.40952 2.38926 9.99992 2.70716 9.99992 3.23809V12.7619C9.99992 13.2928 9.40952 13.6107 8.96625 13.3185L4.96689 10.6815C4.85797 10.6097 4.73038 10.5714 4.59992 10.5714H2.66659C1.93021 10.5714 1.33325 9.97446 1.33325 9.23806Z'
			stroke='currentColor'
		/>
	</svg>
);
export default SvgSoundLow;
