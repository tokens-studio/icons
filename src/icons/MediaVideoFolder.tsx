import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgMediaVideoFolder = ({
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
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M14.667 8.4v5.2a.4.4 0 0 1-.4.4h-5.2a.4.4 0 0 1-.4-.4V8.4c0-.22.179-.4.4-.4h5.2a.4.4 0 0 1 .4.4'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M11.279 9.716a.4.4 0 0 0-.612.339v1.89a.4.4 0 0 0 .612.34l1.512-.946a.4.4 0 0 0 0-.678zM1.333 6.667V2.4c0-.22.18-.4.4-.4h4.119a.4.4 0 0 1 .26.096l2.109 1.808A.4.4 0 0 0 8.48 4h5.786c.22 0 .4.18.4.4V6m-13.334.667v5.6c0 .22.18.4.4.4h4.934m-5.334-6h5.334'
		/>
	</svg>
);
export default SvgMediaVideoFolder;
