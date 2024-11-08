import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgHardDrive = ({
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
			d='m6.667 11.34.006-.007M4 11.34l.007-.007'
		/>
		<path
			stroke='currentColor'
			strokeWidth={1.5}
			d='M1.333 8.667V13.6c0 .22.18.4.4.4h12.534a.4.4 0 0 0 .4-.4V8.667m-13.334 0h13.334m-13.334 0 1.915-6.382A.4.4 0 0 1 3.63 2h8.738a.4.4 0 0 1 .383.285l1.915 6.382'
		/>
	</svg>
);
export default SvgHardDrive;
