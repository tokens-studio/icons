import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgPodcast = ({
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
			d='M3.99998 13.6671C2.38072 12.4508 1.33331 10.5144 1.33331 8.33329C1.33331 4.65139 4.31808 1.66663 7.99998 1.66663C11.6818 1.66663 14.6666 4.65139 14.6666 8.33329C14.6666 10.5144 13.6192 12.4508 12 13.6671'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M3.99998 13.6671C2.38072 12.4508 1.33331 10.5144 1.33331 8.33329C1.33331 4.65139 4.31808 1.66663 7.99998 1.66663C11.6818 1.66663 14.6666 4.65139 14.6666 8.33329C14.6666 10.5144 13.6192 12.4508 12 13.6671'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M5.01853 11C4.38514 10.2924 4 9.35784 4 8.33337C4 6.12423 5.79086 4.33337 8 4.33337C10.2091 4.33337 12 6.12423 12 8.33337C12 9.35784 11.6149 10.2924 10.9815 11'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M8.00002 9.66667C8.73642 9.66667 9.33335 9.06973 9.33335 8.33333C9.33335 7.59695 8.73642 7 8.00002 7C7.26362 7 6.66669 7.59695 6.66669 8.33333C6.66669 9.06973 7.26362 9.66667 8.00002 9.66667Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M6.71732 11.8552L7.26039 11.4931C7.70826 11.1945 8.29172 11.1945 8.73959 11.4931L9.28266 11.8552C9.71926 12.1462 9.94452 12.6662 9.85826 13.1838L9.51899 15.2192C9.41186 15.8622 8.85559 16.3334 8.20379 16.3334H7.79619C7.14439 16.3334 6.58812 15.8622 6.48097 15.2192L6.14172 13.1838C6.05546 12.6662 6.28075 12.1462 6.71732 11.8552Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgPodcast;
