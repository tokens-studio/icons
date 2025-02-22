import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgPotion = ({
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
			d='M6.66669 2.66663L9.33336 2.66663V4.37847C9.33336 4.55065 9.44729 4.70347 9.60836 4.76437C15.2912 6.91385 13.9378 14.6667 10 14.6667H6.00003C2.06233 14.6667 0.708875 6.91385 6.39172 4.76437C6.55276 4.70346 6.66669 4.55064 6.66669 4.37847V2.66663Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path d='M4 6.66663H12' stroke='currentColor' />
		<path d='M6 1.33337H10' stroke='currentColor' strokeLinecap='round' />
		<path
			d='M7.77782 8.66663L6.66669 10.6666H9.33335L8.22222 12.6666'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgPotion;
