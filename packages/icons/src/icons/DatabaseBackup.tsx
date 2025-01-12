import type { SVGProps } from 'react';
interface SVGRProps {
	title?: string;
	titleId?: string;
}
const SvgDatabaseBackup = ({
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
			d='M2.66663 4V8C2.66663 8 2.66663 10 7.33329 10C7.72829 10 8.08989 9.98567 8.42083 9.95947'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M12 4V8'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M7.33329 2C12 2 12 4 12 4C12 4 12 6 7.33329 6C2.66663 6 2.66663 4 2.66663 4C2.66663 4 2.66663 2 7.33329 2Z'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M7.33329 14C2.66663 14 2.66663 12 2.66663 12V8'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M15.111 11.7778C14.6984 10.7313 13.7564 10 12.6601 10C11.4879 10 10.4918 10.8363 10.1312 12'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M13.9967 11.7778H15.1109C15.2338 11.7778 15.3334 11.6782 15.3334 11.5553V10.2963'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M10.2224 13.5555C10.6349 14.602 11.577 15.3333 12.6733 15.3333C13.8455 15.3333 14.8415 14.497 15.2021 13.3333'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M11.3365 13.5555H10.2223C10.0995 13.5555 9.99988 13.6551 9.99988 13.778V15.037'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);
export default SvgDatabaseBackup;
