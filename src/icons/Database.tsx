import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgDatabase = ({
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
			d='M3.333 8v4s0 2 4.667 2 4.667-2 4.667-2V8'
		/>
		<path
			stroke='currentColor'
			strokeWidth={1.5}
			d='M3.333 4v4s0 2 4.667 2 4.667-2 4.667-2V4'
		/>
		<path
			stroke='currentColor'
			strokeWidth={1.5}
			d='M8 2c4.667 0 4.667 2 4.667 2s0 2-4.667 2-4.667-2-4.667-2 0-2 4.667-2Z'
		/>
	</svg>
);
export default SvgDatabase;
