import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgLullaby = ({
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
			d='M2 7.67107C2 11.1665 4.83356 14 8.32893 14C10.8139 14 12.9644 12.5679 14 10.4839C8.32893 10.4839 5.51607 7.67107 5.51607 2C3.43214 3.03563 2 5.1861 2 7.67107Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M12.6667 6.33333C12.6667 6.8856 12.2189 7.33333 11.6667 7.33333C11.1144 7.33333 10.6667 6.8856 10.6667 6.33333C10.6667 5.78105 11.1144 5.33333 11.6667 5.33333C12.2189 5.33333 12.6667 5.78105 12.6667 6.33333ZM12.6667 6.33333V2.4C12.6667 2.17909 12.8457 2 13.0667 2H14'
			stroke='currentColor'
			strokeLinecap='round'
		/>
	</svg>
);
export default SvgLullaby;
