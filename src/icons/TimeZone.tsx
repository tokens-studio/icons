import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgTimeZone = ({
	title,
	titleId,
	...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width={17}
		height={17}
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
			d='M14.667 8A6.667 6.667 0 1 0 8 14.667'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M8.667 1.366s2 2.634 2 6.634M7.333 14.634s-2-2.634-2-6.634 2-6.634 2-6.634M1.753 10.333H8M1.753 5.667h12.494M12.667 11.667v1h1'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M12.667 15.333a2.667 2.667 0 1 0 0-5.333 2.667 2.667 0 0 0 0 5.333'
		/>
	</svg>
);
export default SvgTimeZone;
