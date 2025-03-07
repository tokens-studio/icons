import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgDroneChargeFull = ({
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
			d='M9.50002 9.83331L9.66668 8.33331L9.95068 5.77749C9.97702 5.54054 9.79148 5.33331 9.55308 5.33331H6.44692C6.20852 5.33331 6.02304 5.54054 6.04937 5.77749L6.62715 10.9775C6.64966 11.18 6.82088 11.3333 7.02468 11.3333H7.33335'
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
			d='M15.3333 12.6667V14'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M10 12.6667V14'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M11.3333 12.6667V14'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M12.6667 12.6667V14'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M8.66675 14.9333V11.7333C8.66675 11.5124 8.84581 11.3333 9.06675 11.3333H13.6001C13.821 11.3333 14.0001 11.5124 14.0001 11.7333V14.9333C14.0001 15.1542 13.821 15.3333 13.6001 15.3333H9.06675C8.84581 15.3333 8.66675 15.1542 8.66675 14.9333Z'
			stroke='currentColor'
		/>
	</svg>
);
export default SvgDroneChargeFull;
