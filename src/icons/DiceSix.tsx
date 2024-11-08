import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgDiceSix = ({
	title,
	titleId,
	...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width={16}
		height={16}
		fill='none'
		aria-hidden={!title}
		aria-labelledby={titleId}
		{...props}
	>
		{title ? <title id={titleId}>{title}</title> : null}
		<path
			stroke='currentColor'
			strokeWidth={1.5}
			d='M2 13.6V2.4c0-.22.18-.4.4-.4h11.2c.22 0 .4.18.4.4v11.2a.4.4 0 0 1-.4.4H2.4a.4.4 0 0 1-.4-.4Z'
		/>
		<path
			fill='currentColor'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M5 5.333a.333.333 0 1 1 0-.666.333.333 0 0 1 0 .666M11 5.333a.333.333 0 1 1 0-.666.333.333 0 0 1 0 .666M5 8.333a.333.333 0 1 1 0-.666.333.333 0 0 1 0 .666M11 8.333a.333.333 0 1 1 0-.666.333.333 0 0 1 0 .666M5 11.333a.333.333 0 1 1 0-.666.333.333 0 0 1 0 .666M11 11.333a.333.333 0 1 1 0-.666.333.333 0 0 1 0 .666'
		/>
	</svg>
);
export default SvgDiceSix;
