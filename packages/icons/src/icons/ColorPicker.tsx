import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgColorPicker = ({
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
			d='M4.66655 8.77399L8.30948 5.13106C8.56982 4.8707 8.99195 4.8707 9.25228 5.13106L10.6665 6.54527C10.9268 6.80559 10.9268 7.22772 10.6665 7.48806L9.38062 8.77399M4.66655 8.77399L3.21831 10.2223C3.15607 10.2845 3.10678 10.3584 3.07326 10.4398L2.38791 12.1042C2.04947 12.9261 2.8714 13.7481 3.69334 13.4097L5.35776 12.7243C5.43915 12.6908 5.51309 12.6415 5.57533 12.5793L9.38062 8.77399M4.66655 8.77399H9.38062'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M9.25195 2.30267L10.6662 3.71689M10.6662 3.71689L11.609 2.77408C11.8694 2.51373 12.2914 2.51373 12.5518 2.77408L13.0232 3.24549C13.2836 3.50583 13.2836 3.92795 13.0232 4.18829L12.0804 5.13111M10.6662 3.71689L12.0804 5.13111M13.4946 6.54532L12.0804 5.13111'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgColorPicker;
