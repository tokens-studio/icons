import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgDesignNib = ({
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
			d='m11.783 7.605-1.27 3.81a.4.4 0 0 1-.266.258l-7.785 2.314a.4.4 0 0 1-.493-.51l2.528-7.583a.4.4 0 0 1 .227-.243l3.59-1.479a.4.4 0 0 1 .436.087l2.936 2.937a.4.4 0 0 1 .097.409M2.197 13.734 6.44 9.492'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='m11.861 7.37 1.886-1.885c.52-.52.52-1.365 0-1.886l-1.415-1.414a1.333 1.333 0 0 0-1.885 0L8.56 4.071M7.854 8.078A1 1 0 1 0 6.44 9.492a1 1 0 0 0 1.414-1.414'
		/>
	</svg>
);
export default SvgDesignNib;
