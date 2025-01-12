import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgShirt = ({
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
			d='M4 2.66663H6C6 2.66663 6 4.66663 8 4.66663C10 4.66663 10 2.66663 10 2.66663H12M12 7.33329V12.9333C12 13.1542 11.8209 13.3333 11.6 13.3333H4.4C4.17909 13.3333 4 13.1542 4 12.9333V7.33329'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M12 2.66663L14.9619 3.85141C15.1671 3.93345 15.2668 4.16624 15.1848 4.37135L14.1006 7.08183C14.0398 7.23369 13.8927 7.33329 13.7292 7.33329H12'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M3.99987 2.66663L1.03793 3.85141C0.832813 3.93345 0.733047 4.16624 0.815093 4.37135L1.89929 7.08183C1.96004 7.23369 2.10712 7.33329 2.27069 7.33329H3.99987'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgShirt;
