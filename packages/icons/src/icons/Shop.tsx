import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgShop = ({
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
			d='M2 6.66663V12.6666C2 13.403 2.59695 14 3.33333 14H12.6667C13.4031 14 14 13.403 14 12.6666V6.66663'
			stroke='currentColor'
		/>
		<path
			d='M9.88891 14V9.99996C9.88891 9.26356 9.29198 8.66663 8.55558 8.66663H7.22224C6.48587 8.66663 5.88892 9.26356 5.88892 9.99996V14'
			stroke='currentColor'
			strokeMiterlimit={16}
		/>
		<path
			d='M14.5455 6.24279L13.4161 2.29011C13.3671 2.11839 13.2101 2 13.0315 2H10.3333L10.6501 5.80251C10.6605 5.92695 10.7281 6.03936 10.8354 6.1033C11.0949 6.25799 11.6034 6.54466 11.9999 6.66667C12.6771 6.875 13.6671 6.79987 14.2309 6.73053C14.4654 6.70173 14.6104 6.46993 14.5455 6.24279Z'
			stroke='currentColor'
		/>
		<path
			d='M9.33339 6.66667C9.71172 6.55025 10.192 6.28393 10.4607 6.12538C10.5886 6.04991 10.659 5.90735 10.6467 5.75936L10.3334 2H5.66672L5.35344 5.75936C5.34111 5.90735 5.41154 6.04991 5.53943 6.12538C5.8081 6.28393 6.28839 6.55025 6.66672 6.66667C7.66205 6.97293 8.33805 6.97293 9.33339 6.66667Z'
			stroke='currentColor'
		/>
		<path
			d='M2.58383 2.29011L1.45449 6.24279C1.38959 6.46993 1.53459 6.70173 1.76905 6.73053C2.33283 6.79987 3.32288 6.875 4.00005 6.66667C4.39657 6.54466 4.90506 6.25799 5.16457 6.1033C5.27183 6.03936 5.33947 5.92695 5.34985 5.80251L5.66672 2H2.96844C2.78985 2 2.63289 2.11839 2.58383 2.29011Z'
			stroke='currentColor'
		/>
	</svg>
);
export default SvgShop;
