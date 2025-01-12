import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgDroneLanding = ({
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
			d='M8.97535 11.3333H7.02468C6.82088 11.3333 6.64966 11.18 6.62715 10.9775L6.04937 5.77749C6.02304 5.54054 6.20852 5.33331 6.44692 5.33331H9.55308C9.79148 5.33331 9.97702 5.54054 9.95068 5.77749L9.37288 10.9775C9.35035 11.18 9.17915 11.3333 8.97535 11.3333Z'
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
			d='M9.66675 10.3333L10.5001 11'
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
			d='M12.9999 10.6667V14.6667M12.9999 14.6667L11.3333 13M12.9999 14.6667L14.6666 13'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgDroneLanding;
