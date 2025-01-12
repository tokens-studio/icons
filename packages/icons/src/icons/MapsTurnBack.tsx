import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgMapsTurnBack = ({
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
			d='M2.90974 13.1913L7.77852 8.8635C7.90486 8.75123 8.09512 8.75123 8.22146 8.8635L13.0903 13.1913C13.3437 13.4166 13.138 13.8324 12.8052 13.7676L8.06359 12.8457C8.02159 12.8375 7.97839 12.8375 7.93639 12.8457L3.19482 13.7676C2.86196 13.8324 2.6563 13.4166 2.90974 13.1913Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M3.66663 7.33329C3.66663 4.99996 3.66663 3.99996 3.66663 3.99996C3.66663 3.99996 3.66663 1.66663 5.66663 1.66663C7.99996 1.66663 7.99996 3.99996 7.99996 3.99996V6.99996'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M6.00004 5C5.08882 5.91122 4.57793 6.42211 3.66671 7.33333C2.75549 6.42211 2.24459 5.91122 1.33337 5'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgMapsTurnBack;
