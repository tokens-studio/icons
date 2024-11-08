import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgTwitter = ({
	title,
	titleId,
	...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width={18}
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
			d='M16.333 2.007s-1.345.794-2.093 1.02a2.987 2.987 0 0 0-5.24 2v.666a7.1 7.1 0 0 1-6-3.02s-2.667 6 3.333 8.667a7.76 7.76 0 0 1-4.666 1.333c6 3.334 13.333 0 13.333-7.666q0-.28-.053-.554c.68-.67 1.386-2.446 1.386-2.446'
		/>
	</svg>
);
export default SvgTwitter;
