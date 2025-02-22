import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgPageEdit = ({
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
			d='M13.3333 8.00004V3.83239C13.3333 3.72631 13.2912 3.62457 13.2162 3.54955L11.1171 1.45053C11.0421 1.37551 10.9404 1.33337 10.8343 1.33337H3.06663C2.84571 1.33337 2.66663 1.51246 2.66663 1.73337V14.2667C2.66663 14.4876 2.84571 14.6667 3.06663 14.6667H7.33329'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M5.33337 6.66667H10.6667M5.33337 4H8.00004M5.33337 9.33333H7.33337'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M11.9694 11.293L12.636 10.6263C12.928 10.3344 13.4013 10.3344 13.6932 10.6263C13.9852 10.9182 13.9852 11.3916 13.6932 11.6835L13.0266 12.3502M11.9694 11.293L9.97529 13.287C9.87535 13.387 9.80975 13.5161 9.78802 13.6557L9.62622 14.6933L10.6638 14.5316C10.8034 14.5098 10.9325 14.4442 11.0324 14.3442L13.0266 12.3502M11.9694 11.293L13.0266 12.3502'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M10.6666 1.33337V3.60004C10.6666 3.82095 10.8457 4.00004 11.0666 4.00004H13.3333'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgPageEdit;
