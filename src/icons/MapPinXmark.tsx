import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgMapPinXmark = ({
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
			d='M10.667 6.133c0 2.651-4.667 7.2-4.667 7.2s-4.667-4.549-4.667-7.2 2.09-4.8 4.667-4.8 4.667 2.15 4.667 4.8Z'
		/>
		<path
			fill='currentColor'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M6 6.667a.667.667 0 1 0 0-1.334.667.667 0 0 0 0 1.334'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='m11.253 14.08 1.414-1.413m0 0 1.414-1.415m-1.414 1.415-1.414-1.415m1.414 1.415 1.414 1.414'
		/>
	</svg>
);
export default SvgMapPinXmark;
