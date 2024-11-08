import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgCubeBandage = ({
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
			d='m8 14.667-5.794-3.22A.4.4 0 0 1 2 11.099V4.902a.4.4 0 0 1 .206-.35l5.6-3.11a.4.4 0 0 1 .388 0l5.6 3.11a.4.4 0 0 1 .206.35v2.431'
		/>
		<path
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={1.5}
			d='m2.352 4.862 5.454 3.03a.4.4 0 0 0 .388 0l5.473-3.04M8 8v3.667M8 1.333V6M12.438 11.495l.471.472M11.495 12.438l.472.471M12.438 9.61l-2.829 2.828c-.52.52-.52 1.365 0 1.886l.472.471c.52.52 1.365.52 1.886 0l2.828-2.828c.52-.521.52-1.365 0-1.886l-.471-.471a1.333 1.333 0 0 0-1.886 0'
		/>
	</svg>
);
export default SvgCubeBandage;
