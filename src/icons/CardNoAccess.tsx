import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgCardNoAccess = ({
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
			d='M14.667 6V4.667c0-.737-.597-1.334-1.334-1.334H2.667c-.737 0-1.334.597-1.334 1.334v6.666c0 .737.597 1.334 1.334 1.334H8M14.667 6H4m10.667 0v2.667M14 10.7a2.333 2.333 0 0 0-3.333 3.267M14 10.7a2.333 2.333 0 0 1-3.333 3.267M14 10.7l-3.333 3.267'
		/>
	</svg>
);
export default SvgCardNoAccess;
