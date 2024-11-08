import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgDatabaseSettings = ({
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
			d='M2.667 4v4s0 2 4.666 2S12 8 12 8V4'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M7.333 2C12 2 12 4 12 4s0 2-4.667 2-4.666-2-4.666-2 0-2 4.666-2M7.333 14c-4.666 0-4.666-2-4.666-2V8M12.667 14a1.333 1.333 0 1 0 0-2.667 1.333 1.333 0 0 0 0 2.667'
		/>
		<path
			stroke='currentColor'
			strokeDasharray='0.3 2'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M12.667 14.667a2 2 0 1 0 0-4 2 2 0 0 0 0 4'
		/>
	</svg>
);
export default SvgDatabaseSettings;
