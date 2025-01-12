import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgHashtag = ({
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
		<path d='M6.66667 2L4 14' stroke='currentColor' strokeLinecap='round' />
		<path
			d='M13.6667 10.6666H1.66666'
			stroke='currentColor'
			strokeLinecap='round'
		/>
		<path
			d='M14.6667 4.66663H2.66666'
			stroke='currentColor'
			strokeLinecap='round'
		/>
		<path d='M12 2L9.33334 14' stroke='currentColor' strokeLinecap='round' />
	</svg>
);
export default SvgHashtag;
