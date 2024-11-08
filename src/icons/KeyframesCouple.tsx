import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgKeyframesCouple = ({
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
			d='m10.546 8.886-3.55 3.993a1.333 1.333 0 0 1-1.993 0L1.454 8.886a1.333 1.333 0 0 1 0-1.772l3.55-3.993a1.333 1.333 0 0 1 1.993 0l3.549 3.993c.449.505.449 1.267 0 1.772'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='m8 4.25 1.003-1.129a1.333 1.333 0 0 1 1.993 0l3.55 3.993c.449.505.449 1.267 0 1.772l-3.55 3.993a1.333 1.333 0 0 1-1.993 0L8 11.75'
		/>
	</svg>
);
export default SvgKeyframesCouple;
