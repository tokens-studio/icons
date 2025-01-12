import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgCopy = ({
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
			d='M12.9333 13.3333H6.4C6.17909 13.3333 6 13.1543 6 12.9333V6.4C6 6.17909 6.17909 6 6.4 6H12.9333C13.1543 6 13.3333 6.17909 13.3333 6.4V12.9333C13.3333 13.1543 13.1543 13.3333 12.9333 13.3333Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M9.99996 6.00002V3.06669C9.99996 2.84577 9.82089 2.66669 9.59996 2.66669H3.06663C2.84571 2.66669 2.66663 2.84577 2.66663 3.06669V9.60002C2.66663 9.82095 2.84571 10 3.06663 10H5.99996'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgCopy;
