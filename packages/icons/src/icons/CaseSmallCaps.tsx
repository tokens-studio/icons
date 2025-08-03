import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgCaseSmallCaps = ({
	title,
	titleId,
	...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
	<svg
		width={props.width || 16}
		height={props.height || 16}
		viewBox='0 0 24 24'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		aria-hidden={!title}
		strokeWidth={props.strokeWidth || 2 * (16 / (Number(props.width) || 16))}
		preserveAspectRatio='xMidYMid meet'
		aria-labelledby={titleId}
		{...props}
	>
		{title ? <title id={titleId}>{title}</title> : null}
		<path
			d='M5 12.9999H11M3 16.9999L7.27171 7.60219C7.50308 7.09318 7.61876 6.83867 7.77907 6.75971C7.91837 6.6911 8.08163 6.6911 8.22093 6.75971C8.38124 6.83867 8.49692 7.09318 8.72829 7.60219L13 16.9999M16 13.5H18.5C19.4862 13.5 20.2857 12.7165 20.2857 11.75C20.2857 10.7835 19.4862 10 18.5 10H16V13.5ZM16 13.5H19.2143C20.2005 13.5 21 14.2835 21 15.25C21 16.2165 20.2005 17 19.2143 17H16V13.5Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgCaseSmallCaps;
