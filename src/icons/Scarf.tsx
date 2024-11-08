import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgScarf = ({
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
			d='M10 7.333H3.333A1.333 1.333 0 0 1 2 6V3.333C2 2.597 2.597 2 3.333 2h9.334C13.403 2 14 2.597 14 3.333V14M12 14v-1.333M10 2v12M10 4.667H2'
		/>
	</svg>
);
export default SvgScarf;
