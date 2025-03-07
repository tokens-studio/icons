import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgOilIndustry = ({
	title,
	titleId,
	...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
	<svg
		width={props.width || 16}
		height={props.height || 16}
		viewBox='0 0 16 16'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		aria-hidden={!title}
		strokeWidth={props.strokeWidth || 1.5 * (16 / (Number(props.width) || 16))}
		preserveAspectRatio='xMidYMid meet'
		aria-labelledby={titleId}
		{...props}
	>
		{title ? <title id={titleId}>{title}</title> : null}
		<path
			d='M11.9999 6.66671C11.9999 6.00004 11.3333 5.33337 9.99992 5.33337C9.79845 5.33337 9.56992 5.33337 9.33339 5.33337C8.22885 5.33337 7.33325 4.43794 7.33325 3.33337V1.33337'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M6 7.2C6 6.02179 4 4 4 4C4 4 2 6.02179 2 7.2C2 8.3782 2.89543 9.33333 4 9.33333C5.10457 9.33333 6 8.3782 6 7.2Z'
			stroke='currentColor'
		/>
		<path
			d='M12 14H14V8H12V11M12 14V11M12 14H7V11L9.66667 9.33333L12 11'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M13.9999 6.66671C13.9999 2.66671 11.3333 2.66671 11.3333 2.66671C11.3333 2.66671 13.9999 3.00004 13.9999 1.33337'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgOilIndustry;
