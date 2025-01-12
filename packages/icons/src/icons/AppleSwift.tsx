import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgAppleSwift = ({
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
			d='M13.638 9.72613C13.9355 8.76847 14.6054 5.22679 9.68408 2.06724C9.51075 1.95633 9.28321 1.98547 9.14575 2.13362C9.00741 2.28176 9.00161 2.50519 9.13161 2.66061C9.15161 2.68409 10.9648 4.89327 10.3199 7.41653C9.20495 6.64913 4.77101 3.13499 4.77101 3.13499L7.33334 7.33333L2.57448 4.26671C2.57448 4.26671 5.93844 8.39687 7.99748 9.95033C7.00088 10.3081 4.83517 10.687 1.97534 8.90933C1.81369 8.80813 1.6012 8.82753 1.46121 8.95867C1.32288 9.0874 1.29288 9.293 1.39038 9.45413C1.48621 9.6128 3.77857 13.3333 8.62581 13.3333C9.95568 13.3333 10.7331 12.9545 11.3581 12.6509C11.7423 12.4647 12.0455 12.3166 12.3764 12.3166C13.2005 12.3166 13.7413 13.135 13.7463 13.1423C13.8229 13.2613 13.9571 13.3333 14.1005 13.3333C14.1113 13.3333 14.1229 13.3325 14.1346 13.3317C14.2904 13.3196 14.4254 13.2249 14.4854 13.0848C15.0804 11.7029 14.0555 10.2393 13.638 9.72613Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgAppleSwift;
