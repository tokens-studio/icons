import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgIndustry = ({
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
			d='M12 6.667c0-.667-.667-1.334-2-1.334h-.667a2 2 0 0 1-2-2v-2M12 14h2V8h-2v3m0 3v-3m0 3H2v-2.667l2.333-2L7 11l2.667-1.667L12 11M14 6.667c0-4-2.667-4-2.667-4S14 3 14 1.333'
		/>
	</svg>
);
export default SvgIndustry;
