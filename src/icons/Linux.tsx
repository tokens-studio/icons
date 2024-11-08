import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgLinux = ({
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
			d='M1.667 13.333C2.333 13.333 3 12.8 3 12V7.333C3 5 5.067 2.667 8 2.667M14.333 13.333C13.667 13.333 13 12.8 13 12V7.333C13 5 10.933 2.667 8 2.667'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M8 12.667c1.84 0 3.333-.746 3.333-1.667 0-.92-1.492-1.667-3.333-1.667S4.667 10.08 4.667 11 6.159 12.667 8 12.667'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M5.167 10c-.309-.424-.5-1.014-.5-1.667C4.667 7.045 5.413 6 6.333 6S8 7.045 8 8.333c0 .304-.041.594-.117.86M10.833 10c.309-.424.5-1.014.5-1.667C11.333 7.045 10.587 6 9.667 6S8 7.045 8 8.333c0 .304.041.594.117.86M6.333 8v1.333M9.667 8v1.333'
		/>
	</svg>
);
export default SvgLinux;
