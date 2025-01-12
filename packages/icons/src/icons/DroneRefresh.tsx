import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgDroneRefresh = ({
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
			d='M9.66668 8.33331L9.95068 5.77749C9.97702 5.54054 9.79148 5.33331 9.55308 5.33331H6.44692C6.20852 5.33331 6.02304 5.54054 6.04937 5.77749L6.62715 10.9775C6.64966 11.18 6.82088 11.3333 7.02468 11.3333H7.33335'
			stroke='currentColor'
			strokeLinecap='round'
		/>
		<path
			d='M2.99992 4.66665C3.92039 4.66665 4.66659 3.92045 4.66659 2.99998C4.66659 2.07951 3.92039 1.33331 2.99992 1.33331C2.07945 1.33331 1.33325 2.07951 1.33325 2.99998C1.33325 3.92045 2.07945 4.66665 2.99992 4.66665Z'
			stroke='currentColor'
			strokeMiterlimit={1.5}
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M3 3L6 5.33333'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M3 13L6.33341 10.3333'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M13 3L10 5.33333'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M2.99992 14.6666C3.92039 14.6666 4.66659 13.9204 4.66659 13C4.66659 12.0795 3.92039 11.3333 2.99992 11.3333C2.07945 11.3333 1.33325 12.0795 1.33325 13C1.33325 13.9204 2.07945 14.6666 2.99992 14.6666Z'
			stroke='currentColor'
			strokeMiterlimit={1.5}
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M12.9999 4.66665C13.9204 4.66665 14.6666 3.92045 14.6666 2.99998C14.6666 2.07951 13.9204 1.33331 12.9999 1.33331C12.0795 1.33331 11.3333 2.07951 11.3333 2.99998C11.3333 3.92045 12.0795 4.66665 12.9999 4.66665Z'
			stroke='currentColor'
			strokeMiterlimit={1.5}
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M14.4443 11.1111C14.0318 10.0646 13.0897 9.33331 11.9935 9.33331C10.8213 9.33331 9.8252 10.1696 9.4646 11.3333'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M13.3301 11.1815H14.2667C14.4876 11.1815 14.6667 11.0024 14.6667 10.7815V9.70001'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M9.55566 12.8889C9.9682 13.9354 10.9103 14.6667 12.0065 14.6667C13.1787 14.6667 14.1748 13.8304 14.5354 12.6667'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M10.6699 12.8185H9.73325C9.51239 12.8185 9.33325 12.9976 9.33325 13.2185V14.3'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgDroneRefresh;
