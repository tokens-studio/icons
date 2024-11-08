import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgBubbleXmark = ({
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
			d='M8.667 1.366a6.667 6.667 0 0 0-6.441 9.967l-.56 3 3-.558a6.667 6.667 0 0 0 9.967-6.441M11.414 4.91l1.414-1.415m0 0 1.415-1.414m-1.415 1.414-1.414-1.414m1.414 1.414 1.415 1.414'
		/>
	</svg>
);
export default SvgBubbleXmark;
