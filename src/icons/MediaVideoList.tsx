import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgMediaVideoList = ({
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
			d='M14 5.067V13.6a.4.4 0 0 1-.4.4H5.067a.4.4 0 0 1-.4-.4V5.067c0-.221.179-.4.4-.4H13.6c.221 0 .4.179.4.4'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='M12 2.667H3.067a.4.4 0 0 0-.4.4V12M8.606 7.697A.4.4 0 0 0 8 8.04v2.587a.4.4 0 0 0 .606.343l2.156-1.294a.4.4 0 0 0 0-.686z'
		/>
	</svg>
);
export default SvgMediaVideoList;
