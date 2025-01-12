import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgIndustry = ({
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
			d='M12 6.66671C12 6.00004 11.3333 5.33337 9.99998 5.33337C9.79851 5.33337 9.56998 5.33337 9.33345 5.33337C8.22891 5.33337 7.33331 4.43794 7.33331 3.33337V1.33337'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M12 14H14V8H12V11M12 14V11M12 14H2V11.3333L4.33333 9.33333L7 11L9.66667 9.33333L12 11'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M14 6.66671C14 2.66671 11.3333 2.66671 11.3333 2.66671C11.3333 2.66671 14 3.00004 14 1.33337'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgIndustry;
