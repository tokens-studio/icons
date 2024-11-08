import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgSecureWindow = ({
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
			strokeWidth={1.5}
			d='M8.667 14h-6a1.333 1.333 0 0 1-1.334-1.333V3.333C1.333 2.597 1.93 2 2.667 2h10.666c.737 0 1.334.597 1.334 1.333V8'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M1.333 4.667h13.334M3.333 3.34l.007-.007M5.333 3.34l.007-.007M7.333 3.34l.007-.007M12.662 9.417l1.703.432a.39.39 0 0 1 .297.39c-.114 3.838-2.329 4.428-2.329 4.428s-2.214-.59-2.328-4.429a.39.39 0 0 1 .297-.389l1.703-.432c.215-.055.441-.055.656 0'
		/>
	</svg>
);
export default SvgSecureWindow;
