import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgLogNoAccess = ({
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
			d='M11.904 6.133a2.667 2.667 0 0 0-3.809 3.733m3.81-3.733a2.667 2.667 0 1 1-3.809 3.733m3.808-3.733L8.096 9.867'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M12.667 4v-.667c0-.736-.597-1.333-1.334-1.333H4.667c-.737 0-1.334.597-1.334 1.333v9.334c0 .736.597 1.333 1.334 1.333h6.666c.737 0 1.334-.597 1.334-1.333V12'
		/>
	</svg>
);
export default SvgLogNoAccess;
