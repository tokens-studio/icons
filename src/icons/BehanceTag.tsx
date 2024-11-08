import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgBehanceTag = ({
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
			d='M14 5.333v5.334A3.333 3.333 0 0 1 10.667 14H5.333A3.333 3.333 0 0 1 2 10.667V5.333A3.333 3.333 0 0 1 5.333 2h5.334A3.333 3.333 0 0 1 14 5.333'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M6.066 7.884c1.69 0 1.69 2.783 0 2.783H4V7.884m2.066 0H4m2.066 0c1.69 0 1.69-2.55 0-2.55H4v2.55M10.333 7.333c-.92 0-1.666.747-1.666 1.667H12c0-.92-.746-1.667-1.667-1.667M8.667 9c0 .92.746 1.667 1.666 1.667.619 0 .994-.215 1.209-.413M11.333 5.667h-2'
		/>
	</svg>
);
export default SvgBehanceTag;
