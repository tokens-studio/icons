import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgCardShield = ({
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
			d='M14.667 6V4.667c0-.737-.597-1.334-1.334-1.334H2.667c-.737 0-1.334.597-1.334 1.334v6.666c0 .737.597 1.334 1.334 1.334H8M14.667 6H4m10.667 0v1.333'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='m12.662 9.417 1.703.432a.39.39 0 0 1 .297.39c-.114 3.838-2.329 4.428-2.329 4.428s-2.214-.59-2.328-4.429a.39.39 0 0 1 .297-.389l1.703-.432c.215-.055.441-.055.656 0'
		/>
	</svg>
);
export default SvgCardShield;
