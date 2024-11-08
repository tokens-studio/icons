import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgFolderWarning = ({
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
			d='M12 2v2.667M12 7.34l.007-.007M14.667 4.667v8.266a.4.4 0 0 1-.4.4H1.733a.4.4 0 0 1-.4-.4v-5.6'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M9.333 4.667h-.852a.4.4 0 0 1-.26-.097L6.112 2.763a.4.4 0 0 0-.26-.096H1.733a.4.4 0 0 0-.4.4v4.266h8'
		/>
	</svg>
);
export default SvgFolderWarning;
