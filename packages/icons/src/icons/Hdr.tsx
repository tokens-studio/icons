import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgHdr = ({
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
			d='M1 5.66663V7.99996M1 7.99996V10.3333M1 7.99996H4M4 7.99996V5.66663M4 7.99996V10.3333'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M11.6667 10.3333V8.46663M11.6667 8.46663V5.66663H13.5714C14.0476 5.66663 15 5.66663 15 7.06663C15 8.46663 14.0476 8.46663 13.5714 8.46663M11.6667 8.46663C11.9842 8.46663 12.8096 8.46663 13.5714 8.46663M13.5714 8.46663L15 10.3333'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M6.33331 7.99996V5.66663C7.99998 5.66663 9.66665 5.66663 9.66665 7.99996C9.66665 10.3333 7.99998 10.3333 6.33331 10.3333V7.99996Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgHdr;
