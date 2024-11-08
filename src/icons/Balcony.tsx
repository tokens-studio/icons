import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgBalcony = ({
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
			d='M2.667 8.667V14M5.333 8.667V14M10.667 8.667V14M8 8.667V14M13.333 8.667V14M1.333 14h13.334M1.333 8.667h13.334M12 6.667V2.4a.4.4 0 0 0-.4-.4H4.4a.4.4 0 0 0-.4.4v4.267'
		/>
	</svg>
);
export default SvgBalcony;
