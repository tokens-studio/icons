import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgArcheryMatch = ({
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
			d='M5.74066 10.5927L13.7546 2.57886M5.74066 10.5927H3.85504L1.96942 12.4783H3.85504V14.364L5.74066 12.4783V10.5927ZM13.7546 2.57886H11.8689M13.7546 2.57886V4.46447'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M10.2594 10.5927L2.24554 2.57886M10.2594 10.5927H12.145L14.0307 12.4783H12.145V14.364L10.2594 12.4783V10.5927ZM2.24554 2.57886H4.13116M2.24554 2.57886V4.46447'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgArcheryMatch;
