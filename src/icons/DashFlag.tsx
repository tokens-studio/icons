import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgDashFlag = ({
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
			d='m3.333 10 .634-6.97a.4.4 0 0 1 .398-.363h9.197a.4.4 0 0 1 .398.436l-.594 6.533a.4.4 0 0 1-.398.364zm0 0-.4 4M6 5l4.667 2.667'
		/>
	</svg>
);
export default SvgDashFlag;
