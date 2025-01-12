import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgSoundMin = ({
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
			d='M2.33325 9.23806V6.76193C2.33325 6.02552 2.93021 5.42857 3.66659 5.42857H5.59992C5.73038 5.42857 5.85797 5.39029 5.96689 5.31848L9.96625 2.68152C10.4095 2.38926 10.9999 2.70716 10.9999 3.23809V12.7619C10.9999 13.2928 10.4095 13.6107 9.96625 13.3185L5.96689 10.6815C5.85797 10.6097 5.73038 10.5714 5.59992 10.5714H3.66659C2.93021 10.5714 2.33325 9.97446 2.33325 9.23806Z'
			stroke='currentColor'
		/>
		<path d='M13.6667 10V6' stroke='currentColor' strokeLinecap='round' />
	</svg>
);
export default SvgSoundMin;
