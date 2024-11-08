import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgDialpad = ({
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
			fill='currentColor'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M3.667 3.333a.333.333 0 1 1 0-.666.333.333 0 0 1 0 .666M3.667 6.667a.333.333 0 1 1 0-.667.333.333 0 0 1 0 .667M3.667 10a.333.333 0 1 1 0-.667.333.333 0 0 1 0 .667M8 3.333a.333.333 0 1 1 0-.666.333.333 0 0 1 0 .666M8 6.667A.333.333 0 1 1 8 6a.333.333 0 0 1 0 .667M8 10a.333.333 0 1 1 0-.667A.333.333 0 0 1 8 10M8 13.333a.333.333 0 1 1 0-.666.333.333 0 0 1 0 .666M12.333 3.333a.333.333 0 1 1 0-.666.333.333 0 0 1 0 .666M12.333 6.667a.333.333 0 1 1 0-.667.333.333 0 0 1 0 .667M12.333 10a.333.333 0 1 1 0-.667.333.333 0 0 1 0 .667'
		/>
	</svg>
);
export default SvgDialpad;
